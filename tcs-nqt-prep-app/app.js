// ==========================================
// TCS NQT PREP HUB — MAIN APPLICATION
// ==========================================

// ===== STATE =====
let state = {
    currentPage: 'dashboard',
    quiz: {
        questions: [],
        currentIndex: 0,
        answers: {},
        startTime: null,
        timeLimit: 0,
        timerInterval: null,
        submitted: false,
        instantFeedback: true
    },
    flashcard: {
        cards: [],
        currentIndex: 0,
        flipped: false
    },
    progress: loadProgress()
};

function loadProgress() {
    try {
        const saved = localStorage.getItem('tcsNqtProgress');
        if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {
        totalAttempted: 0,
        totalCorrect: 0,
        totalTime: 0,
        testsCompleted: 0,
        streak: 0,
        lastStudyDate: null,
        topicStats: {},
        testHistory: [],
        activities: [],
        flashcardProgress: {},
        notes: [],
        bookmarks: []
    };
}

function saveProgress() {
    try {
        localStorage.setItem('tcsNqtProgress', JSON.stringify(state.progress));
    } catch(e) {}
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTheme();
    updateDashboard();
    updateStreak();
    updateCountdown();
    loadFlashcards();
    renderInterviewContent('technical');
    initStudyTabs();
    initInterviewTabs();
    initResourceTabs();
    renderFormulaGrid();
    renderVideoGrid();
    renderLinksGrid();
    renderTopicResourceGrid();
    renderProgressPage();
    renderDSATab();
    renderCodingTab();
    renderPapersTab();
    initKeyboardShortcuts();
    initScrollToTop();
    renderNotesList();
    renderBookmarksList();
    renderCustomFcList();
    updateFcStats();
});

// ===== NAVIGATION =====
function initNavigation() {
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.addEventListener('click', () => {
            const page = li.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    state.currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.toggle('active', li.dataset.page === page);
    });
    document.getElementById('pageTitle').textContent = {
        dashboard: 'Dashboard',
        quiz: 'Take a Test',
        study: 'Study Materials',
        interview: 'Interview Prep',
        flashcards: 'Flashcards',
        resources: 'Resources & Tips',
        progress: 'My Progress',
        notes: 'Notes & Timer',
        bookmarks: 'Bookmarks',
        formulas: 'Formula Sheet',
        analytics: 'Analytics',
        schedule: 'Study Plan'
    }[page] || 'Dashboard';

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');

    if (page === 'dashboard') updateDashboard();
    if (page === 'progress') renderProgressPage();
    if (page === 'notes') renderNotesList();
    if (page === 'bookmarks') renderBookmarksList();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

// ===== THEME =====
function initTheme() {
    const saved = localStorage.getItem('tcsNqtTheme');
    if (saved === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeIcon').className = 'fas fa-sun';
    }
}

function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? '' : 'dark');
    document.getElementById('themeIcon').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('tcsNqtTheme', isDark ? 'light' : 'dark');
}

// ===== COUNTDOWN =====
function updateCountdown() {
    const now = new Date();
    // Set exam date to next week from now
    const examDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const diff = examDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdownText').textContent = `${days} days to exam`;

    setInterval(() => {
        const now2 = new Date();
        const diff2 = examDate - now2;
        const d = Math.floor(diff2 / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('countdownText').textContent = `${d}d ${h}h to exam`;
    }, 60000);
}

// ===== STREAK =====
function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = state.progress.lastStudyDate;

    if (lastDate === today) {
        // Already studied today
    } else if (lastDate) {
        const last = new Date(lastDate);
        const diff = Math.floor((new Date(today) - last) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
            state.progress.streak++;
        } else if (diff > 1) {
            state.progress.streak = 0;
        }
    }

    state.progress.lastStudyDate = today;
    saveProgress();
    document.getElementById('streakCount').textContent = state.progress.streak;
}

// ===== DASHBOARD =====
function updateDashboard() {
    const p = state.progress;
    document.getElementById('totalAttempted').textContent = p.totalAttempted;
    document.getElementById('accuracy').textContent = p.totalAttempted > 0
        ? Math.round((p.totalCorrect / p.totalAttempted) * 100) + '%' : '0%';
    document.getElementById('totalTime').textContent = formatTime(p.totalTime);
    document.getElementById('testsCompleted').textContent = p.testsCompleted;

    renderTopicProgress();
    renderRecentActivity();
    renderWeakAreas();
}

function renderTopicProgress() {
    const container = document.getElementById('topicProgress');
    let html = '';
    for (const [key, meta] of Object.entries(TOPIC_META)) {
        const stats = state.progress.topicStats[key] || { attempted: 0, correct: 0 };
        const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
        html += `
            <div class="topic-bar">
                <span class="topic-bar-label">${meta.icon} ${meta.name}</span>
                <div class="topic-bar-track">
                    <div class="topic-bar-fill" style="width:${pct}%; background:${meta.color};"></div>
                </div>
                <span class="topic-bar-value">${pct}%</span>
            </div>`;
    }
    container.innerHTML = html;
}

function renderRecentActivity() {
    const container = document.getElementById('recentActivity');
    const activities = state.progress.activities.slice(-10).reverse();
    if (activities.length === 0) {
        container.innerHTML = '<p class="empty-state">No activity yet. Start a quiz!</p>';
        return;
    }
    container.innerHTML = activities.map(a => `
        <div class="activity-item">
            <span class="activity-icon">${a.icon}</span>
            <span>${a.text}</span>
            <span class="activity-time">${a.time}</span>
        </div>
    `).join('');
}

function renderWeakAreas() {
    const container = document.getElementById('weakAreas');
    const weak = [];
    for (const [key, meta] of Object.entries(TOPIC_META)) {
        const stats = state.progress.topicStats[key] || { attempted: 0, correct: 0 };
        if (stats.attempted > 0) {
            const pct = Math.round((stats.correct / stats.attempted) * 100);
            if (pct < 70) weak.push({ key, name: meta.name, icon: meta.icon, pct });
        }
    }
    if (weak.length === 0 && state.progress.totalAttempted > 0) {
        container.innerHTML = '<p class="empty-state">Great job! No weak areas detected. Keep it up! 💪</p>';
    } else if (weak.length === 0) {
        container.innerHTML = '<p class="empty-state">Take a few quizzes to see your weak areas.</p>';
    } else {
        container.innerHTML = weak.sort((a,b) => a.pct - b.pct).map(w => `
            <div class="weak-area-item" onclick="startQuickTest('${w.key}')">
                <span>${w.icon}</span>
                <span>${w.name}</span>
                <span style="margin-left:auto;font-weight:700;color:var(--danger);">${w.pct}%</span>
            </div>
        `).join('');
    }
}

// ===== QUIZ ENGINE =====
function startQuiz() {
    const selectedTopics = [];
    document.querySelectorAll('#topicCheckboxes input:checked').forEach(cb => {
        selectedTopics.push(cb.value);
    });

    if (selectedTopics.length === 0) {
        alert('Please select at least one topic.');
        return;
    }

    const numQ = parseInt(document.querySelector('input[name="numQ"]:checked').value);
    const diff = document.querySelector('input[name="diff"]:checked').value;
    const timeLimit = parseInt(document.querySelector('input[name="timeLimit"]:checked').value);
    const instantFeedback = document.getElementById('instantFeedback').checked;

    let pool = QUESTION_BANK.filter(q => selectedTopics.includes(q.topic));
    if (diff === 'easy') pool = pool.filter(q => q.difficulty === 'easy');
    else if (diff === 'hard') pool = pool.filter(q => q.difficulty === 'hard' || q.difficulty === 'medium');

    // Shuffle and pick
    pool = shuffleArray(pool).slice(0, Math.min(numQ, pool.length));

    if (pool.length === 0) {
        alert('No questions available for the selected criteria.');
        return;
    }

    state.quiz = {
        questions: pool,
        currentIndex: 0,
        answers: {},
        startTime: Date.now(),
        timeLimit: timeLimit * 60,
        timerInterval: null,
        submitted: false,
        instantFeedback: instantFeedback
    };

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    document.getElementById('qTotal').textContent = pool.length;
    renderQuestion();
    renderNavigator();

    if (timeLimit > 0) startTimer();
}

function startQuickTest(type) {
    if (type === 'mock') {
        // Select all topics, 100 questions, 150 minutes
        document.querySelectorAll('#topicCheckboxes input').forEach(cb => cb.checked = true);
        document.querySelector('input[name="numQ"][value="100"]').checked = true;
        document.querySelector('input[name="timeLimit"][value="90"]').checked = true;
    } else {
        document.querySelectorAll('#topicCheckboxes input').forEach(cb => {
            cb.checked = (cb.value === type);
        });
        document.querySelector('input[name="numQ"][value="25"]').checked = true;
    }
    startQuiz();
}

function renderQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    const idx = state.quiz.currentIndex;

    document.getElementById('qCurrent').textContent = idx + 1;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('qTopicBadge').textContent = TOPIC_META[q.topic]?.name || q.topic;
    document.getElementById('quizProgressFill').style.width =
        ((idx + 1) / state.quiz.questions.length * 100) + '%';

    const optionsHtml = q.options.map((opt, i) => {
        const letters = ['A', 'B', 'C', 'D'];
        const selected = state.quiz.answers[q.id] === i;
        let cls = 'option-btn';
        if (selected) cls += ' selected';

        // Show feedback if answered and instant feedback on
        if (state.quiz.instantFeedback && state.quiz.answers[q.id] !== undefined) {
            cls += ' disabled';
            if (i === q.answer) cls += ' correct';
            else if (selected && i !== q.answer) cls += ' wrong';
        }

        if (state.quiz.submitted) {
            cls += ' disabled';
            if (i === q.answer) cls += ' correct';
            else if (selected && i !== q.answer) cls += ' wrong';
        }

        return `<button class="${cls}" onclick="selectAnswer(${q.id}, ${i})">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>`;
    }).join('');

    document.getElementById('optionsList').innerHTML = optionsHtml;

    // Feedback box
    const fb = document.getElementById('feedbackBox');
    if ((state.quiz.instantFeedback || state.quiz.submitted) && state.quiz.answers[q.id] !== undefined) {
        const isCorrect = state.quiz.answers[q.id] === q.answer;
        fb.style.display = 'block';
        fb.className = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');
        fb.innerHTML = isCorrect
            ? `<strong>✅ Correct!</strong> ${q.explanation}`
            : `<strong>❌ Incorrect.</strong> The correct answer is <strong>${q.options[q.answer]}</strong>. ${q.explanation}`;
    } else {
        fb.style.display = 'none';
    }

    // Navigation buttons
    document.getElementById('prevBtn').style.display = idx > 0 ? 'inline-flex' : 'none';
    const isLast = idx === state.quiz.questions.length - 1;
    document.getElementById('nextBtn').style.display = isLast ? 'none' : 'inline-flex';
    document.getElementById('submitBtn').style.display = isLast && !state.quiz.submitted ? 'inline-flex' : 'none';

    updateNavigator();
}

function selectAnswer(questionId, optionIndex) {
    if (state.quiz.submitted) return;
    const q = state.quiz.questions.find(q => q.id === questionId);
    if (state.quiz.instantFeedback && state.quiz.answers[questionId] !== undefined) return;

    state.quiz.answers[questionId] = optionIndex;
    renderQuestion();
}

function nextQuestion() {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (state.quiz.currentIndex > 0) {
        state.quiz.currentIndex--;
        renderQuestion();
    }
}

function goToQuestion(idx) {
    state.quiz.currentIndex = idx;
    renderQuestion();
}

function renderNavigator() {
    const nav = document.getElementById('qNavigator');
    nav.innerHTML = state.quiz.questions.map((q, i) => {
        return `<div class="q-nav-dot" onclick="goToQuestion(${i})">${i + 1}</div>`;
    }).join('');
}

function updateNavigator() {
    const dots = document.querySelectorAll('.q-nav-dot');
    dots.forEach((dot, i) => {
        dot.className = 'q-nav-dot';
        if (i === state.quiz.currentIndex) dot.classList.add('current');
        else if (state.quiz.answers[state.quiz.questions[i].id] !== undefined) {
            if (state.quiz.submitted) {
                const q = state.quiz.questions[i];
                dot.classList.add(state.quiz.answers[q.id] === q.answer ? 'correct-dot' : 'wrong-dot');
            } else {
                dot.classList.add('answered');
            }
        }
    });
}

