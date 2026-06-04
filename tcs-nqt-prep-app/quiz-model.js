(function (global) {
    function uniqueNumbers(values) {
        return Array.from(
            new Set((values || []).map((value) => Number(value)).filter((value) => Number.isFinite(value)))
        );
    }

    function ensureObject(value) {
        return value && typeof value === 'object' ? value : {};
    }

    function ensureArray(value) {
        return Array.isArray(value) ? [...value] : [];
    }

    function getTopicAccuracy(progress, topic) {
        const stats = ensureObject(progress?.topicStats?.[topic]);
        if (!stats.attempted) return null;
        return stats.correct / stats.attempted;
    }

    function getWeakTopicKeys(progress, topicMeta, threshold = 70, includeUntested = true) {
        return Object.keys(topicMeta || {}).filter((topic) => {
            const stats = ensureObject(progress?.topicStats?.[topic]);
            if (!stats.attempted) return includeUntested;
            return Math.round((stats.correct / stats.attempted) * 100) < threshold;
        });
    }

    function matchesDifficulty(question, difficulty) {
        if (!difficulty || difficulty === 'mixed' || difficulty === 'medium') return true;
        if (difficulty === 'easy') return question.difficulty === 'easy';
        if (difficulty === 'hard') return question.difficulty !== 'easy';
        return true;
    }

    function matchesVariant(question, examVariant) {
        if (!examVariant || examVariant === 'all') return true;
        const variants = ensureArray(question.meta?.examVariant);
        return variants.length === 0 || variants.includes(examVariant);
    }

    function buildAdaptiveQuestionPool(bank, progress, options = {}) {
        const selectedTopics = ensureArray(options.selectedTopics);
        const numQuestions = Number(options.numQuestions) || 25;
        const difficulty = options.difficulty || 'mixed';
        const examVariant = options.examVariant || 'all';
        const questionStats = ensureObject(progress?.questionStats);

        const candidates = ensureArray(bank).filter((question) => {
            if (selectedTopics.length > 0 && !selectedTopics.includes(question.topic)) return false;
            if (!matchesDifficulty(question, difficulty)) return false;
            if (!matchesVariant(question, examVariant)) return false;
            return true;
        });

        return candidates
            .map((question) => {
                const mastery = getTopicAccuracy(progress, question.topic);
                const perQuestion = ensureObject(questionStats[question.id]);
                const topicNeed = mastery === null ? 2.2 : (1 - mastery) * 2.8;
                const unseenBonus = perQuestion.seen ? 0 : 1.1;
                const mistakeBoost = Math.min(2.4, (Number(perQuestion.wrong) || 0) * 0.8);
                const lowConfidenceBoost = perQuestion.lastConfidence === 'low'
                    ? 1.2
                    : perQuestion.lastConfidence === 'medium'
                        ? 0.55
                        : 0;
                const difficultyWeight = mastery === null || mastery < 0.45
                    ? { easy: 1.4, medium: 1.0, hard: 0.55 }[question.difficulty] || 0.8
                    : mastery < 0.7
                        ? { easy: 0.8, medium: 1.35, hard: 1.0 }[question.difficulty] || 1
                        : { easy: 0.45, medium: 1.0, hard: 1.6 }[question.difficulty] || 1;

                return {
                    question,
                    score: topicNeed + unseenBonus + mistakeBoost + lowConfidenceBoost + difficultyWeight
                };
            })
            .sort((left, right) => right.score - left.score)
            .slice(0, Math.min(numQuestions, candidates.length))
            .map((entry) => entry.question);
    }

    function summarizeQuiz(questions, answers, options = {}) {
        const answerMap = ensureObject(answers);
        const confidenceMap = ensureObject(options.confidence);
        const flaggedIds = uniqueNumbers(options.flaggedIds);

        let correct = 0;
        let wrong = 0;
        let skipped = 0;
        const topicResults = {};
        const wrongQuestionIds = [];
        const skippedQuestionIds = [];
        const lowConfidenceQuestionIds = [];

        ensureArray(questions).forEach((question) => {
            const answer = answerMap[question.id];
            const confidence = confidenceMap[question.id] || 'unrated';
            if (!topicResults[question.topic]) {
                topicResults[question.topic] = {
                    correct: 0,
                    wrong: 0,
                    skipped: 0,
                    total: 0,
                    lowConfidence: 0
                };
            }

            topicResults[question.topic].total += 1;
            if (confidence === 'low') {
                topicResults[question.topic].lowConfidence += 1;
                lowConfidenceQuestionIds.push(question.id);
            }

            if (answer === undefined) {
                skipped += 1;
                skippedQuestionIds.push(question.id);
                topicResults[question.topic].skipped += 1;
                return;
            }

            if (answer === question.answer) {
                correct += 1;
                topicResults[question.topic].correct += 1;
                return;
            }

            wrong += 1;
            wrongQuestionIds.push(question.id);
            topicResults[question.topic].wrong += 1;
        });

        const total = ensureArray(questions).length;
        return {
            correct,
            wrong,
            skipped,
            total,
            percent: total > 0 ? Math.round((correct / total) * 100) : 0,
            topicResults,
            wrongQuestionIds,
            skippedQuestionIds,
            lowConfidenceQuestionIds: uniqueNumbers(lowConfidenceQuestionIds),
            flaggedQuestionIds: flaggedIds,
            answeredCount: correct + wrong
        };
    }

    function buildRetryPool(bank, ids, limit = 25) {
        const wantedIds = uniqueNumbers(ids);
        if (wantedIds.length === 0) return [];

        const byId = new Map(ensureArray(bank).map((question) => [question.id, question]));
        return wantedIds
            .map((id) => byId.get(id))
            .filter(Boolean)
            .slice(0, limit);
    }

    function buildQuizSnapshot(quiz) {
        const questions = ensureArray(quiz?.questions);
        if (questions.length === 0) return null;

        return {
            questionIds: questions.map((question) => question.id),
            currentIndex: Number(quiz.currentIndex) || 0,
            answers: { ...ensureObject(quiz.answers) },
            flaggedIds: uniqueNumbers(quiz.flaggedIds),
            confidence: { ...ensureObject(quiz.confidence) },
            startTime: Number(quiz.startTime) || Date.now(),
            timeLimit: Number(quiz.timeLimit) || 0,
            timeRemaining: Number(quiz.timeRemaining) || 0,
            instantFeedback: quiz.instantFeedback !== false,
            mode: quiz.mode || 'standard',
            examVariant: quiz.examVariant || 'all',
            reviewMode: quiz.reviewMode || 'standard',
            presetKey: quiz.presetKey || 'custom'
        };
    }

    function restoreQuizSnapshot(snapshot, bank) {
        if (!snapshot || !Array.isArray(snapshot.questionIds) || snapshot.questionIds.length === 0) {
            return null;
        }

        const byId = new Map(ensureArray(bank).map((question) => [question.id, question]));
        const questions = snapshot.questionIds.map((id) => byId.get(id)).filter(Boolean);
        if (questions.length === 0) return null;

        return {
            questions,
            currentIndex: Math.min(Math.max(Number(snapshot.currentIndex) || 0, 0), questions.length - 1),
            answers: { ...ensureObject(snapshot.answers) },
            flaggedIds: uniqueNumbers(snapshot.flaggedIds),
            confidence: { ...ensureObject(snapshot.confidence) },
            startTime: Number(snapshot.startTime) || Date.now(),
            timeLimit: Number(snapshot.timeLimit) || 0,
            timeRemaining: Number(snapshot.timeRemaining) || 0,
            instantFeedback: snapshot.instantFeedback !== false,
            mode: snapshot.mode || 'standard',
            examVariant: snapshot.examVariant || 'all',
            reviewMode: snapshot.reviewMode || 'standard',
            presetKey: snapshot.presetKey || 'custom'
        };
    }

    function buildDashboardRecommendations(progress, topicMeta) {
        const actions = [];
        const weakTopics = getWeakTopicKeys(progress, topicMeta, 70, false);
        const resumeSnapshot = progress?.lastSession?.type === 'quiz' ? progress.lastSession.snapshot : null;
        const daysToExam = progress?.examDate
            ? Math.ceil((new Date(`${progress.examDate}T00:00:00`) - new Date(new Date().toDateString())) / (1000 * 60 * 60 * 24))
            : null;

        if (resumeSnapshot?.questionIds?.length) {
            actions.push({
                id: 'resume',
                title: 'Resume last test',
                description: `Continue from question ${Math.min((resumeSnapshot.currentIndex || 0) + 1, resumeSnapshot.questionIds.length)} of ${resumeSnapshot.questionIds.length}.`,
                action: 'resume-quiz-session',
                tone: 'primary'
            });
        }

        if ((progress?.mistakeQuestionIds || []).length > 0) {
            actions.push({
                id: 'mistakes',
                title: 'Review your mistake bank',
                description: `${progress.mistakeQuestionIds.length} recurring question${progress.mistakeQuestionIds.length === 1 ? '' : 's'} need another attempt.`,
                action: 'start-mistake-quiz',
                tone: 'warning'
            });
        }

        if (weakTopics.length > 0) {
            const focusTopic = weakTopics[0];
            actions.push({
                id: 'weak-topic',
                title: `Attack ${topicMeta[focusTopic]?.name || focusTopic}`,
                description: 'Your recent accuracy is below the target range here.',
                action: 'start-quick-test',
                topic: focusTopic,
                tone: 'accent'
            });
        }

        if ((progress?.testsCompleted || 0) === 0) {
            actions.push({
                id: 'baseline',
                title: 'Take a baseline mock',
                description: 'Start with a timed mock to reveal weak areas before deep study.',
                action: 'apply-quiz-preset',
                preset: 'full-mock',
                tone: 'neutral'
            });
        } else {
            actions.push({
                id: 'adaptive',
                title: 'Run adaptive practice',
                description: 'The pool will bias toward weak topics, mistakes, and low-confidence questions.',
                action: 'apply-quiz-preset',
                preset: 'adaptive',
                tone: 'success'
            });
        }

        if (daysToExam !== null && daysToExam <= 7 && daysToExam >= 0) {
            actions.push({
                id: 'sectional',
                title: 'Prioritize a timed sectional',
                description: 'Use a section-length sprint to sharpen speed under exam pressure.',
                action: 'apply-quiz-preset',
                preset: 'reasoning-sprint',
                tone: 'danger'
            });
        }

        return actions.slice(0, 4);
    }

    function buildTodayFocus(progress, topicMeta) {
        const weakTopics = getWeakTopicKeys(progress, topicMeta, 70, false)
            .slice(0, 2)
            .map((topic) => topicMeta[topic]?.name || topic);
        const daysToExam = progress?.examDate
            ? Math.ceil((new Date(`${progress.examDate}T00:00:00`) - new Date(new Date().toDateString())) / (1000 * 60 * 60 * 24))
            : null;

        const items = [];
        if (progress?.lastSession?.type === 'quiz' && progress.lastSession.snapshot?.questionIds?.length) {
            items.push('Resume your unfinished quiz before starting a new one.');
        }
        if (weakTopics.length > 0) {
            items.push(`Spend the first study block on ${weakTopics.join(' and ')}.`);
        }
        if ((progress?.mistakeQuestionIds || []).length > 0) {
            items.push(`Retry ${Math.min(progress.mistakeQuestionIds.length, 10)} questions from the mistake bank with explanation review.`);
        }
        if (daysToExam !== null && daysToExam <= 7 && daysToExam >= 0) {
            items.push('Finish with one timed sectional or a full mock plus a mistake review pass.');
        } else {
            items.push('Close the session with flashcards or formula revision to reinforce recall.');
        }

        return {
            headline: daysToExam !== null && daysToExam >= 0
                ? `${daysToExam} day${daysToExam === 1 ? '' : 's'} left: focus on the highest-yield revision tasks.`
                : 'Work from weak topics first, then end with active recall.',
            items: items.slice(0, 4)
        };
    }

    global.QuizModel = {
        getTopicAccuracy,
        getWeakTopicKeys,
        buildAdaptiveQuestionPool,
        summarizeQuiz,
        buildRetryPool,
        buildQuizSnapshot,
        restoreQuizSnapshot,
        buildDashboardRecommendations,
        buildTodayFocus
    };
})(typeof window !== 'undefined' ? window : globalThis);