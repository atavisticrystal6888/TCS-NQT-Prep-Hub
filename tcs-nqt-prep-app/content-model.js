(function (global) {
    const CONTENT_VERSION = '2026.06.04';
    const LAST_REVIEWED_AT = '2026-06-04';

    function getQuestionBankSource() {
        if (typeof QUESTION_BANK !== 'undefined') return QUESTION_BANK;
        return Array.isArray(global.QUESTION_BANK) ? global.QUESTION_BANK : [];
    }

    function getFlashcardSource() {
        if (typeof FLASHCARD_DATA !== 'undefined') return FLASHCARD_DATA;
        return Array.isArray(global.FLASHCARD_DATA) ? global.FLASHCARD_DATA : [];
    }

    function getStudyMaterialsSource() {
        if (typeof STUDY_MATERIALS !== 'undefined') return STUDY_MATERIALS;
        return global.STUDY_MATERIALS || {};
    }

    function getInterviewDataSource() {
        if (typeof INTERVIEW_DATA !== 'undefined') return INTERVIEW_DATA;
        return global.INTERVIEW_DATA || {};
    }

    const OFFICIAL_SOURCE_LINKS = {
        tcsAbout: 'https://www.tcs.com/who-we-are',
        tcsNqt: 'https://www.tcsion.com/hub/national-qualifier-test/',
        tcsNextStep: 'https://nextstep.tcs.com/campus/'
    };

    const CHANGELOG = [
        {
            version: CONTENT_VERSION,
            date: LAST_REVIEWED_AT,
            summary: 'Added content metadata, refreshed TCS/NQT references, and corrected audited question-bank entries.'
        },
        {
            version: '2026.05.31',
            date: '2026-05-31',
            summary: 'Aligned the app shell with the current PWA flow and exam-date driven planning.'
        }
    ];

    const QUESTION_TAGS_BY_TOPIC = {
        quantitative: ['aptitude', 'practice', 'problem-solving'],
        logical: ['reasoning', 'logic', 'syllogism'],
        verbal: ['grammar', 'vocabulary', 'communication'],
        programming: ['coding', 'fundamentals', 'output-tracing'],
        dbms: ['sql', 'database', 'normalization'],
        networking: ['osi', 'tcp-ip', 'protocols'],
        os: ['processes', 'memory', 'scheduling'],
        dsa: ['algorithms', 'data-structures', 'complexity']
    };

    const QUESTION_SOURCES_BY_TOPIC = {
        quantitative: 'Curated TCS-style aptitude practice set',
        logical: 'Curated TCS-style reasoning practice set',
        verbal: 'Curated verbal ability practice set',
        programming: 'Curated programming concepts practice set',
        dbms: 'Curated DBMS and SQL fundamentals practice set',
        networking: 'Curated computer networks fundamentals practice set',
        os: 'Curated operating systems fundamentals practice set',
        dsa: 'Curated data structures and algorithms practice set'
    };

    const QUESTION_CONFIDENCE_BY_TOPIC = {
        quantitative: 'medium',
        logical: 'medium',
        verbal: 'medium',
        programming: 'medium',
        dbms: 'medium',
        networking: 'medium',
        os: 'medium',
        dsa: 'medium'
    };

    const QUESTION_VARIANTS_BY_TOPIC = {
        quantitative: ['cognitive', 'it', 'non-tech'],
        logical: ['cognitive', 'it', 'non-tech'],
        verbal: ['cognitive', 'it', 'non-tech'],
        programming: ['foundation', 'it'],
        dbms: ['it'],
        networking: ['it'],
        os: ['it'],
        dsa: ['it']
    };

    const STUDY_TOPIC_METADATA = {
        quant: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'high',
            tags: ['quantitative', 'formulas', 'shortcuts'],
            examVariant: ['cognitive', 'it', 'non-tech'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        reasoning: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['logical', 'reasoning', 'practice'],
            examVariant: ['cognitive', 'it', 'non-tech'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        verbal: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['verbal', 'grammar', 'vocabulary'],
            examVariant: ['cognitive', 'it', 'non-tech'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        programming: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['programming', 'logic', 'fundamentals'],
            examVariant: ['foundation', 'it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        dbms: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['dbms', 'sql', 'joins'],
            examVariant: ['it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        os: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['operating-systems', 'memory', 'processes'],
            examVariant: ['it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        networks: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['networks', 'protocols', 'osi'],
            examVariant: ['it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        sysdesign: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['system-design', 'architecture', 'basics'],
            examVariant: ['it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        }
    };

    const INTERVIEW_ROUND_METADATA = {
        technical: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['technical', 'interview', 'fundamentals'],
            examVariant: ['it'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        managerial: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: ['managerial', 'situational', 'behavioral'],
            examVariant: ['general'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
        },
        hr: {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium-high',
            tags: ['hr', 'company-facts', 'behavioral'],
            examVariant: ['general'],
            sources: [
                { label: 'TCS About', href: OFFICIAL_SOURCE_LINKS.tcsAbout },
                { label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }
            ]
        }
    };

    const FLASHCARD_METADATA_BY_TOPIC = {
        quantitative: { reviewedAt: LAST_REVIEWED_AT, confidence: 'high', examVariant: ['cognitive', 'it', 'non-tech'] },
        programming: { reviewedAt: LAST_REVIEWED_AT, confidence: 'medium', examVariant: ['foundation', 'it'] },
        dbms: { reviewedAt: LAST_REVIEWED_AT, confidence: 'medium', examVariant: ['it'] },
        os: { reviewedAt: LAST_REVIEWED_AT, confidence: 'medium', examVariant: ['it'] },
        networks: { reviewedAt: LAST_REVIEWED_AT, confidence: 'medium', examVariant: ['it'] },
        tcs: { reviewedAt: LAST_REVIEWED_AT, confidence: 'high', examVariant: ['general'] }
    };

    function uniqueStrings(values) {
        return Array.from(new Set((values || []).filter(Boolean).map((value) => String(value).trim())));
    }

    function ensureArray(value) {
        return Array.isArray(value) ? [...value] : [];
    }

    function buildQuestionMeta(question) {
        return {
            source: QUESTION_SOURCES_BY_TOPIC[question.topic] || 'Curated practice set',
            reviewedAt: LAST_REVIEWED_AT,
            confidence: QUESTION_CONFIDENCE_BY_TOPIC[question.topic] || 'medium',
            tags: uniqueStrings([question.topic, question.difficulty, ...(QUESTION_TAGS_BY_TOPIC[question.topic] || [])]),
            examVariant: ensureArray(QUESTION_VARIANTS_BY_TOPIC[question.topic] || ['general']),
            contentVersion: CONTENT_VERSION
        };
    }

    function hydrateQuestionBank() {
        const bank = getQuestionBankSource();
        if (!Array.isArray(bank)) return [];
        bank.forEach((question) => {
            question.meta = {
                ...buildQuestionMeta(question),
                ...(question.meta || {})
            };
        });
        return bank;
    }

    function hydrateFlashcards() {
        const cards = getFlashcardSource();
        if (!Array.isArray(cards)) return [];
        cards.forEach((card) => {
            const topicMeta = FLASHCARD_METADATA_BY_TOPIC[card.topic] || {};
            card.meta = {
                reviewedAt: LAST_REVIEWED_AT,
                confidence: topicMeta.confidence || 'medium',
                examVariant: ensureArray(topicMeta.examVariant || ['general']),
                tags: uniqueStrings([card.topic, 'flashcard']),
                contentVersion: CONTENT_VERSION
            };
        });
        return cards;
    }

    function matchesArrayFilter(candidateValues, filterValues) {
        if (!filterValues || filterValues.length === 0) return true;
        return candidateValues.some((value) => filterValues.includes(value));
    }

    function getQuestionBank() {
        return Array.isArray(getQuestionBankSource()) ? getQuestionBankSource() : [];
    }

    function getQuestions(filters = {}) {
        const topics = ensureArray(filters.topics);
        const ids = new Set((filters.ids || []).map((value) => Number(value)));
        const difficulty = filters.difficulty;
        const examVariant = filters.examVariant ? [filters.examVariant] : [];

        return getQuestionBank().filter((question) => {
            if (topics.length > 0 && !topics.includes(question.topic)) return false;
            if (ids.size > 0 && !ids.has(Number(question.id))) return false;
            if (difficulty === 'easy' && question.difficulty !== 'easy') return false;
            if (difficulty === 'hard' && question.difficulty === 'easy') return false;
            if (!matchesArrayFilter(ensureArray(question.meta?.examVariant), examVariant)) return false;
            return true;
        });
    }

    function getQuestionById(id) {
        const numericId = Number(id);
        return getQuestionBank().find((question) => question.id === numericId) || null;
    }

    function getFlashcards(topic = 'all') {
        const cards = Array.isArray(getFlashcardSource()) ? getFlashcardSource() : [];
        if (topic === 'all') return cards;
        return cards.filter((card) => card.topic === topic);
    }

    function getStudyTopicMeta(topicKey) {
        return {
            reviewedAt: LAST_REVIEWED_AT,
            confidence: 'medium',
            tags: uniqueStrings([topicKey, 'study-material']),
            examVariant: ['general'],
            sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }],
            ...(STUDY_TOPIC_METADATA[topicKey] || {})
        };
    }

    function getStudyTopic(topicKey) {
        const topic = getStudyMaterialsSource()?.[topicKey];
        if (!topic) return null;
        return {
            ...topic,
            meta: getStudyTopicMeta(topicKey)
        };
    }

    function getInterviewRound(round) {
        return {
            items: ensureArray(getInterviewDataSource()?.[round]),
            meta: {
                reviewedAt: LAST_REVIEWED_AT,
                confidence: 'medium',
                tags: uniqueStrings([round, 'interview']),
                examVariant: ['general'],
                sources: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }],
                ...(INTERVIEW_ROUND_METADATA[round] || {})
            }
        };
    }

    function getFreshnessSummary() {
        return {
            version: CONTENT_VERSION,
            reviewedAt: LAST_REVIEWED_AT,
            officialLinks: { ...OFFICIAL_SOURCE_LINKS },
            changelog: [...CHANGELOG],
            questionCount: getQuestionBank().length,
            flashcardCount: getFlashcards('all').length,
            sections: [
                {
                    label: 'Question bank',
                    reviewedAt: LAST_REVIEWED_AT,
                    confidence: 'medium',
                    note: `${getQuestionBank().length} curated practice questions`,
                    sourceLinks: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
                },
                {
                    label: 'Study materials',
                    reviewedAt: LAST_REVIEWED_AT,
                    confidence: 'medium-high',
                    note: `${Object.keys(getStudyMaterialsSource() || {}).length} topic guides`,
                    sourceLinks: [{ label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }]
                },
                {
                    label: 'TCS company facts',
                    reviewedAt: LAST_REVIEWED_AT,
                    confidence: 'high',
                    note: 'Cross-checked with current official TCS and TCS iON pages',
                    sourceLinks: [
                        { label: 'TCS About', href: OFFICIAL_SOURCE_LINKS.tcsAbout },
                        { label: 'TCS iON NQT Hub', href: OFFICIAL_SOURCE_LINKS.tcsNqt }
                    ]
                }
            ]
        };
    }

    hydrateQuestionBank();
    hydrateFlashcards();

    global.AppContent = {
        version: CONTENT_VERSION,
        reviewedAt: LAST_REVIEWED_AT,
        officialLinks: OFFICIAL_SOURCE_LINKS,
        changelog: CHANGELOG,
        getQuestionBank,
        getQuestions,
        getQuestionById,
        getFlashcards,
        getStudyTopic,
        getStudyTopicMeta,
        getInterviewRound,
        getFreshnessSummary
    };
})(typeof window !== 'undefined' ? window : globalThis);