// ===== TIMER =====
function startTimer() {
    let remaining = state.quiz.timeLimit;
    updateTimerDisplay(remaining);

    state.quiz.timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining);

        const timerEl = document.getElementById('quizTimer');
        if (remaining <= 60) timerEl.className = 'quiz-timer danger';
        else if (remaining <= 300) timerEl.className = 'quiz-timer warning';

        if (remaining <= 0) {
            clearInterval(state.quiz.timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    document.getElementById('timerDisplay').textContent =
        `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// ===== SUBMIT QUIZ =====
function submitQuiz() {
    if (state.quiz.submitted) return;

    const unanswered = state.quiz.questions.length - Object.keys(state.quiz.answers).length;
    if (unanswered > 0 && !state.quiz.submitted) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
    }

    state.quiz.submitted = true;
    clearInterval(state.quiz.timerInterval);

    const timeTaken = Math.floor((Date.now() - state.quiz.startTime) / 1000);
    let correct = 0, wrong = 0, skipped = 0;
    const topicResults = {};

    state.quiz.questions.forEach(q => {
        const answer = state.quiz.answers[q.id];
        if (!topicResults[q.topic]) topicResults[q.topic] = { correct: 0, wrong: 0, total: 0 };
        topicResults[q.topic].total++;

        if (answer === undefined) {
            skipped++;
        } else if (answer === q.answer) {
            correct++;
            topicResults[q.topic].correct++;
        } else {
            wrong++;
            topicResults[q.topic].wrong++;
        }
    });

    const total = state.quiz.questions.length;
    const percent = Math.round((correct / total) * 100);

    // Update progress
    state.progress.totalAttempted += (correct + wrong);
    state.progress.totalCorrect += correct;
    state.progress.totalTime += timeTaken;
    state.progress.testsCompleted++;

    for (const [topic, results] of Object.entries(topicResults)) {
        if (!state.progress.topicStats[topic]) {
            state.progress.topicStats[topic] = { attempted: 0, correct: 0 };
        }
        state.progress.topicStats[topic].attempted += (results.correct + results.wrong);
        state.progress.topicStats[topic].correct += results.correct;
    }

    state.progress.testHistory.push({
        date: new Date().toLocaleDateString(),
        score: percent,
        correct, wrong, skipped,
        total,
        time: formatTime(timeTaken),
        topics: Object.keys(topicResults).map(t => TOPIC_META[t]?.icon || '').join(' ')
    });

    state.progress.activities.push({
        icon: percent >= 70 ? '🎉' : '📝',
        text: `Scored ${percent}% (${correct}/${total}) in quiz`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Keep last 50 activities
    if (state.progress.activities.length > 50) {
        state.progress.activities = state.progress.activities.slice(-50);
    }

    saveProgress();
    updateStreak();
    showResults(percent, correct, wrong, skipped, timeTaken, topicResults);
}

function showResults(percent, correct, wrong, skipped, timeTaken, topicResults) {
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    document.getElementById('scorePercent').textContent = percent + '%';
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    document.getElementById('skippedCount').textContent = skipped;
    document.getElementById('timeTaken').textContent = formatTime(timeTaken);

    // Animate score arc
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percent / 100) * circumference;
    const arc = document.getElementById('scoreArc');
    arc.style.strokeDashoffset = circumference;
    const color = percent >= 70 ? '#10b981' : percent >= 40 ? '#f59e0b' : '#ef4444';
    arc.setAttribute('stroke', color);
    setTimeout(() => { arc.style.strokeDashoffset = offset; arc.style.transition = 'stroke-dashoffset 1s ease'; }, 100);

    // Topic breakdown
    let breakdownHtml = '<h3>📊 Topic-wise Breakdown</h3><div class="topic-bars" style="margin-top:1rem;">';
    for (const [topic, data] of Object.entries(topicResults)) {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const meta = TOPIC_META[topic] || { name: topic, icon: '', color: '#666' };
        breakdownHtml += `
            <div class="topic-bar">
                <span class="topic-bar-label">${meta.icon} ${meta.name}</span>
                <div class="topic-bar-track">
                    <div class="topic-bar-fill" style="width:${pct}%; background:${meta.color};"></div>
                </div>
                <span class="topic-bar-value">${data.correct}/${data.total}</span>
            </div>`;
    }
    breakdownHtml += '</div>';
    document.getElementById('topicBreakdown').innerHTML = breakdownHtml;
}

function reviewQuiz() {
    const section = document.getElementById('reviewSection');
    section.style.display = 'block';

    let html = '<h3>📝 Answer Review</h3>';
    state.quiz.questions.forEach((q, i) => {
        const answer = state.quiz.answers[q.id];
        const isCorrect = answer === q.answer;
        const isSkipped = answer === undefined;
        const cls = isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'wrong');
        const letters = ['A', 'B', 'C', 'D'];

        html += `
            <div class="review-item ${cls}">
                <div class="review-meta">${TOPIC_META[q.topic]?.icon} ${TOPIC_META[q.topic]?.name} • Q${i + 1}</div>
                <h4>${q.question}</h4>
                <div style="margin: 0.5rem 0;">
                    ${q.options.map((opt, j) => {
                        let style = '';
                        let marker = '';
                        if (j === q.answer) { style = 'color: #065f46; font-weight: 700;'; marker = ' ✅'; }
                        if (j === answer && j !== q.answer) { style = 'color: #991b1b; text-decoration: line-through;'; marker = ' ❌'; }
                        return `<div style="${style}">${letters[j]}. ${opt}${marker}</div>`;
                    }).join('')}
                </div>
                <div class="review-explanation">💡 ${q.explanation}</div>
            </div>`;
    });

    section.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
}

function retakeQuiz() {
    state.quiz.currentIndex = 0;
    state.quiz.answers = {};
    state.quiz.startTime = Date.now();
    state.quiz.submitted = false;

    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('reviewSection').style.display = 'none';

    renderQuestion();
    renderNavigator();
    if (state.quiz.timeLimit > 0) startTimer();
}

function showQuizSetup() {
    clearInterval(state.quiz.timerInterval);
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('reviewSection').style.display = 'none';
}

// ===== STUDY MATERIALS =====
function initStudyTabs() {
    document.querySelectorAll('.study-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.study-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.study-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
        });
    });
}

function openStudyTopic(topicKey) {
    const topic = STUDY_MATERIALS[topicKey];
    if (!topic) return;

    document.getElementById('studyModalTitle').textContent = topic.title;

    let html = '';
    topic.sections.forEach(section => {
        html += `
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                    ${section.heading}
                </h3>
                ${section.content}
            </div>`;
    });

    document.getElementById('studyModalBody').innerHTML = html;
    document.getElementById('studyModal').style.display = 'flex';

    // Track activity
    state.progress.activities.push({
        icon: '📖',
        text: `Studied: ${topic.title}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    saveProgress();
}

function closeStudyModal() {
    document.getElementById('studyModal').style.display = 'none';
}

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.id === 'studyModal') closeStudyModal();
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStudyModal();
});

function renderDSATab() {
    const container = document.getElementById('tab-dsa');
    const patterns = [
        { name: "Two Sum", desc: "HashMap approach — O(n)", diff: "Easy", pattern: "Hash Map" },
        { name: "Kadane's Algorithm", desc: "Maximum subarray sum — O(n)", diff: "Medium", pattern: "Dynamic Programming" },
        { name: "Binary Search", desc: "Search in sorted array — O(log n)", diff: "Easy", pattern: "Divide & Conquer" },
        { name: "Reverse Linked List", desc: "Iterative 3-pointer approach — O(n)", diff: "Easy", pattern: "Linked List" },
        { name: "Valid Anagram", desc: "Character frequency matching — O(n)", diff: "Easy", pattern: "Hash Map" },
        { name: "Merge Intervals", desc: "Sort + merge overlapping — O(n log n)", diff: "Medium", pattern: "Sorting" },
        { name: "Find Missing Number", desc: "XOR or math sum approach — O(n)", diff: "Easy", pattern: "Bit Manipulation" },
        { name: "Detect Cycle (Floyd's)", desc: "Slow/fast pointer — O(n), O(1) space", diff: "Medium", pattern: "Two Pointers" },
        { name: "Merge Sort", desc: "Divide & conquer sorting — O(n log n)", diff: "Medium", pattern: "Divide & Conquer" },
        { name: "BFS / Level Order", desc: "Queue-based traversal — O(V+E)", diff: "Medium", pattern: "Graph/Tree" },
        { name: "DFS / Backtracking", desc: "Stack/recursion traversal — O(V+E)", diff: "Medium", pattern: "Graph/Tree" },
        { name: "Dijkstra's Algorithm", desc: "Shortest path — O(V² or V log V)", diff: "Hard", pattern: "Graph" },
        { name: "Coin Change (DP)", desc: "Min coins to make amount — O(amount × coins)", diff: "Medium", pattern: "Dynamic Programming" },
        { name: "LCS (DP)", desc: "Longest Common Subsequence — O(m×n)", diff: "Medium", pattern: "Dynamic Programming" },
        { name: "Subset Sum", desc: "Check if subset sums to target — O(n×sum)", diff: "Medium", pattern: "Dynamic Programming" },
        { name: "Sliding Window Max", desc: "Max in each window of size k — O(n) with deque", diff: "Medium", pattern: "Sliding Window" },
        { name: "Valid Parentheses", desc: "Stack-based bracket matching — O(n)", diff: "Easy", pattern: "Stack" },
        { name: "Palindrome Check", desc: "Two pointer from both ends — O(n)", diff: "Easy", pattern: "Two Pointers" },
        { name: "Remove Duplicates", desc: "Sorted array in-place — O(n) two pointer", diff: "Easy", pattern: "Two Pointers" },
        { name: "Topological Sort", desc: "DAG ordering — O(V+E) with DFS/BFS", diff: "Medium", pattern: "Graph" },
        { name: "0/1 Knapsack", desc: "Max value within weight limit — O(n×W)", diff: "Medium", pattern: "Dynamic Programming" },
        { name: "Longest Palindrome Substr", desc: "Expand around center — O(n²)", diff: "Medium", pattern: "String" },
        { name: "Inorder/Preorder Traversal", desc: "Tree traversal — O(n)", diff: "Easy", pattern: "Tree" },
        { name: "BST Operations", desc: "Insert/Search/Delete — O(h) avg O(log n)", diff: "Medium", pattern: "Tree" },
        { name: "Heap / Priority Queue", desc: "Extract min/max — O(log n)", diff: "Medium", pattern: "Heap" }
    ];

    let html = '<div class="study-grid">';
    patterns.forEach(p => {
        const diffColor = p.diff === 'Easy' ? '#d1fae5' : p.diff === 'Medium' ? '#fef3c7' : '#fee2e2';
        html += `
            <div class="study-card" style="cursor:default;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                    <h4>${p.name}</h4>
                    <span class="diff-badge" style="background:${diffColor};padding:0.2rem 0.5rem;border-radius:4px;font-size:0.7rem;font-weight:700;">${p.diff}</span>
                </div>
                <p>${p.desc}</p>
                <div class="study-meta"><span>${p.pattern}</span></div>
            </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderCodingTab() {
    const container = document.getElementById('tab-coding');
    const problems = [
        "Check Even/Odd", "Prime Number Check", "Fibonacci Series", "Factorial", "Reverse a Number",
        "Palindrome Check", "Armstrong Number", "Sum of Digits", "GCD/HCF", "LCM",
        "Bubble Sort", "Selection Sort", "Insertion Sort", "Linear Search", "Binary Search",
        "String Reverse", "Count Vowels", "Remove Duplicates from String", "Anagram Check",
        "Two Sum Problem", "Array Rotation", "Max/Min in Array", "Matrix Addition",
        "Matrix Transpose", "Pattern Printing (Triangle)", "Star Pattern (Pyramid)",
        "Number Pattern (Floyd's)", "Merge Two Sorted Arrays", "Find Second Largest",
        "Count Words in String", "Check Substring", "Swap Without Temp Variable",
        "Power of a Number", "Sum of Array Elements", "Find Duplicate in Array",
        "Remove Element from Array", "String to Integer (atoi)", "Caesar Cipher",
        "Check Perfect Number", "Find Missing Number (1 to N)", "Decimal to Binary",
        "Binary to Decimal", "Tower of Hanoi", "Queue using Stacks",
        "Stack using Queues", "Linked List Insertion", "Linked List Deletion",
        "Reverse a Linked List", "Middle of Linked List", "Check Balanced Parentheses"
    ];

    let html = `<div class="card" style="margin-bottom:1rem;">
        <h3>💻 Top 50 Coding Problems for TCS NQT</h3>
        <p style="color:var(--text-secondary);margin-bottom:1rem;">Practice these in Java, Python, or C. Focus on logic, not syntax. TCS NQT coding section has 1-2 problems (Easy to Medium).</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:0.5rem;">`;

    problems.forEach((p, i) => {
        html += `<div style="background:var(--bg);padding:0.6rem 0.75rem;border-radius:6px;font-size:0.88rem;">
            <strong style="color:var(--primary);">${i + 1}.</strong> ${p}
        </div>`;
    });

    html += '</div></div>';
    container.innerHTML = html;
}

function renderPapersTab() {
    const container = document.getElementById('tab-papers');
    const papers = [
        { name: "2024 Morning Slot (Solved)", sections: "50 Numerical + 45 Verbal + 25 Reasoning + 20 Logic + 5 Coding", qs: 145 },
        { name: "Practice Paper 1", sections: "18 Numerical + 10 Verbal + 7 Reasoning + 2 Coding + 7 Adv Quant + 8 Adv Logic", qs: 52 },
        { name: "Practice Paper 2", sections: "Mixed sections with solutions", qs: 50 },
        { name: "Practice Paper 3", sections: "Mixed sections with solutions", qs: 50 },
        { name: "Practice Paper 4", sections: "Mixed sections with solutions", qs: 50 },
        { name: "Practice Paper 5", sections: "Mixed sections with solutions", qs: 50 },
        { name: "Practice Paper 6", sections: "Quantitative + Reasoning + Verbal", qs: 50 },
        { name: "Practice Paper 7", sections: "Programming + DBMS + OS + Networks", qs: 50 },
        { name: "Practice Paper 8", sections: "Full-length mock with all sections", qs: 50 },
        { name: "Practice Paper 9", sections: "Advanced difficulty mixed paper", qs: 50 },
        { name: "Practice Paper 10", sections: "Final revision comprehensive paper", qs: 50 }
    ];

    let html = '<div class="study-grid">';
    papers.forEach((p, i) => {
        html += `
            <div class="study-card" style="cursor:default;">
                <div class="study-icon" style="background:#4361ee;">📋</div>
                <h4>${p.name}</h4>
                <p>${p.sections}</p>
                <div class="study-meta"><span>${p.qs} questions</span><span>With solutions</span></div>
            </div>`;
    });
    html += '</div>';
    html += `<p style="text-align:center;margin-top:1rem;color:var(--text-secondary);">
        📁 Full papers available in your workspace: <strong>materials/previous-papers/</strong> and <strong>materials/solved-paper-2024-morning.md</strong>
    </p>`;
    container.innerHTML = html;
}

// ===== INTERVIEW PREP =====
function initInterviewTabs() {
    document.querySelectorAll('.int-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.int-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderInterviewContent(tab.dataset.round);
        });
    });
}

