const PROGRESS_STORAGE_KEY = 'tcsNqtProgress';
const MAX_ACTIVITY_ITEMS = 100;
let countdownIntervalId = null;

function createDefaultProgress() {
    return {
        totalAttempted: 0,
        totalCorrect: 0,
        totalTime: 0,
        testsCompleted: 0,
        streak: 0,
        lastStudyDate: null,
        examDate: '',
        scheduleHoursPerDay: 4,
        pomodoroSessionsCompleted: 0,
        topicStats: {},
        testHistory: [],
        activities: [],
        flashcardProgress: {},
        notes: [],
        bookmarks: []
    };
}

function encodeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function parseTimeLabelToSeconds(label) {
    if (!label || typeof label !== 'string') return 0;

    let total = 0;
    const hourMatch = label.match(/(\d+)h/i);
    const minuteMatch = label.match(/(\d+)m/i);
    const secondMatch = label.match(/(\d+)s/i);

    if (hourMatch) total += parseInt(hourMatch[1], 10) * 3600;
    if (minuteMatch) total += parseInt(minuteMatch[1], 10) * 60;
    if (secondMatch) total += parseInt(secondMatch[1], 10);

    if (!hourMatch && !minuteMatch && !secondMatch) {
        const fallback = parseInt(label, 10);
        return Number.isFinite(fallback) ? fallback : 0;
    }

    return total;
}

function formatActivityTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getDateKey(date = new Date()) {
    return date.toISOString().slice(0, 10);
}

function getDayDiff(previousKey, currentKey) {
    if (!previousKey || !currentKey) return 0;

    const previous = new Date(`${previousKey}T00:00:00`);
    const current = new Date(`${currentKey}T00:00:00`);
    return Math.round((current - previous) / (1000 * 60 * 60 * 24));
}

function normalizeActivity(activity) {
    const fallbackDate = new Date();
    const timestamp = activity?.timestamp && !Number.isNaN(new Date(activity.timestamp).getTime())
        ? new Date(activity.timestamp)
        : fallbackDate;

    return {
        icon: activity?.icon || '📝',
        text: activity?.text || '',
        timestamp: activity?.timestamp || timestamp.toISOString(),
        dateKey: activity?.dateKey || timestamp.toISOString().slice(0, 10),
        time: activity?.time || formatActivityTime(timestamp)
    };
}

function normalizeTestHistoryItem(item) {
    const durationSeconds = Number.isFinite(item?.durationSeconds)
        ? item.durationSeconds
        : parseTimeLabelToSeconds(item?.time);

    return {
        date: item?.date || new Date().toLocaleDateString(),
        score: Number(item?.score) || 0,
        correct: Number(item?.correct) || 0,
        wrong: Number(item?.wrong) || 0,
        skipped: Number(item?.skipped) || 0,
        total: Number(item?.total) || 0,
        topics: item?.topics || '',
        durationSeconds,
        time: item?.time || (typeof formatTime === 'function' ? formatTime(durationSeconds) : `${durationSeconds}s`),
        topicBreakdown: item?.topicBreakdown && typeof item.topicBreakdown === 'object'
            ? item.topicBreakdown
            : {}
    };
}

function normalizeTopicStats(topicStats) {
    if (!topicStats || typeof topicStats !== 'object') return {};

    return Object.fromEntries(
        Object.entries(topicStats).map(([topic, stats]) => [
            topic,
            {
                attempted: Number(stats?.attempted) || 0,
                correct: Number(stats?.correct) || 0
            }
        ])
    );
}

function normalizeProgress(savedProgress) {
    const defaults = createDefaultProgress();
    const progress = savedProgress && typeof savedProgress === 'object' ? savedProgress : {};

    return {
        ...defaults,
        ...progress,
        totalAttempted: Number(progress.totalAttempted) || 0,
        totalCorrect: Number(progress.totalCorrect) || 0,
        totalTime: Number(progress.totalTime) || 0,
        testsCompleted: Number(progress.testsCompleted) || 0,
        streak: Number(progress.streak) || 0,
        pomodoroSessionsCompleted: Number(progress.pomodoroSessionsCompleted) || 0,
        lastStudyDate: typeof progress.lastStudyDate === 'string' ? progress.lastStudyDate : null,
        examDate: typeof progress.examDate === 'string' ? progress.examDate : '',
        scheduleHoursPerDay: Number(progress.scheduleHoursPerDay) || defaults.scheduleHoursPerDay,
        topicStats: normalizeTopicStats(progress.topicStats),
        testHistory: Array.isArray(progress.testHistory) ? progress.testHistory.map(normalizeTestHistoryItem) : [],
        activities: Array.isArray(progress.activities) ? progress.activities.map(normalizeActivity).slice(-MAX_ACTIVITY_ITEMS) : [],
        flashcardProgress: progress.flashcardProgress && typeof progress.flashcardProgress === 'object'
            ? progress.flashcardProgress
            : {},
        notes: Array.isArray(progress.notes) ? progress.notes : [],
        bookmarks: Array.isArray(progress.bookmarks) ? progress.bookmarks : []
    };
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (!saved) return createDefaultProgress();
        return normalizeProgress(JSON.parse(saved));
    } catch (error) {
        console.warn('Unable to load saved progress.', error);
        return createDefaultProgress();
    }
}

function saveProgress() {
    try {
        state.progress = normalizeProgress(state.progress);
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state.progress));
    } catch (error) {
        console.warn('Unable to save progress.', error);
        if (error?.name === 'QuotaExceededError') {
            showToast('Storage is full. Export your progress or remove some notes.', 'warning');
        }
    }
}