function renderInterviewContent(round) {
    const data = INTERVIEW_DATA[round];
    if (!data) return;

    const container = document.getElementById('interviewContent');
    container.innerHTML = data.map((item, i) => `
        <div class="interview-item">
            <div class="interview-question" onclick="toggleIntAnswer(this)">
                <span>Q${i + 1}. ${item.q}</span>
                <span class="diff-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
            </div>
            <div class="interview-answer">
                <p>${item.a}</p>
                ${item.tip ? `<div class="interview-tip">💡 Tip: ${item.tip}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function toggleIntAnswer(el) {
    const answer = el.nextElementSibling;
    answer.classList.toggle('open');
}

// ===== FLASHCARDS =====
function loadFlashcards() {
    const topic = document.getElementById('fcTopicSelect').value;
    state.flashcard.cards = topic === 'all'
        ? [...FLASHCARD_DATA]
        : FLASHCARD_DATA.filter(fc => fc.topic === topic);

    state.flashcard.cards = shuffleArray(state.flashcard.cards);
    state.flashcard.currentIndex = 0;
    state.flashcard.flipped = false;
    renderFlashcard();
}

function renderFlashcard() {
    const cards = state.flashcard.cards;
    if (cards.length === 0) {
        document.getElementById('flashcardFront').innerHTML = '<h3>No cards available</h3>';
        document.getElementById('fcCounter').textContent = '0 / 0';
        return;
    }

    const card = cards[state.flashcard.currentIndex];
    document.getElementById('flashcardFront').innerHTML = `
        <span class="fc-hint">Click to flip</span>
        <h3>${card.front}</h3>`;
    document.getElementById('flashcardBack').innerHTML = `<p>${card.back}</p>`;
    document.getElementById('fcCounter').textContent =
        `${state.flashcard.currentIndex + 1} / ${cards.length}`;

    // Reset flip
    document.getElementById('flashcardInner').classList.remove('flipped');
    state.flashcard.flipped = false;
}

function flipFlashcard() {
    state.flashcard.flipped = !state.flashcard.flipped;
    document.getElementById('flashcardInner').classList.toggle('flipped');
}

function nextFlashcard() {
    if (state.flashcard.currentIndex < state.flashcard.cards.length - 1) {
        state.flashcard.currentIndex++;
    } else {
        state.flashcard.currentIndex = 0;
    }
    renderFlashcard();
}

function prevFlashcard() {
    if (state.flashcard.currentIndex > 0) {
        state.flashcard.currentIndex--;
    } else {
        state.flashcard.currentIndex = state.flashcard.cards.length - 1;
    }
    renderFlashcard();
}

function markFlashcard(difficulty) {
    const card = state.flashcard.cards[state.flashcard.currentIndex];
    state.progress.flashcardProgress[card.front] = difficulty;
    saveProgress();
    nextFlashcard();
}

// ===== RESOURCES =====
function initResourceTabs() {
    document.querySelectorAll('.res-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.res-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.res-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('restab-' + tab.dataset.restab).classList.add('active');
        });
    });
}

function renderVideoGrid() {
    const videos = [
        { title: "Quantitative Aptitude — All Concepts", desc: "Percentages, Ratio, SI/CI, Work, Speed", color: "#667eea", url: "https://www.youtube.com/results?search_query=TCS+NQT+quantitative+aptitude+preparation" },
        { title: "Number System & Divisibility", desc: "HCF, LCM, Remainders, Factors", color: "#5f27cd", url: "https://www.youtube.com/results?search_query=number+system+aptitude+tricks+placement" },
        { title: "Permutation & Combination", desc: "P&C, Probability, Counting Principles", color: "#341f97", url: "https://www.youtube.com/results?search_query=permutation+combination+aptitude+tricks" },
        { title: "Geometry & Mensuration", desc: "Area, Volume, Surface Area formulas", color: "#01a3a4", url: "https://www.youtube.com/results?search_query=geometry+mensuration+aptitude+for+placements" },
        { title: "Logical Reasoning — Complete Guide", desc: "Series, Coding-Decoding, Blood Relations", color: "#f5576c", url: "https://www.youtube.com/results?search_query=TCS+NQT+logical+reasoning" },
        { title: "Seating Arrangement & Puzzles", desc: "Linear, Circular, Floor-based puzzles", color: "#e17055", url: "https://www.youtube.com/results?search_query=seating+arrangement+reasoning+tricks" },
        { title: "Syllogisms & Venn Diagrams", desc: "All/Some/No statements, diagram approach", color: "#d63031", url: "https://www.youtube.com/results?search_query=syllogism+reasoning+tricks+placement" },
        { title: "Verbal Ability — Grammar & Vocabulary", desc: "Grammar rules, Synonyms, Antonyms, RC", color: "#43e97b", url: "https://www.youtube.com/results?search_query=TCS+NQT+verbal+ability" },
        { title: "Reading Comprehension Tips", desc: "RC passage strategies and practice", color: "#00b894", url: "https://www.youtube.com/results?search_query=reading+comprehension+tips+for+placements" },
        { title: "Programming Logic — Pseudocode & Output", desc: "Code tracing, OOP, Time complexity", color: "#4facfe", url: "https://www.youtube.com/results?search_query=TCS+NQT+programming+logic+pseudocode" },
        { title: "C Programming — Complete Revision", desc: "Pointers, Arrays, Strings, Structures", color: "#0984e3", url: "https://www.youtube.com/results?search_query=C+programming+placement+preparation" },
        { title: "Java for Placements", desc: "OOP, Collections, Exception Handling", color: "#6c5ce7", url: "https://www.youtube.com/results?search_query=Java+placement+preparation+complete" },
        { title: "Python for Beginners to Advanced", desc: "Lists, Dict, Strings, File I/O", color: "#fdcb6e", url: "https://www.youtube.com/results?search_query=Python+programming+for+placements" },
        { title: "Coding Questions — Easy to Medium", desc: "Arrays, Strings, Patterns in C/Java/Python", color: "#fa709a", url: "https://www.youtube.com/results?search_query=TCS+NQT+coding+questions+solved" },
        { title: "DBMS & SQL — Key Concepts", desc: "SQL queries, Normalization, Joins, ACID", color: "#a18cd1", url: "https://www.youtube.com/results?search_query=TCS+NQT+DBMS+SQL+preparation" },
        { title: "SQL Queries Practice — Top 50", desc: "Subqueries, Joins, Group By, Window Functions", color: "#8854d0", url: "https://www.youtube.com/results?search_query=SQL+queries+interview+top+50+practice" },
        { title: "Computer Networks — OSI & TCP/IP", desc: "Protocols, HTTP, DNS, Subnetting", color: "#fbc2eb", url: "https://www.youtube.com/results?search_query=computer+networks+for+placements" },
        { title: "Operating Systems — Process & Memory", desc: "Scheduling, Deadlocks, Virtual Memory, Paging", color: "#f093fb", url: "https://www.youtube.com/results?search_query=operating+systems+for+placements" },
        { title: "Data Structures — Array, Stack, Queue", desc: "Linked List, Trees, Sorting, Searching", color: "#ff6b6b", url: "https://www.youtube.com/results?search_query=data+structures+for+TCS+NQT" },
        { title: "Sorting & Searching Algorithms", desc: "Bubble, Selection, Merge, Quick, Binary Search", color: "#ee5a24", url: "https://www.youtube.com/results?search_query=sorting+algorithms+visualized+explained" },
        { title: "TCS NQT 2024 Paper — Full Solution", desc: "Complete walkthrough of 2024 paper", color: "#1dd1a1", url: "https://www.youtube.com/results?search_query=TCS+NQT+2024+solved+paper" },
        { title: "TCS NQT 2025 Expected Pattern", desc: "Latest pattern, section analysis, weightage", color: "#10ac84", url: "https://www.youtube.com/results?search_query=TCS+NQT+2025+exam+pattern+preparation" },
        { title: "Mock Test Strategy & Time Management", desc: "How to approach the exam and manage time", color: "#ffa502", url: "https://www.youtube.com/results?search_query=TCS+NQT+mock+test+strategy" },
        { title: "TCS Interview — Complete Guide", desc: "Technical, MR, HR round preparation", color: "#2ed573", url: "https://www.youtube.com/results?search_query=TCS+interview+preparation+freshers" }
    ];

    const grid = document.getElementById('videoGrid');
    if (!grid) return;
    grid.innerHTML = videos.map(v => `
        <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="card glass-card video-card" style="text-decoration:none;color:inherit;">
            <div class="video-thumb" style="background:linear-gradient(135deg, ${v.color}, ${v.color}dd);">
                <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <div class="video-info">
                <h4>${v.title}</h4>
                <p>${v.desc}</p>
            </div>
        </a>
    `).join('');
}

function renderLinksGrid() {
    const links = [
        { name: "TCS iON NQT Portal", desc: "Official registration and test portal", url: "https://learning.tcsionhub.in/hub/national-qualifier-test/", icon: "fas fa-globe", color: "#1a73e8" },
        { name: "TCS NextStep Portal", desc: "Application portal for TCS fresher hiring", url: "https://nextstep.tcs.com/campus/", icon: "fas fa-user-plus", color: "#0f9d58" },
        { name: "GeeksforGeeks — TCS NQT", desc: "TCS NQT preparation articles and quizzes", url: "https://www.geeksforgeeks.org/tcs-placement-paper-aptitude-questions/", icon: "fas fa-code", color: "#00aa00" },
        { name: "PrepInsta — TCS NQT", desc: "Previous papers, mock tests, and tips", url: "https://prepinsta.com/tcs-nqt/", icon: "fas fa-brain", color: "#ff4444" },
        { name: "IndiaBix — Aptitude", desc: "1000s of aptitude practice questions with solutions", url: "https://www.indiabix.com/", icon: "fas fa-calculator", color: "#ff6600" },
        { name: "HackerRank", desc: "Practice coding in C, Java, Python with auto-tests", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript", icon: "fab fa-hackerrank", color: "#2ec866" },
        { name: "LeetCode — Easy Problems", desc: "Practice coding problems sorted by difficulty", url: "https://leetcode.com/problemset/all/?difficulty=EASY", icon: "fas fa-laptop-code", color: "#ffa116" },
        { name: "W3Schools SQL Tutorial", desc: "Interactive SQL tutorial with live editor", url: "https://www.w3schools.com/sql/", icon: "fas fa-database", color: "#04aa6d" },
        { name: "Javatpoint — OS Concepts", desc: "Complete OS notes for placement prep", url: "https://www.javatpoint.com/os-tutorial", icon: "fas fa-server", color: "#e91e63" },
        { name: "Programiz — Python", desc: "Learn Python programming with examples", url: "https://www.programiz.com/python-programming", icon: "fab fa-python", color: "#3572a5" },
        { name: "InterviewBit", desc: "Coding interview preparation platform", url: "https://www.interviewbit.com/", icon: "fas fa-briefcase", color: "#3c6382" },
        { name: "Magoosh Vocabulary", desc: "Build vocabulary for verbal ability section", url: "https://gre.magoosh.com/flashcards/vocabulary", icon: "fas fa-book-reader", color: "#7c3aed" },
        { name: "Tutorialspoint — C Language", desc: "Complete C programming tutorials and examples", url: "https://www.tutorialspoint.com/cprogramming/", icon: "fas fa-terminal", color: "#5f27cd" },
        { name: "Tutorialspoint — Java", desc: "Java OOP, Collections, Threads explained", url: "https://www.tutorialspoint.com/java/", icon: "fab fa-java", color: "#b33939" },
        { name: "Visualgo — Algorithm Visualization", desc: "See sorting, trees, graphs animated step by step", url: "https://visualgo.net/en", icon: "fas fa-eye", color: "#e17055" },
        { name: "SQLZoo — Interactive SQL", desc: "Practice SQL with progressive tutorials", url: "https://sqlzoo.net/", icon: "fas fa-table", color: "#00b894" },
        { name: "CodeChef — Practice", desc: "Competitive coding problems for skill building", url: "https://www.codechef.com/practice", icon: "fas fa-utensils", color: "#5c4033" },
        { name: "Codeforces — Div 3 Contests", desc: "Easy competitive programming problems", url: "https://codeforces.com/problemset?order=BY_SOLVED_DESC", icon: "fas fa-trophy", color: "#1890ff" },
        { name: "Studytonight — DBMS", desc: "Comprehensive DBMS notes with diagrams", url: "https://www.studytonight.com/dbms/", icon: "fas fa-database", color: "#6c5ce7" },
        { name: "Studytonight — Networks", desc: "Computer Networks tutorials with examples", url: "https://www.studytonight.com/computer-networks/", icon: "fas fa-network-wired", color: "#0984e3" }
    ];

    const grid = document.getElementById('linksGrid');
    if (!grid) return;
    grid.innerHTML = links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="card glass-card link-card">
            <div class="link-icon" style="background:${l.color};"><i class="${l.icon}"></i></div>
            <div class="link-info">
                <h4>${l.name}</h4>
                <p>${l.desc}</p>
                <span class="link-url">${new URL(l.url).hostname}</span>
            </div>
        </a>
    `).join('');
}

function renderTopicResourceGrid() {
    const topics = [
        {
            title: "🔢 Quantitative Aptitude",
            resources: [
                { name: "IndiaBix — Percentage Problems", url: "https://www.indiabix.com/aptitude/percentage/" },
                { name: "IndiaBix — Profit & Loss", url: "https://www.indiabix.com/aptitude/profit-and-loss/" },
                { name: "IndiaBix — Time & Work", url: "https://www.indiabix.com/aptitude/time-and-work/" },
                { name: "IndiaBix — Time & Distance", url: "https://www.indiabix.com/aptitude/time-and-distance/" },
                { name: "IndiaBix — Simple & Compound Interest", url: "https://www.indiabix.com/aptitude/simple-interest/" },
                { name: "IndiaBix — Ratio & Proportion", url: "https://www.indiabix.com/aptitude/ratio-and-proportion/" },
                { name: "IndiaBix — Averages", url: "https://www.indiabix.com/aptitude/average/" },
                { name: "IndiaBix — Permutation & Combination", url: "https://www.indiabix.com/aptitude/permutation-and-combination/" },
                { name: "IndiaBix — Probability", url: "https://www.indiabix.com/aptitude/probability/" },
                { name: "IndiaBix — Problems on Ages", url: "https://www.indiabix.com/aptitude/problems-on-ages/" }
            ]
        },
        {
            title: "🧩 Logical Reasoning",
            resources: [
                { name: "IndiaBix — Number Series", url: "https://www.indiabix.com/aptitude/number-series/" },
                { name: "IndiaBix — Coding-Decoding", url: "https://www.indiabix.com/logical-reasoning/coding-decoding/" },
                { name: "IndiaBix — Blood Relations", url: "https://www.indiabix.com/logical-reasoning/blood-relation-test/" },
                { name: "IndiaBix — Seating Arrangement", url: "https://www.indiabix.com/logical-reasoning/seating-arrangement/" },
                { name: "IndiaBix — Syllogisms", url: "https://www.indiabix.com/logical-reasoning/logic/" },
                { name: "IndiaBix — Direction Sense", url: "https://www.indiabix.com/logical-reasoning/direction-sense-test/" },
                { name: "IndiaBix — Clocks & Calendars", url: "https://www.indiabix.com/aptitude/calendar/" },
                { name: "IndiaBix — Analogy", url: "https://www.indiabix.com/verbal-reasoning/analogy/" }
            ]
        },
        {
            title: "📝 Verbal Ability",
            resources: [
                { name: "IndiaBix — Synonyms", url: "https://www.indiabix.com/verbal-ability/synonyms/" },
                { name: "IndiaBix — Antonyms", url: "https://www.indiabix.com/verbal-ability/antonyms/" },
                { name: "IndiaBix — Sentence Correction", url: "https://www.indiabix.com/verbal-ability/sentence-correction/" },
                { name: "IndiaBix — Reading Comprehension", url: "https://www.indiabix.com/verbal-ability/comprehension/" },
                { name: "IndiaBix — Ordering of Sentences", url: "https://www.indiabix.com/verbal-ability/ordering-of-sentences/" },
                { name: "IndiaBix — One Word Substitution", url: "https://www.indiabix.com/verbal-ability/one-word-substitutes/" },
                { name: "IndiaBix — Idioms & Phrases", url: "https://www.indiabix.com/verbal-ability/idioms-and-phrases/" },
                { name: "GFG — English Grammar Practice", url: "https://www.geeksforgeeks.org/verbal-ability/" }
            ]
        },
        {
            title: "💻 Programming & Pseudocode",
            resources: [
                { name: "GFG — Pseudocode Practice", url: "https://www.geeksforgeeks.org/pseudocode/" },
                { name: "GFG — Output Questions C", url: "https://www.geeksforgeeks.org/c-programming-language/" },
                { name: "GFG — Output Questions Java", url: "https://www.geeksforgeeks.org/java/" },
                { name: "GFG — Output Questions Python", url: "https://www.geeksforgeeks.org/python-programming-language/" },
                { name: "HackerRank — C Practice", url: "https://www.hackerrank.com/domains/c" },
                { name: "HackerRank — Java Practice", url: "https://www.hackerrank.com/domains/java" },
                { name: "HackerRank — Python Practice", url: "https://www.hackerrank.com/domains/python" }
            ]
        },
        {
            title: "🗃️ DBMS & SQL",
            resources: [
                { name: "GFG — DBMS Interview Questions", url: "https://www.geeksforgeeks.org/dbms-interview-questions/" },
                { name: "GFG — SQL Tutorial", url: "https://www.geeksforgeeks.org/sql-tutorial/" },
                { name: "W3Schools — SQL Practice", url: "https://www.w3schools.com/sql/sql_exercises.asp" },
                { name: "SQLZoo — Interactive Queries", url: "https://sqlzoo.net/" },
                { name: "GFG — Normalization", url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/" },
                { name: "HackerRank — SQL Practice", url: "https://www.hackerrank.com/domains/sql" }
            ]
        },
        {
            title: "⚙️ Operating Systems",
            resources: [
                { name: "GFG — Operating Systems", url: "https://www.geeksforgeeks.org/operating-systems/" },
                { name: "GFG — CPU Scheduling", url: "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/" },
                { name: "GFG — Deadlocks", url: "https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/" },
                { name: "GFG — Page Replacement", url: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/" },
                { name: "Studytonight — OS Notes", url: "https://www.studytonight.com/operating-system/" }
            ]
        },
        {
            title: "🌐 Computer Networks",
            resources: [
                { name: "GFG — Computer Networks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
                { name: "GFG — OSI Model", url: "https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/" },
                { name: "GFG — TCP vs UDP", url: "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/" },
                { name: "GFG — Subnetting", url: "https://www.geeksforgeeks.org/introduction-of-subnetting/" },
                { name: "Studytonight — Networking", url: "https://www.studytonight.com/computer-networks/" }
            ]
        },
        {
            title: "🧮 Data Structures & Algorithms",
            resources: [
                { name: "GFG — Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
                { name: "GFG — Sorting Algorithms", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
                { name: "GFG — Searching Algorithms", url: "https://www.geeksforgeeks.org/searching-algorithms/" },
                { name: "Visualgo — Visual Algorithms", url: "https://visualgo.net/en" },
                { name: "GFG — Trees", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
                { name: "GFG — Graph Algorithms", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" }
            ]
        }
    ];

    const grid = document.getElementById('topicResourceGrid');
    if (!grid) return;
    grid.innerHTML = topics.map(t => `
        <div class="card glass-card resource-topic-card">
            <h4>${t.title}</h4>
            <ul>${t.resources.map(r => `
                <li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name}</a></li>
            `).join('')}</ul>
        </div>
    `).join('');
}

function renderFormulaGrid() {
    const formulas = [
        // Speed, Time & Distance
        { label: "Speed", formula: "Distance ÷ Time" },
        { label: "km/h → m/s", formula: "× 5/18" },
        { label: "Avg Speed (same dist)", formula: "2ab / (a+b)" },
        { label: "Relative Speed (opp)", formula: "S₁ + S₂" },
        { label: "Relative Speed (same)", formula: "|S₁ − S₂|" },
        { label: "Boats Upstream", formula: "Boat − Stream" },
        { label: "Boats Downstream", formula: "Boat + Stream" },
        { label: "Train cross pole", formula: "Length / Speed" },
        { label: "Trains (same dir)", formula: "(L₁+L₂) / (S₁−S₂)" },
        { label: "Trains (opp dir)", formula: "(L₁+L₂) / (S₁+S₂)" },
        // Interest & Profit
        { label: "SI", formula: "(P × R × T) / 100" },
        { label: "CI Amount", formula: "P(1+R/100)^T" },
        { label: "CI − SI (2 yrs)", formula: "P(R/100)²" },
        { label: "Profit%", formula: "(Profit/CP) × 100" },
        { label: "SP from CP", formula: "CP × (100 + P%) / 100" },
        { label: "Discount", formula: "MP × (100−D%) / 100" },
        { label: "Successive %", formula: "a + b + ab/100" },
        // Work & Pipes
        { label: "Work Rate", formula: "1 / Days" },
        { label: "A+B together", formula: "ab / (a+b) days" },
        { label: "Pipe fill+leak", formula: "1/A − 1/B" },
        // Algebra & Numbers
        { label: "Average", formula: "Sum / Count" },
        { label: "Weighted Avg", formula: "Σ(wᵢxᵢ) / Σwᵢ" },
        { label: "Sum of n naturals", formula: "n(n+1) / 2" },
        { label: "Sum of n² ", formula: "n(n+1)(2n+1) / 6" },
        { label: "Sum of n³ ", formula: "[n(n+1)/2]²" },
        { label: "(a+b)²", formula: "a² + 2ab + b²" },
        { label: "(a−b)²", formula: "a² − 2ab + b²" },
        { label: "a² − b²", formula: "(a+b)(a−b)" },
        { label: "HCF × LCM", formula: "Product of 2 numbers" },
        // Combinatorics & Probability
        { label: "nPr", formula: "n! / (n−r)!" },
        { label: "nCr", formula: "n! / [r!(n−r)!]" },
        { label: "Probability", formula: "Favorable / Total" },
        { label: "P(A or B)", formula: "P(A)+P(B)−P(A∩B)" },
        { label: "P(A and B) indep", formula: "P(A) × P(B)" },
        // Geometry
        { label: "Area Circle", formula: "πr²" },
        { label: "Circumference", formula: "2πr" },
        { label: "Area Triangle", formula: "½ × b × h" },
        { label: "Heron's formula", formula: "√[s(s−a)(s−b)(s−c)]" },
        { label: "Area Rectangle", formula: "l × b" },
        { label: "Area Trapezium", formula: "½(a+b) × h" },
        { label: "Vol Cylinder", formula: "πr²h" },
        { label: "Vol Sphere", formula: "4/3 πr³" },
        { label: "Vol Cone", formula: "1/3 πr²h" },
        { label: "Surface Sphere", formula: "4πr²" },
        // Ratio & Mixture
        { label: "Alligation Ratio", formula: "(C₂−Avg) : (Avg−C₁)" },
        { label: "Partnership Profit", formula: "Ratio of Capital × Time" },
        // Logarithms
        { label: "log(ab)", formula: "log a + log b" },
        { label: "log(a/b)", formula: "log a − log b" },
        { label: "log(aⁿ)", formula: "n × log a" },
        { label: "logₐb", formula: "1 / logᵦa" }
    ];

    document.getElementById('formulaGrid').innerHTML = formulas.map(f =>
        `<div class="formula-item"><strong>${f.label}:</strong> ${f.formula}</div>`
    ).join('');
}

// ===== PROGRESS PAGE =====
function renderProgressPage() {
    const p = state.progress;

    // Stats grid
    const statsGrid = document.getElementById('progressStatsGrid');
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="progress-stat-item"><h4>${p.totalAttempted}</h4><p>Total Questions</p></div>
            <div class="progress-stat-item"><h4>${p.totalAttempted > 0 ? Math.round((p.totalCorrect/p.totalAttempted)*100) : 0}%</h4><p>Accuracy</p></div>
            <div class="progress-stat-item"><h4>${p.testsCompleted}</h4><p>Tests Taken</p></div>
            <div class="progress-stat-item"><h4>${formatTime(p.totalTime)}</h4><p>Total Study Time</p></div>
        `;
    }

    // Topic mastery
    const mastery = document.getElementById('topicMastery');
    if (mastery) {
        let html = '';
        for (const [key, meta] of Object.entries(TOPIC_META)) {
            const stats = p.topicStats[key] || { attempted: 0, correct: 0 };
            const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
            const color = pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444';
            html += `
                <div class="mastery-item">
                    <span class="mastery-label">${meta.icon} ${meta.name}</span>
                    <div class="mastery-bar">
                        <div class="mastery-fill" style="width:${Math.max(pct, 5)}%;background:${color};">${pct}%</div>
                    </div>
                </div>`;
        }
        mastery.innerHTML = html || '<p class="empty-state">No data yet.</p>';
    }

    // Performance chart
    const chart = document.getElementById('performanceChart');
    if (chart) {
        const history = p.testHistory.slice(-15);
        if (history.length === 0) {
            chart.innerHTML = '<p class="empty-state">Take tests to see your performance trend.</p>';
        } else {
            chart.innerHTML = history.map((h, i) => {
                const color = h.score >= 70 ? '#10b981' : h.score >= 40 ? '#f59e0b' : '#ef4444';
                return `<div class="chart-bar" style="height:${Math.max(h.score, 5)}%;background:${color};" data-label="T${i+1}" title="${h.date}: ${h.score}%"></div>`;
            }).join('');
        }
    }

    // Test history
    const historyEl = document.getElementById('testHistory');
    if (historyEl) {
        const history = p.testHistory.slice(-20).reverse();
        if (history.length === 0) {
            historyEl.innerHTML = '<p class="empty-state">No test history yet.</p>';
        } else {
            historyEl.innerHTML = history.map(h => `
                <div class="history-item">
                    <span>${h.topics} ${h.date}</span>
                    <span style="font-weight:700;color:${h.score >= 70 ? 'var(--success)' : h.score >= 40 ? 'var(--warning)' : 'var(--danger)'};">
                        ${h.score}% (${h.correct}/${h.total})
                    </span>
                    <span style="color:var(--text-secondary);">${h.time}</span>
                </div>
            `).join('');
        }
    }
}