function ensureToastContainer() {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
    }
    return container;
}

function showToast(message, type = 'info') {
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
        <span class="toast-message">${encodeHtml(String(message))}</span>
        <button class="toast-close" type="button" aria-label="Dismiss notification">&times;</button>
    `;

    const removeToast = () => {
        toast.classList.add('toast-exit');
        window.setTimeout(() => toast.remove(), 180);
    };

    toast.querySelector('.toast-close')?.addEventListener('click', removeToast);
    container.appendChild(toast);
    window.setTimeout(removeToast, 3600);
}

function trimActivities() {
    if (!state?.progress?.activities) return;
    if (state.progress.activities.length > MAX_ACTIVITY_ITEMS) {
        state.progress.activities = state.progress.activities.slice(-MAX_ACTIVITY_ITEMS);
    }
}

function recordActivity(icon, text, options = {}) {
    if (!state?.progress) return;
    state.progress.activities.push(normalizeActivity({ icon, text, ...options }));
    trimActivities();
}

function updateStreakBadge() {
    const streakCount = document.getElementById('streakCount');
    const streakLabel = document.getElementById('streakLabel');

    if (streakCount) streakCount.textContent = state?.progress?.streak || 0;
    if (streakLabel) {
        streakLabel.textContent = (state?.progress?.streak || 0) === 1 ? 'day streak' : 'days streak';
    }
}

function markStudyDay(date = new Date()) {
    if (!state?.progress) return false;

    const todayKey = getDateKey(date);
    const previousKey = state.progress.lastStudyDate;

    if (previousKey === todayKey) {
        updateStreakBadge();
        return false;
    }

    if (!previousKey) {
        state.progress.streak = Math.max(1, state.progress.streak || 0);
    } else {
        const diff = getDayDiff(previousKey, todayKey);
        state.progress.streak = diff === 1 ? (state.progress.streak || 0) + 1 : 1;
    }

    state.progress.lastStudyDate = todayKey;
    updateStreakBadge();
    return true;
}

function recordStudyAction(icon, text, options = {}) {
    if (!state?.progress) return;
    markStudyDay(options.date || new Date());
    if (options.recordActivity !== false) {
        recordActivity(icon, text, options);
    }
    saveProgress();
}

function syncExamDateInputs() {
    const examDate = state?.progress?.examDate || '';
    const scheduleInput = document.getElementById('examDateInput');
    const dashboardInput = document.getElementById('dashboardExamDate');
    if (scheduleInput && scheduleInput.value !== examDate) scheduleInput.value = examDate;
    if (dashboardInput && dashboardInput.value !== examDate) dashboardInput.value = examDate;
}

function formatExamDate(date) {
    return date.toLocaleDateString(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

function setExamDate(dateString, options = {}) {
    if (!state?.progress) return;
    state.progress.examDate = dateString || '';
    syncExamDateInputs();
    if (options.save !== false) saveProgress();
    updateCountdown();
}

function getExamCountdownState() {
    const examDateValue = state?.progress?.examDate;
    if (!examDateValue) return null;

    const examDate = new Date(`${examDateValue}T00:00:00`);
    if (Number.isNaN(examDate.getTime())) return null;

    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    const totalDays = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
    return { examDate, totalDays };
}

function updateCountdown() {
    if (countdownIntervalId) {
        window.clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }

    const countdownText = document.getElementById('countdownText');
    const dashboardCopy = document.getElementById('dashboardCountdownCopy');
    const dashboardMeta = document.getElementById('dashboardExamMeta');
    const dashboardInput = document.getElementById('dashboardExamDate');

    if (dashboardInput) {
        dashboardInput.value = state?.progress?.examDate || '';
    }

    const renderCountdown = () => {
        const countdownState = getExamCountdownState();

        if (!countdownState) {
            if (countdownText) countdownText.textContent = 'Set your exam date';
            if (dashboardCopy) dashboardCopy.textContent = 'Set your real exam date to personalize the countdown and study plan.';
            if (dashboardMeta) dashboardMeta.textContent = 'Your revision schedule and mock strategy will update around that date.';
            return;
        }

        const { examDate, totalDays } = countdownState;
        if (totalDays < 0) {
            if (countdownText) countdownText.textContent = 'Exam date has passed';
            if (dashboardCopy) dashboardCopy.textContent = 'Your saved exam date is in the past. Update it to keep the dashboard realistic.';
            if (dashboardMeta) dashboardMeta.textContent = `Last saved target: ${formatExamDate(examDate)}`;
            return;
        }

        if (totalDays === 0) {
            if (countdownText) countdownText.textContent = 'Exam day';
            if (dashboardCopy) dashboardCopy.textContent = 'Today is your exam day. Focus on light revision and confidence.';
            if (dashboardMeta) dashboardMeta.textContent = formatExamDate(examDate);
            return;
        }

        if (countdownText) {
            countdownText.textContent = totalDays === 1 ? '1 day to exam' : `${totalDays} days to exam`;
        }

        if (dashboardCopy) {
            dashboardCopy.textContent = totalDays <= 7
                ? `Only ${totalDays} day${totalDays === 1 ? '' : 's'} left. Prioritize mocks, formulas, and weak areas.`
                : `${totalDays} days left until your exam. Keep the schedule realistic and consistent.`;
        }

        if (dashboardMeta) dashboardMeta.textContent = `Target date: ${formatExamDate(examDate)}`;
    };

    renderCountdown();
    countdownIntervalId = window.setInterval(renderCountdown, 60000);
}