function confirmResetProgress() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
        if (confirm('Really? All your quiz scores, streaks, and progress will be lost.')) {
            localStorage.removeItem('tcsNqtProgress');
            state.progress = loadProgress();
            updateDashboard();
            renderProgressPage();
            alert('Progress has been reset.');
        }
    }
}

// ===== UTILITY FUNCTIONS =====
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatTime(seconds) {
    if (seconds < 60) return seconds + 's';
    const m = Math.floor(seconds / 60);
    const h = Math.floor(m / 60);
    if (h > 0) return `${h}h ${m % 60}m`;
    return `${m}m`;
}

// ===== KEYBOARD SHORTCUTS (ENHANCED) =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger if user is typing in input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

        // Global shortcuts
        if (e.key === '?') { document.getElementById('shortcutsModal').style.display = 'flex'; return; }
        if (e.key === 'Escape') {
            document.getElementById('shortcutsModal').style.display = 'none';
            closeStudyModal();
            return;
        }
        if (e.key === 't' || e.key === 'T') { toggleTheme(); return; }

        // Navigation shortcuts (lowercase only, not during quiz)
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
            if (e.key === 'd') { navigateTo('dashboard'); return; }
            if (e.key === 'q' && state.currentPage !== 'quiz') { navigateTo('quiz'); return; }
            if (e.key === 's' && state.currentPage !== 'quiz') { navigateTo('study'); return; }
            if (e.key === 'f' && state.currentPage !== 'quiz') { navigateTo('flashcards'); return; }
            if (e.key === 'n' && state.currentPage !== 'quiz') { navigateTo('notes'); return; }
            if (e.key === 'b' && state.currentPage !== 'quiz') { navigateTo('bookmarks'); return; }
        }

        // Ctrl+B to bookmark current question
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            if (state.currentPage === 'quiz' && state.quiz.questions.length) {
                toggleBookmarkQuestion();
            }
            return;
        }

        // Quiz shortcuts
        if (state.currentPage === 'quiz' && state.quiz.questions.length && !state.quiz.submitted) {
            if (e.key === 'ArrowRight') nextQuestion();
            if (e.key === 'ArrowLeft') prevQuestion();
            if (e.key >= '1' && e.key <= '4') {
                const idx = parseInt(e.key) - 1;
                const q = state.quiz.questions[state.quiz.currentIndex];
                if (idx < q.options.length) selectAnswer(q.id, idx);
            }
        }

        // Flashcard shortcuts
        if (state.currentPage === 'flashcards') {
            if (e.key === 'ArrowRight') nextFlashcard();
            if (e.key === 'ArrowLeft') prevFlashcard();
            if (e.key === ' ') { e.preventDefault(); flipFlashcard(); }
        }
    });
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    const main = document.getElementById('mainContent');
    main.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if (main.scrollTop > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });
    // Also listen on window scroll
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('mainContent').scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== POMODORO TIMER =====
let pomodoroState = {
    running: false,
    mode: 'focus', // 'focus', 'break', 'longbreak'
    remaining: 25 * 60,
    interval: null,
    round: 1,
    focusDuration: 25,
    breakDuration: 5,
    longBreakDuration: 15,
    totalFocusTime: 0
};

function togglePomodoro() {
    if (pomodoroState.running) {
        pausePomodoro();
    } else {
        startPomodoro();
    }
}

function startPomodoro() {
    pomodoroState.running = true;
    const btn = document.getElementById('pomodoroStartBtn');
    btn.innerHTML = '<i class="fas fa-pause"></i> Pause';

    pomodoroState.interval = setInterval(() => {
        pomodoroState.remaining--;
        if (pomodoroState.mode === 'focus') pomodoroState.totalFocusTime++;

        updatePomodoroDisplay();

        if (pomodoroState.remaining <= 0) {
            clearInterval(pomodoroState.interval);
            pomodoroState.running = false;
            onPomodoroComplete();
        }
    }, 1000);
}

function pausePomodoro() {
    pomodoroState.running = false;
    clearInterval(pomodoroState.interval);
    const btn = document.getElementById('pomodoroStartBtn');
    btn.innerHTML = '<i class="fas fa-play"></i> Resume';
}

function resetPomodoro() {
    pomodoroState.running = false;
    pomodoroState.mode = 'focus';
    pomodoroState.round = 1;
    clearInterval(pomodoroState.interval);
    pomodoroState.remaining = pomodoroState.focusDuration * 60;
    updatePomodoroDisplay();
    const btn = document.getElementById('pomodoroStartBtn');
    btn.innerHTML = '<i class="fas fa-play"></i> Start';
}

function onPomodoroComplete() {
    // Play notification sound
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        osc.frequency.value = 800;
        osc.connect(ctx.destination);
        osc.start();
        setTimeout(() => osc.stop(), 300);
    } catch(e) {}

    if (pomodoroState.mode === 'focus') {
        // Track focus time
        state.progress.totalTime += pomodoroState.focusDuration * 60;
        state.progress.activities.push({
            icon: '🍅',
            text: `Completed ${pomodoroState.focusDuration}min focus session (Round ${pomodoroState.round})`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        saveProgress();

        if (pomodoroState.round >= 4) {
            pomodoroState.mode = 'longbreak';
            pomodoroState.remaining = pomodoroState.longBreakDuration * 60;
            pomodoroState.round = 1;
            alert('Great work! 4 rounds done. Take a long break!');
        } else {
            pomodoroState.mode = 'break';
            pomodoroState.remaining = pomodoroState.breakDuration * 60;
            pomodoroState.round++;
            alert('Focus session done! Take a short break.');
        }
    } else {
        pomodoroState.mode = 'focus';
        pomodoroState.remaining = pomodoroState.focusDuration * 60;
        alert('Break over! Ready for another focus session?');
    }

    updatePomodoroDisplay();
    const btn = document.getElementById('pomodoroStartBtn');
    btn.innerHTML = '<i class="fas fa-play"></i> Start';
}

function updatePomodoroDisplay() {
    const m = Math.floor(pomodoroState.remaining / 60);
    const s = pomodoroState.remaining % 60;
    const display = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    const mainDisplay = document.getElementById('pomodoroDisplay');
    if (mainDisplay) mainDisplay.textContent = display;

    const miniDisplay = document.getElementById('pomodoroMiniDisplay');
    if (miniDisplay) miniDisplay.textContent = display;

    const label = document.getElementById('pomodoroLabel');
    if (label) {
        label.textContent = pomodoroState.mode === 'focus' ? 'Focus' : pomodoroState.mode === 'break' ? 'Break' : 'Long Break';
    }

    const rounds = document.getElementById('pomodoroRounds');
    if (rounds) rounds.textContent = `Round ${pomodoroState.round}/4`;

    // Update arc
    const arc = document.getElementById('pomodoroArc');
    if (arc) {
        const total = pomodoroState.mode === 'focus' ? pomodoroState.focusDuration * 60 :
            pomodoroState.mode === 'break' ? pomodoroState.breakDuration * 60 : pomodoroState.longBreakDuration * 60;
        const progress = 1 - (pomodoroState.remaining / total);
        const circumference = 2 * Math.PI * 54;
        arc.style.strokeDashoffset = circumference * (1 - progress);
        arc.setAttribute('stroke', pomodoroState.mode === 'focus' ? 'var(--primary)' : 'var(--success)');
    }
}

function updatePomodoroSettings() {
    const focus = parseInt(document.getElementById('focusDuration').value) || 25;
    const brk = parseInt(document.getElementById('breakDuration').value) || 5;
    const lbrk = parseInt(document.getElementById('longBreakDuration').value) || 15;
    pomodoroState.focusDuration = Math.max(1, Math.min(60, focus));
    pomodoroState.breakDuration = Math.max(1, Math.min(30, brk));
    pomodoroState.longBreakDuration = Math.max(1, Math.min(60, lbrk));
    if (!pomodoroState.running) {
        pomodoroState.remaining = pomodoroState.focusDuration * 60;
        updatePomodoroDisplay();
    }
}

// ===== NOTES =====
function saveNote() {
    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();
    const category = document.getElementById('noteCategory').value;

    if (!content) { alert('Please write something before saving.'); return; }

    if (!state.progress.notes) state.progress.notes = [];

    state.progress.notes.push({
        id: Date.now(),
        title: title || 'Untitled Note',
        content: content,
        category: category,
        date: new Date().toLocaleString()
    });

    saveProgress();
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    renderNotesList();

    state.progress.activities.push({
        icon: '📝',
        text: `Saved note: ${title || 'Untitled'}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    saveProgress();
}

function renderNotesList() {
    if (!state.progress.notes) state.progress.notes = [];

    const container = document.getElementById('notesList');
    if (!container) return;

    const filter = document.getElementById('noteFilterCategory')?.value || 'all';
    let notes = [...state.progress.notes].reverse();
    if (filter !== 'all') notes = notes.filter(n => n.category === filter);

    if (notes.length === 0) {
        container.innerHTML = '<p class="empty-state">No notes yet. Start writing!</p>';
        return;
    }

    const categoryLabels = {
        general: '📝', quantitative: '🔢', verbal: '📝', reasoning: '🧩',
        programming: '💻', formulas: '📐', mistakes: '⚠️'
    };

    container.innerHTML = notes.map(n => `
        <div class="note-item">
            <div class="note-item-header">
                <span class="note-category-badge">${categoryLabels[n.category] || '📝'} ${n.category}</span>
                <span class="note-date">${n.date}</span>
                <button class="note-delete-btn" onclick="deleteNote(${n.id})" title="Delete note">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <h4 class="note-item-title">${escapeHtml(n.title)}</h4>
            <p class="note-item-content">${escapeHtml(n.content)}</p>
        </div>
    `).join('');
}

function deleteNote(id) {
    if (!confirm('Delete this note?')) return;
    state.progress.notes = state.progress.notes.filter(n => n.id !== id);
    saveProgress();
    renderNotesList();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== BOOKMARKS =====
function toggleBookmarkQuestion() {
    if (!state.quiz.questions.length) return;
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!state.progress.bookmarks) state.progress.bookmarks = [];

    const idx = state.progress.bookmarks.indexOf(q.id);
    if (idx > -1) {
        state.progress.bookmarks.splice(idx, 1);
    } else {
        state.progress.bookmarks.push(q.id);
    }
    saveProgress();
    updateBookmarkIcon();
}

function updateBookmarkIcon() {
    const icon = document.getElementById('bookmarkIcon');
    if (!icon) return;
    if (!state.quiz.questions.length) return;
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!state.progress.bookmarks) state.progress.bookmarks = [];
    const isBookmarked = state.progress.bookmarks.includes(q.id);
    icon.className = isBookmarked ? 'fas fa-bookmark' : 'far fa-bookmark';
    icon.parentElement.classList.toggle('bookmarked', isBookmarked);
}

function renderBookmarksList(filterTopic) {
    if (!state.progress.bookmarks) state.progress.bookmarks = [];
    const container = document.getElementById('bookmarksList');
    const statsEl = document.getElementById('bookmarkStats');
    const actionsEl = document.getElementById('bookmarkActions');
    if (!container) return;

    const filter = filterTopic || 'all';
    let bookmarkedQs = QUESTION_BANK.filter(q => state.progress.bookmarks.includes(q.id));
    if (filter !== 'all') bookmarkedQs = bookmarkedQs.filter(q => q.topic === filter);

    // Stats
    if (statsEl) {
        const total = state.progress.bookmarks.length;
        const byTopic = {};
        QUESTION_BANK.filter(q => state.progress.bookmarks.includes(q.id)).forEach(q => {
            byTopic[q.topic] = (byTopic[q.topic] || 0) + 1;
        });
        if (total > 0) {
            statsEl.innerHTML = `<div class="bm-stats-row">
                <span class="bm-stat-total">${total} bookmarked</span>
                ${Object.entries(byTopic).map(([t, c]) => `<span class="bm-stat-item">${TOPIC_META[t]?.icon || ''} ${c}</span>`).join('')}
            </div>`;
        } else {
            statsEl.innerHTML = '';
        }
    }

    if (bookmarkedQs.length === 0) {
        container.innerHTML = '<p class="empty-state">No bookmarked questions' +
            (filter !== 'all' ? ' in this category' : '') +
            '. Bookmark questions during quizzes to review later!</p>';
        if (actionsEl) actionsEl.style.display = 'none';
        return;
    }

    if (actionsEl) actionsEl.style.display = 'flex';

    const letters = ['A', 'B', 'C', 'D'];
    container.innerHTML = bookmarkedQs.map(q => `
        <div class="bookmark-item">
            <div class="bm-item-header">
                <span class="bm-topic-badge">${TOPIC_META[q.topic]?.icon || ''} ${TOPIC_META[q.topic]?.name || q.topic}</span>
                <span class="diff-badge ${q.difficulty}">${q.difficulty}</span>
                <button class="bm-remove-btn" onclick="removeBookmark(${q.id})" title="Remove bookmark">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <h4 class="bm-question">${q.question}</h4>
            <div class="bm-options">
                ${q.options.map((opt, i) => `
                    <span class="${i === q.answer ? 'bm-correct-opt' : ''}">${letters[i]}. ${opt}</span>
                `).join('')}
            </div>
            <div class="bm-explanation">💡 ${q.explanation}</div>
        </div>
    `).join('');
}

function filterBookmarks(topic) {
    document.querySelectorAll('.bm-filter').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-bmfilter="${topic}"]`)?.classList.add('active');
    renderBookmarksList(topic);
}

function removeBookmark(id) {
    state.progress.bookmarks = state.progress.bookmarks.filter(b => b !== id);
    saveProgress();
    renderBookmarksList();
}

function clearAllBookmarks() {
    if (!confirm('Remove all bookmarks?')) return;
    state.progress.bookmarks = [];
    saveProgress();
    renderBookmarksList();
}

function startBookmarkQuiz() {
    if (!state.progress.bookmarks || state.progress.bookmarks.length === 0) {
        alert('No bookmarked questions to practice.');
        return;
    }

    navigateTo('quiz');

    let pool = QUESTION_BANK.filter(q => state.progress.bookmarks.includes(q.id));
    pool = shuffleArray(pool);

    state.quiz = {
        questions: pool,
        currentIndex: 0,
        answers: {},
        startTime: Date.now(),
        timeLimit: 0,
        timerInterval: null,
        submitted: false,
        instantFeedback: true
    };

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    document.getElementById('qTotal').textContent = pool.length;
    renderQuestion();
    renderNavigator();
}

// Override renderQuestion to also update bookmark icon
const _origRenderQuestion = renderQuestion;
// Patch it via wrapping
(function() {
    const origFn = window.renderQuestion || renderQuestion;
    const patchedFn = function() {
        origFn.apply(this, arguments);
        updateBookmarkIcon();
    };
    // We can't reassign renderQuestion easily since it's used inline
    // Instead, add bookmark update to goToQuestion, nextQuestion, prevQuestion via event
})();

// Simpler approach: use MutationObserver on question text to update bookmark
const qTextEl = document.getElementById('questionText');
if (qTextEl) {
    new MutationObserver(() => updateBookmarkIcon()).observe(qTextEl, { childList: true, characterData: true, subtree: true });
}

// ===== PWA SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

// ===== GLOBAL SEARCH =====
function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay.style.display === 'none') {
        overlay.style.display = 'flex';
        document.getElementById('globalSearchInput').focus();
    } else {
        closeSearch();
    }
}

function closeSearch() {
    document.getElementById('searchOverlay').style.display = 'none';
    document.getElementById('globalSearchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function performSearch(query) {
    const results = document.getElementById('searchResults');
    if (!query || query.length < 2) { results.innerHTML = ''; return; }

    const q = query.toLowerCase();
    const matches = [];

    // Search questions
    QUESTION_BANK.forEach(item => {
        if (item.question.toLowerCase().includes(q) || item.options.some(o => o.toLowerCase().includes(q))) {
            matches.push({ type: 'question', icon: '❓', text: item.question, topic: TOPIC_META[item.topic]?.name || item.topic, id: item.id });
        }
    });

    // Search flashcards
    FLASHCARD_DATA.forEach((fc, i) => {
        if (fc.front.toLowerCase().includes(q) || fc.back.toLowerCase().includes(q)) {
            matches.push({ type: 'flashcard', icon: '🃏', text: fc.front, topic: fc.topic, idx: i });
        }
    });

    // Search study materials
    if (typeof STUDY_MATERIALS !== 'undefined') {
        for (const [key, mat] of Object.entries(STUDY_MATERIALS)) {
            if (mat.title.toLowerCase().includes(q)) {
                matches.push({ type: 'study', icon: '📖', text: mat.title, topic: key, action: `openStudyTopic('${key}')` });
            }
            mat.sections?.forEach(s => {
                if (s.heading.toLowerCase().includes(q)) {
                    matches.push({ type: 'study', icon: '📖', text: `${mat.title} → ${s.heading}`, topic: key, action: `openStudyTopic('${key}')` });
                }
            });
        }
    }

    // Search custom flashcards
    const customCards = JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]');
    customCards.forEach((fc, i) => {
        if (fc.front.toLowerCase().includes(q) || fc.back.toLowerCase().includes(q)) {
            matches.push({ type: 'flashcard', icon: '✏️', text: fc.front, topic: 'Custom' });
        }
    });

    // Render results (max 20)
    const shown = matches.slice(0, 20);
    if (shown.length === 0) {
        results.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
        return;
    }

    results.innerHTML = shown.map(m => `
        <div class="search-result-item" onclick="${m.type === 'study' ? m.action : m.type === 'question' ? `closeSearch();navigateTo('quiz')` : `closeSearch();navigateTo('flashcards')`}">
            <span class="sr-icon">${m.icon}</span>
            <div class="sr-text">
                <span class="sr-title">${highlightMatch(escapeHtml(m.text.substring(0, 100)), query)}</span>
                <span class="sr-meta">${m.topic}</span>
            </div>
        </div>
    `).join('') + (matches.length > 20 ? `<div class="search-more">...and ${matches.length - 20} more results</div>` : '');
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Ctrl+K to open search
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
    }
    if (e.key === 'Escape' && document.getElementById('searchOverlay').style.display !== 'none') {
        closeSearch();
    }
});

// ===== SPACED REPETITION =====
let spacedRepMode = false;

function toggleSpacedRepetition() {
    spacedRepMode = document.getElementById('spacedRepToggle').checked;
    loadFlashcards();
    updateFcStats();
}

function getSpacedRepCards(cards) {
    const progress = state.progress.flashcardProgress || {};
    // Weight: hard=5x, medium=3x, easy=1x, unseen=2x
    const weighted = [];
    cards.forEach(card => {
        const diff = progress[card.front];
        let weight = 2; // unseen
        if (diff === 'hard') weight = 5;
        else if (diff === 'medium') weight = 3;
        else if (diff === 'easy') weight = 1;
        for (let i = 0; i < weight; i++) weighted.push(card);
    });
    return shuffleArray(weighted).filter((card, idx, arr) => arr.indexOf(card) === idx);
}

function updateFcStats() {
    const el = document.getElementById('fcStats');
    if (!el) return;
    const progress = state.progress.flashcardProgress || {};
    const total = FLASHCARD_DATA.length;
    const hard = Object.values(progress).filter(v => v === 'hard').length;
    const medium = Object.values(progress).filter(v => v === 'medium').length;
    const easy = Object.values(progress).filter(v => v === 'easy').length;
    const unseen = total - hard - medium - easy;
    el.innerHTML = `<span class="fc-stat hard">${hard} Hard</span><span class="fc-stat med">${medium} Okay</span><span class="fc-stat easy">${easy} Easy</span><span class="fc-stat unseen">${unseen} Unseen</span>`;
}

// Patch loadFlashcards to support spaced rep
const _origLoadFlashcards = loadFlashcards;
loadFlashcards = function() {
    const topic = document.getElementById('fcTopicSelect').value;
    let cards = topic === 'all' ? [...FLASHCARD_DATA] : FLASHCARD_DATA.filter(fc => fc.topic === topic);

    // Add custom flashcards
    const customCards = JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]');
    if (topic === 'all') {
        cards = cards.concat(customCards);
    } else {
        cards = cards.concat(customCards.filter(c => c.topic === topic));
    }

    if (spacedRepMode) {
        cards = getSpacedRepCards(cards);
    } else {
        cards = shuffleArray(cards);
    }

    state.flashcard.cards = cards;
    state.flashcard.currentIndex = 0;
    state.flashcard.flipped = false;
    renderFlashcard();
    updateFcStats();
};

// ===== CUSTOM FLASHCARDS =====
function addCustomFlashcard() {
    const front = document.getElementById('customFcFront').value.trim();
    const back = document.getElementById('customFcBack').value.trim();
    const topic = document.getElementById('customFcTopic').value;

    if (!front || !back) { alert('Please fill in both front and back of the card.'); return; }

    const customCards = JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]');
    customCards.push({ front, back, topic, id: Date.now() });
    localStorage.setItem('tcsNqtCustomFlashcards', JSON.stringify(customCards));

    document.getElementById('customFcFront').value = '';
    document.getElementById('customFcBack').value = '';

    renderCustomFcList();
    loadFlashcards(); // Refresh deck with new card
}

function renderCustomFcList() {
    const el = document.getElementById('customFcList');
    if (!el) return;
    const cards = JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]');
    if (cards.length === 0) { el.innerHTML = ''; return; }
    el.innerHTML = `<p style="font-size:0.85rem;color:var(--text-secondary);margin:0.5rem 0;">Your custom cards (${cards.length}):</p>` +
        cards.slice(-5).reverse().map(c => `
        <div class="custom-fc-item">
            <span>${escapeHtml(c.front.substring(0, 40))}${c.front.length > 40 ? '...' : ''}</span>
            <button class="btn-icon" onclick="deleteCustomFc(${c.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function deleteCustomFc(id) {
    let cards = JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]');
    cards = cards.filter(c => c.id !== id);
    localStorage.setItem('tcsNqtCustomFlashcards', JSON.stringify(cards));
    renderCustomFcList();
    loadFlashcards();
}

// ===== EXPORT / IMPORT PROGRESS =====
function exportProgress() {
    const data = {
        progress: state.progress,
        customFlashcards: JSON.parse(localStorage.getItem('tcsNqtCustomFlashcards') || '[]'),
        theme: localStorage.getItem('tcsNqtTheme'),
        exportDate: new Date().toISOString(),
        version: '2.0'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nqt-prep-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.progress || !data.version) {
                alert('Invalid backup file format.');
                return;
            }
            if (!confirm('This will replace your current progress. Continue?')) return;

            state.progress = data.progress;
            saveProgress();

            if (data.customFlashcards) {
                localStorage.setItem('tcsNqtCustomFlashcards', JSON.stringify(data.customFlashcards));
            }
            if (data.theme) {
                localStorage.setItem('tcsNqtTheme', data.theme);
            }

            alert('Progress imported successfully! Refreshing...');
            location.reload();
        } catch (err) {
            alert('Error reading file: ' + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== WEAK AREA AUTO-QUIZ =====
function startWeakAreaQuiz() {
    const weakTopics = [];
    for (const [key, meta] of Object.entries(TOPIC_META)) {
        const stats = state.progress.topicStats[key] || { attempted: 0, correct: 0 };
        if (stats.attempted > 0) {
            const pct = Math.round((stats.correct / stats.attempted) * 100);
            if (pct < 70) weakTopics.push(key);
        } else {
            weakTopics.push(key); // Untested topics are also weak
        }
    }

    if (weakTopics.length === 0) {
        alert('Great job! No weak areas found. All topics are above 70%. Try a full mock test instead.');
        return;
    }

    let pool = QUESTION_BANK.filter(q => weakTopics.includes(q.topic));
    pool = shuffleArray(pool).slice(0, 25);

    if (pool.length === 0) { alert('No questions available.'); return; }

    navigateTo('quiz');
    state.quiz = {
        questions: pool,
        currentIndex: 0,
        answers: {},
        startTime: Date.now(),
        timeLimit: 0,
        timerInterval: null,
        submitted: false,
        instantFeedback: true
    };

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('qTotal').textContent = pool.length;
    renderQuestion();
    renderNavigator();
}

// ===== QUIZ REVIEW MODE (WRONG ONLY) =====
function reviewWrongOnly() {
    const section = document.getElementById('reviewSection');
    section.style.display = 'block';

    const wrongQs = state.quiz.questions.filter(q => {
        const answer = state.quiz.answers[q.id];
        return answer !== undefined && answer !== q.answer;
    });

    if (wrongQs.length === 0) {
        section.innerHTML = '<div class="card"><h3>🎉 Perfect Score!</h3><p>You got all questions correct!</p></div>';
        section.scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const letters = ['A', 'B', 'C', 'D'];
    let html = `<h3>❌ Wrong Answers (${wrongQs.length})</h3><p style="color:var(--text-secondary);margin-bottom:1rem;">Focus on understanding these before your next attempt.</p>`;

    wrongQs.forEach((q, i) => {
        const answer = state.quiz.answers[q.id];
        html += `
            <div class="review-item wrong">
                <div class="review-meta">${TOPIC_META[q.topic]?.icon} ${TOPIC_META[q.topic]?.name} • Q${i + 1}</div>
                <h4>${q.question}</h4>
                <div style="margin: 0.5rem 0;">
                    ${q.options.map((opt, j) => {
                        let style = '';
                        let marker = '';
                        if (j === q.answer) { style = 'color: #065f46; font-weight: 700;'; marker = ' ✅'; }
                        if (j === answer && j !== q.answer) { style = 'color: #991b1b; text-decoration: line-through;'; marker = ' ❌'; }
                        return `<div style="${style}">${letters[j]}. ${opt}${marker}</div>`;
                    }).join('')}
                </div>
                <div class="review-explanation">💡 ${q.explanation}</div>
            </div>`;
    });

    section.innerHTML = html;
    section.scrollIntoView({ behavior: 'smooth' });
}

// ===== FORMULA QUICK-REFERENCE SHEET =====
function renderFormulaSheet() {
    const filter = document.getElementById('formulaTopicFilter')?.value || 'all';
    const container = document.getElementById('formulaSheetContent');
    if (!container) return;

    const sheets = {
        arithmetic: {
            title: '🔢 Arithmetic & Number Properties',
            formulas: [
                { label: 'Sum of n naturals', formula: 'n(n+1)/2' },
                { label: 'Sum of n²', formula: 'n(n+1)(2n+1)/6' },
                { label: 'Sum of n³', formula: '[n(n+1)/2]²' },
                { label: 'First n odd numbers', formula: 'Sum = n²' },
                { label: 'First n even numbers', formula: 'Sum = n(n+1)' },
                { label: 'HCF × LCM', formula: '= Product of two numbers' },
                { label: 'Divisibility by 3', formula: 'Sum of digits ÷ 3' },
                { label: 'Divisibility by 4', formula: 'Last 2 digits ÷ 4' },
                { label: 'Divisibility by 8', formula: 'Last 3 digits ÷ 8' },
                { label: 'Divisibility by 11', formula: '|Sum odd pos − Sum even pos| ÷ 11' },
                { label: 'Number of factors', formula: 'If n = p^a × q^b → (a+1)(b+1)' },
                { label: 'Remainder theorem', formula: 'f(a) is remainder when f(x) ÷ (x−a)' }
            ]
        },
        algebra: {
            title: '📐 Algebra & Equations',
            formulas: [
                { label: '(a+b)²', formula: 'a² + 2ab + b²' },
                { label: '(a−b)²', formula: 'a² − 2ab + b²' },
                { label: 'a² − b²', formula: '(a+b)(a−b)' },
                { label: '(a+b)³', formula: 'a³ + 3a²b + 3ab² + b³' },
                { label: 'a³ + b³', formula: '(a+b)(a²−ab+b²)' },
                { label: 'a³ − b³', formula: '(a−b)(a²+ab+b²)' },
                { label: 'Quadratic roots', formula: 'x = (−b ± √(b²−4ac)) / 2a' },
                { label: 'Sum of roots', formula: '−b/a' },
                { label: 'Product of roots', formula: 'c/a' },
                { label: 'log(ab)', formula: 'log a + log b' },
                { label: 'log(a/b)', formula: 'log a − log b' },
                { label: 'log(aⁿ)', formula: 'n × log a' },
                { label: 'logₐb', formula: '1/logᵦa' },
                { label: 'AP: nth term', formula: 'a + (n−1)d' },
                { label: 'AP: Sum', formula: 'n/2 × (2a + (n−1)d)' },
                { label: 'GP: nth term', formula: 'ar^(n−1)' },
                { label: 'GP: Sum (r≠1)', formula: 'a(rⁿ−1)/(r−1)' }
            ]
        },
        geometry: {
            title: '📏 Geometry & Mensuration',
            formulas: [
                { label: 'Area of circle', formula: 'πr²' },
                { label: 'Circumference', formula: '2πr' },
                { label: 'Area of triangle', formula: '½ × base × height' },
                { label: "Heron's formula", formula: '√[s(s−a)(s−b)(s−c)], s=(a+b+c)/2' },
                { label: 'Equilateral △ area', formula: '(√3/4)a²' },
                { label: 'Area of rectangle', formula: 'l × b' },
                { label: 'Diagonal of rectangle', formula: '√(l² + b²)' },
                { label: 'Area of trapezium', formula: '½(a+b) × h' },
                { label: 'Vol of cube', formula: 'a³, TSA = 6a²' },
                { label: 'Vol of cuboid', formula: 'l×b×h, TSA = 2(lb+bh+lh)' },
                { label: 'Vol of cylinder', formula: 'πr²h, CSA = 2πrh' },
                { label: 'Vol of cone', formula: '⅓πr²h, slant = √(r²+h²)' },
                { label: 'Vol of sphere', formula: '4/3 πr³, SA = 4πr²' },
                { label: 'Sector area', formula: '(θ/360) × πr²' },
                { label: 'Arc length', formula: '(θ/360) × 2πr' }
            ]
        },
        combinatorics: {
            title: '🎲 Permutation, Combination & Probability',
            formulas: [
                { label: 'nPr', formula: 'n! / (n−r)!' },
                { label: 'nCr', formula: 'n! / [r!(n−r)!]' },
                { label: 'nCr = nC(n−r)', formula: 'Symmetry property' },
                { label: 'Circular perm', formula: '(n−1)!' },
                { label: 'With repetition', formula: 'n! / (a!×b!×...)' },
                { label: 'P(event)', formula: 'Favorable / Total outcomes' },
                { label: 'P(A∪B)', formula: 'P(A) + P(B) − P(A∩B)' },
                { label: 'P(A∩B) independent', formula: 'P(A) × P(B)' },
                { label: 'P(not A)', formula: '1 − P(A)' },
                { label: 'Derangements', formula: 'n! × Σ(−1)^k/k!, k=0 to n' }
            ]
        },
        time: {
            title: '⏱️ Time, Speed & Work',
            formulas: [
                { label: 'Speed', formula: 'Distance / Time' },
                { label: 'km/h → m/s', formula: '× 5/18' },
                { label: 'm/s → km/h', formula: '× 18/5' },
                { label: 'Avg speed (same dist)', formula: '2ab / (a+b)' },
                { label: 'Relative speed (opposite)', formula: 'S₁ + S₂' },
                { label: 'Relative speed (same dir)', formula: '|S₁ − S₂|' },
                { label: 'Train crossing pole', formula: 'Length / Speed' },
                { label: 'Upstream speed', formula: 'Boat − Stream' },
                { label: 'Downstream speed', formula: 'Boat + Stream' },
                { label: 'Work rate', formula: '1 / Total days' },
                { label: 'A+B together', formula: 'ab/(a+b) days' },
                { label: 'Pipe fill & leak', formula: '1/Fill − 1/Leak' },
                { label: 'Clock angle', formula: '|30H − 5.5M|°' },
                { label: 'Clock hands meet', formula: '11 times in 12 hours' }
            ]
        },
        commercial: {
            title: '💰 Profit, Interest & Percentage',
            formulas: [
                { label: 'Profit %', formula: '(Profit/CP) × 100' },
                { label: 'Loss %', formula: '(Loss/CP) × 100' },
                { label: 'SP from CP', formula: 'CP × (100±P%)/100' },
                { label: 'Discount', formula: 'MP × (100−D%)/100' },
                { label: 'Simple Interest', formula: 'P × R × T / 100' },
                { label: 'CI Amount', formula: 'P(1 + R/100)^T' },
                { label: 'CI − SI (2 yrs)', formula: 'P(R/100)²' },
                { label: 'Successive %', formula: 'a + b + ab/100' },
                { label: 'Population growth', formula: 'P(1 + R/100)^n' },
                { label: 'Depreciation', formula: 'P(1 − R/100)^n' },
                { label: 'Alligation ratio', formula: '(Dearer−Mean) : (Mean−Cheaper)' },
                { label: 'Partnership profit', formula: 'Ratio of (Capital × Time)' }
            ]
        },
        logic: {
            title: '🧩 Logic & Series Shortcuts',
            formulas: [
                { label: 'Handshakes', formula: 'nC2 = n(n−1)/2' },
                { label: 'Diagonals of polygon', formula: 'n(n−3)/2' },
                { label: 'Triangles from points', formula: 'nC3 (no 3 collinear)' },
                { label: 'Calendar: Odd days', formula: 'Leap yr=2, Normal=1' },
                { label: 'Coding A=1...Z=26', formula: 'Opposite: sum = 27' },
                { label: 'Direction: Pythagoras', formula: 'd = √(x² + y²)' },
                { label: 'Seating linear', formula: 'n! arrangements' },
                { label: 'Seating circular', formula: '(n−1)!' },
                { label: 'Blood: Gen diff', formula: 'Father/Mother = +1 gen' },
                { label: 'Mirror image', formula: 'Left ↔ Right flip only' }
            ]
        },
        cs: {
            title: '💻 CS Fundamentals',
            formulas: [
                { label: 'Array access', formula: 'O(1)' },
                { label: 'Binary search', formula: 'O(log n)' },
                { label: 'Sorting (best)', formula: 'O(n log n) — Merge/Heap' },
                { label: 'Linear search', formula: 'O(n)' },
                { label: 'Stack/Queue ops', formula: 'O(1) push/pop/enqueue/dequeue' },
                { label: 'BST search avg', formula: 'O(log n), worst O(n)' },
                { label: 'Hash table avg', formula: 'O(1) insert/search' },
                { label: 'BFS/DFS', formula: 'O(V + E)' },
                { label: "Dijkstra's", formula: 'O(V² or V log V with heap)' },
                { label: 'Page faults (FIFO)', formula: 'Count frame misses' },
                { label: 'Disk scheduling', formula: 'Total head movement' },
                { label: 'Subnetting: hosts', formula: '2^(32−prefix) − 2' },
                { label: 'SQL JOIN', formula: 'INNER, LEFT, RIGHT, FULL' },
                { label: 'Normalization', formula: '1NF→2NF→3NF→BCNF' }
            ]
        }
    };

    let html = '';
    const topics = filter === 'all' ? Object.keys(sheets) : [filter];

    topics.forEach(key => {
        const sheet = sheets[key];
        if (!sheet) return;
        html += `<div class="formula-section">
            <h3 class="formula-section-title">${sheet.title}</h3>
            <div class="formula-grid-compact">
                ${sheet.formulas.map(f => `<div class="formula-cell"><strong>${f.label}</strong><span>${f.formula}</span></div>`).join('')}
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// ===== ANALYTICS & CHARTS =====
function renderAnalytics() {
    renderAccuracyChart();
    renderRadarChart();
    renderActivityHeatmap();
    renderAchievements();
    renderTimeChart();
}

function renderAccuracyChart() {
    const container = document.getElementById('accuracyChart');
    if (!container) return;
    const history = state.progress.testHistory.slice(-20);

    if (history.length < 2) {
        container.innerHTML = '<p class="empty-state">Take at least 2 tests to see trends.</p>';
        return;
    }

    const maxScore = 100;
    const width = container.clientWidth || 400;
    const height = 200;
    const padding = 40;
    const graphW = width - padding * 2;
    const graphH = height - padding * 2;

    let svg = `<svg viewBox="0 0 ${width} ${height}" class="chart-svg">`;
    // Grid lines
    for (let i = 0; i <= 4; i++) {
        const y = padding + (graphH / 4) * i;
        svg += `<line x1="${padding}" y1="${y}" x2="${width-padding}" y2="${y}" stroke="var(--border)" stroke-dasharray="4"/>`;
        svg += `<text x="${padding-5}" y="${y+4}" text-anchor="end" fill="var(--text-secondary)" font-size="10">${100 - i*25}%</text>`;
    }

    // Line path
    const points = history.map((h, i) => {
        const x = padding + (graphW / (history.length - 1)) * i;
        const y = padding + graphH - (h.score / maxScore) * graphH;
        return { x, y, score: h.score };
    });

    // Area fill
    svg += `<path d="M${points[0].x},${padding + graphH} ${points.map(p => `L${p.x},${p.y}`).join(' ')} L${points[points.length-1].x},${padding + graphH} Z" fill="var(--primary)" opacity="0.1"/>`;
    // Line
    svg += `<polyline points="${points.map(p => `${p.x},${p.y}`).join(' ')}" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    // Dots
    points.forEach(p => {
        const color = p.score >= 70 ? '#10b981' : p.score >= 40 ? '#f59e0b' : '#ef4444';
        svg += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="white" stroke-width="2"/>`;
    });

    // Average line
    const avg = Math.round(history.reduce((s, h) => s + h.score, 0) / history.length);
    const avgY = padding + graphH - (avg / maxScore) * graphH;
    svg += `<line x1="${padding}" y1="${avgY}" x2="${width-padding}" y2="${avgY}" stroke="#f59e0b" stroke-dasharray="6,3" stroke-width="1.5"/>`;
    svg += `<text x="${width-padding+5}" y="${avgY+4}" fill="#f59e0b" font-size="10">avg ${avg}%</text>`;

    svg += '</svg>';
    container.innerHTML = svg;
}

function renderRadarChart() {
    const container = document.getElementById('radarChart');
    if (!container) return;

    const topics = Object.entries(TOPIC_META);
    const n = topics.length;
    const cx = 150, cy = 150, r = 110;

    let svg = `<svg viewBox="0 0 300 300" class="chart-svg">`;

    // Grid rings
    for (let ring = 1; ring <= 4; ring++) {
        const rr = (r / 4) * ring;
        const points = [];
        for (let i = 0; i < n; i++) {
            const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
            points.push(`${cx + rr * Math.cos(angle)},${cy + rr * Math.sin(angle)}`);
        }
        svg += `<polygon points="${points.join(' ')}" fill="none" stroke="var(--border)" stroke-width="0.5"/>`;
    }

    // Axes
    for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
        const x2 = cx + r * Math.cos(angle);
        const y2 = cy + r * Math.sin(angle);
        svg += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--border)" stroke-width="0.5"/>`;
        // Labels
        const lx = cx + (r + 18) * Math.cos(angle);
        const ly = cy + (r + 18) * Math.sin(angle);
        svg += `<text x="${lx}" y="${ly}" text-anchor="middle" fill="var(--text-secondary)" font-size="9">${topics[i][1].icon}</text>`;
    }

    // Data polygon
    const dataPoints = [];
    for (let i = 0; i < n; i++) {
        const stats = state.progress.topicStats[topics[i][0]] || { attempted: 0, correct: 0 };
        const pct = stats.attempted > 0 ? stats.correct / stats.attempted : 0;
        const angle = (Math.PI * 2 / n) * i - Math.PI / 2;
        const dr = r * pct;
        dataPoints.push(`${cx + dr * Math.cos(angle)},${cy + dr * Math.sin(angle)}`);
    }

    svg += `<polygon points="${dataPoints.join(' ')}" fill="var(--primary)" fill-opacity="0.2" stroke="var(--primary)" stroke-width="2"/>`;
    // Data dots
    dataPoints.forEach(p => {
        const [x, y] = p.split(',');
        svg += `<circle cx="${x}" cy="${y}" r="3.5" fill="var(--primary)" stroke="white" stroke-width="1.5"/>`;
    });

    svg += '</svg>';
    container.innerHTML = svg;
}

function renderActivityHeatmap() {
    const container = document.getElementById('activityHeatmap');
    if (!container) return;

    // Build activity map from activities list (last 84 days)
    const activityByDate = {};
    state.progress.activities.forEach(a => {
        // Extract date from the activity (approximate from recent activities)
        const today = new Date().toDateString();
        if (!activityByDate[today]) activityByDate[today] = 0;
        activityByDate[today]++;
    });

    // Also count from test history
    state.progress.testHistory.forEach(h => {
        if (!activityByDate[h.date]) activityByDate[h.date] = 0;
        activityByDate[h.date] += 2;
    });

    // Generate 84 days grid (12 weeks × 7 days)
    const today = new Date();
    let html = '<div class="heatmap-grid">';
    for (let week = 11; week >= 0; week--) {
        for (let day = 0; day < 7; day++) {
            const d = new Date(today);
            d.setDate(d.getDate() - (week * 7 + (6 - day)));
            const dateStr = d.toLocaleDateString();
            const count = activityByDate[dateStr] || 0;
            let level = 0;
            if (count >= 5) level = 4;
            else if (count >= 3) level = 3;
            else if (count >= 2) level = 2;
            else if (count >= 1) level = 1;
            html += `<div class="heatmap-cell level-${level}" title="${d.toLocaleDateString('en-US', {month:'short',day:'numeric'})}: ${count} activities"></div>`;
        }
    }
    html += '</div>';
    container.innerHTML = html;
}

function renderAchievements() {
    const container = document.getElementById('achievementsList');
    if (!container) return;

    const p = state.progress;
    const achievements = [
        { icon: '🎯', title: 'First Quiz', desc: 'Complete your first quiz', done: p.testsCompleted >= 1 },
        { icon: '🔥', title: '7 Day Streak', desc: 'Study 7 days in a row', done: p.streak >= 7 },
        { icon: '💯', title: 'Perfect Score', desc: 'Score 100% on a quiz', done: p.testHistory.some(h => h.score === 100) },
        { icon: '📚', title: '100 Questions', desc: 'Answer 100 questions', done: p.totalAttempted >= 100 },
        { icon: '🏆', title: '10 Tests Done', desc: 'Complete 10 quizzes', done: p.testsCompleted >= 10 },
        { icon: '⚡', title: 'Speed Demon', desc: 'Finish a 25Q test under 10 min', done: p.testHistory.some(h => h.total >= 25 && parseInt(h.time) < 10) },
        { icon: '🧠', title: 'All Topics', desc: 'Attempt all 8 topics', done: Object.keys(p.topicStats).length >= 8 },
        { icon: '🍅', title: 'Focus Master', desc: 'Complete 4 Pomodoro rounds', done: p.totalTime >= 100 * 60 },
        { icon: '📝', title: 'Note Taker', desc: 'Save 10 notes', done: (p.notes?.length || 0) >= 10 },
        { icon: '⭐', title: '70% Average', desc: 'Maintain 70%+ overall accuracy', done: p.totalAttempted > 20 && (p.totalCorrect / p.totalAttempted) >= 0.7 },
        { icon: '🎓', title: '300 Questions', desc: 'Answer 300 questions', done: p.totalAttempted >= 300 },
        { icon: '🌟', title: 'Streak Master', desc: 'Achieve 30 day streak', done: p.streak >= 30 }
    ];

    container.innerHTML = achievements.map(a => `
        <div class="achievement-item ${a.done ? 'unlocked' : 'locked'}">
            <span class="achievement-icon">${a.icon}</span>
            <div class="achievement-text">
                <strong>${a.title}</strong>
                <small>${a.desc}</small>
            </div>
            ${a.done ? '<i class="fas fa-check-circle" style="color:#10b981;"></i>' : '<i class="fas fa-lock" style="color:var(--text-secondary);opacity:0.4;"></i>'}
        </div>
    `).join('');
}

function renderTimeChart() {
    const container = document.getElementById('timeChart');
    if (!container) return;

    const topicTimes = {};
    state.progress.testHistory.forEach(h => {
        // Estimate time per topic from test data
        const timeVal = parseInt(h.time) || 0;
        const topicsArr = Object.keys(TOPIC_META);
        topicsArr.forEach(t => {
            if (!topicTimes[t]) topicTimes[t] = 0;
        });
    });

    // Use topic stats as proxy for time distribution
    const totalAttempted = state.progress.totalAttempted || 1;
    let html = '<div class="time-bars">';
    for (const [key, meta] of Object.entries(TOPIC_META)) {
        const stats = state.progress.topicStats[key] || { attempted: 0 };
        const pct = Math.round((stats.attempted / totalAttempted) * 100);
        html += `<div class="time-bar-row">
            <span class="time-bar-label">${meta.icon} ${meta.name}</span>
            <div class="time-bar-track"><div class="time-bar-fill" style="width:${pct}%;background:${meta.color};"></div></div>
            <span class="time-bar-value">${stats.attempted}q</span>
        </div>`;
    }
    html += '</div>';
    container.innerHTML = html || '<p class="empty-state">Take tests to see time distribution.</p>';
}

// ===== REVISION SCHEDULE GENERATOR =====
function generateSchedule() {
    const examDateStr = document.getElementById('examDateInput').value;
    const hoursPerDay = parseInt(document.getElementById('hoursPerDay').value) || 4;
    const container = document.getElementById('scheduleOutput');

    if (!examDateStr) {
        container.innerHTML = '<p class="empty-state">Please select your exam date to generate a schedule.</p>';
        return;
    }

    const examDate = new Date(examDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

    if (daysLeft <= 0) {
        container.innerHTML = '<p class="empty-state" style="color:var(--danger);">Exam date must be in the future!</p>';
        return;
    }

    // Get selected topics
    const selectedTopics = [];
    document.querySelectorAll('#scheduleTopics input:checked').forEach(cb => selectedTopics.push(cb.value));
    if (selectedTopics.length === 0) {
        container.innerHTML = '<p class="empty-state">Please select at least one topic.</p>';
        return;
    }

    // Get weak areas from progress
    const weakTopics = [];
    const strongTopics = [];
    selectedTopics.forEach(t => {
        const stats = state.progress.topicStats[t] || { attempted: 0, correct: 0 };
        const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
        if (pct < 50) weakTopics.push(t);
        else strongTopics.push(t);
    });

    // Generate day-by-day plan
    const plan = [];
    const phases = [];

    if (daysLeft >= 14) {
        phases.push({ name: 'Learning Phase', days: Math.floor(daysLeft * 0.5), focus: 'Study concepts & solve examples' });
        phases.push({ name: 'Practice Phase', days: Math.floor(daysLeft * 0.3), focus: 'Take quizzes & solve problems' });
        phases.push({ name: 'Revision Phase', days: daysLeft - Math.floor(daysLeft * 0.5) - Math.floor(daysLeft * 0.3), focus: 'Review weak areas & mock tests' });
    } else if (daysLeft >= 7) {
        phases.push({ name: 'Intensive Study', days: Math.floor(daysLeft * 0.6), focus: 'Cover key topics rapidly' });
        phases.push({ name: 'Mock & Review', days: daysLeft - Math.floor(daysLeft * 0.6), focus: 'Full mocks + weak area revision' });
    } else {
        phases.push({ name: 'Crash Revision', days: daysLeft, focus: 'Focus on formulas, key tricks, and mock tests' });
    }

    let dayCount = 0;
    const topicNames = {};
    selectedTopics.forEach(t => topicNames[t] = TOPIC_META[t]?.name || t);

    phases.forEach(phase => {
        for (let d = 0; d < phase.days; d++) {
            dayCount++;
            const date = new Date(today);
            date.setDate(date.getDate() + dayCount);

            // Rotate topics with weak areas getting more slots
            const allSlots = [...weakTopics, ...weakTopics, ...selectedTopics]; // weak topics appear more
            const topicIdx = (dayCount - 1) % allSlots.length;
            const mainTopic = allSlots[topicIdx];
            const secondTopic = selectedTopics[(dayCount) % selectedTopics.length];

            const activities = [];
            const slotHours = hoursPerDay;

            if (phase.name.includes('Learning') || phase.name.includes('Intensive') || phase.name.includes('Crash')) {
                activities.push(`📖 Study ${topicNames[mainTopic]} concepts (${Math.ceil(slotHours * 0.4)}h)`);
                activities.push(`✏️ Solve ${topicNames[mainTopic]} problems (${Math.ceil(slotHours * 0.3)}h)`);
                activities.push(`🃏 Flashcard review: ${topicNames[secondTopic]} (${Math.ceil(slotHours * 0.15)}h)`);
                activities.push(`📝 Note key formulas & tricks (${Math.ceil(slotHours * 0.15)}h)`);
            } else if (phase.name.includes('Practice')) {
                activities.push(`📝 Take 25Q quiz on ${topicNames[mainTopic]} (30min)`);
                activities.push(`✏️ Solve hard problems: ${topicNames[secondTopic]} (${Math.ceil(slotHours * 0.3)}h)`);
                activities.push(`🔍 Review wrong answers & notes (${Math.ceil(slotHours * 0.2)}h)`);
                activities.push(`📋 Time-bound practice set (${Math.ceil(slotHours * 0.2)}h)`);
            } else {
                activities.push(`📋 Full Mock Test (2h)`);
                activities.push(`🔍 Analyze & review mistakes (${Math.ceil(slotHours * 0.3)}h)`);
                activities.push(`📐 Revise formulas: ${topicNames[mainTopic]} (${Math.ceil(slotHours * 0.2)}h)`);
                activities.push(`🃏 Quick flashcard run (15min)`);
            }

            plan.push({
                day: dayCount,
                date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
                phase: phase.name,
                activities,
                mainTopic
            });
        }
    });

    // Render
    let html = `<div class="schedule-summary card glass-card">
        <h3>📅 Your ${daysLeft}-Day Study Plan</h3>
        <div class="schedule-meta">
            <span><i class="fas fa-calendar"></i> ${daysLeft} days until exam</span>
            <span><i class="fas fa-clock"></i> ${hoursPerDay}h/day → ${daysLeft * hoursPerDay}h total</span>
            <span><i class="fas fa-book"></i> ${selectedTopics.length} topics selected</span>
            ${weakTopics.length > 0 ? `<span><i class="fas fa-crosshairs"></i> ${weakTopics.length} weak areas prioritized</span>` : ''}
        </div>
    </div>`;

    // Phase overview
    html += '<div class="schedule-phases">';
    phases.forEach(phase => {
        html += `<div class="phase-badge"><strong>${phase.name}</strong> (${phase.days} days) — ${phase.focus}</div>`;
    });
    html += '</div>';

    // Daily plan
    html += '<div class="schedule-days">';
    let currentPhase = '';
    plan.forEach(day => {
        if (day.phase !== currentPhase) {
            currentPhase = day.phase;
            html += `<div class="schedule-phase-header">${currentPhase}</div>`;
        }
        const topicMeta = TOPIC_META[day.mainTopic];
        html += `<div class="schedule-day-card">
            <div class="schedule-day-header">
                <span class="schedule-day-num">Day ${day.day}</span>
                <span class="schedule-day-date">${day.date}</span>
                <span class="schedule-day-topic" style="color:${topicMeta?.color || '#666'}">${topicMeta?.icon || ''} ${topicMeta?.name || day.mainTopic}</span>
            </div>
            <ul class="schedule-activities">
                ${day.activities.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>`;
    });
    html += '</div>';

    container.innerHTML = html;
}

// ===== UPDATE NAVIGATION FOR NEW PAGES =====
// Patch navigateTo to include new pages
const _origNavigateTo = navigateTo;
navigateTo = function(page) {
    _origNavigateTo(page);
    if (page === 'formulas') renderFormulaSheet();
    if (page === 'analytics') renderAnalytics();
    if (page === 'schedule') generateSchedule();
};

// Update page titles
(function() {
    const origNav = _origNavigateTo;
    // The page title mapping is already in the original navigateTo
})();
