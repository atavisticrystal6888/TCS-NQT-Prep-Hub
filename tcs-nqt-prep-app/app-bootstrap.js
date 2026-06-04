(function () {
    let bootstrapped = false;
    let deferredInstallPrompt = null;

    function parseNumber(value) {
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : null;
    }

    function handleAction(element) {
        const action = element.dataset.action;

        switch (action) {
            case 'toggle-sidebar':
                toggleSidebar();
                break;
            case 'toggle-search':
                toggleSearch();
                break;
            case 'navigate':
                navigateTo(element.dataset.page || 'dashboard');
                break;
            case 'toggle-theme':
                toggleTheme();
                break;
            case 'install-app':
                promptInstall();
                break;
            case 'start-quick-test':
                startQuickTest(element.dataset.topic || 'mock');
                break;
            case 'start-quiz':
                startQuiz();
                break;
            case 'toggle-bookmark':
                toggleBookmarkQuestion();
                break;
            case 'prev-question':
                prevQuestion();
                break;
            case 'next-question':
                nextQuestion();
                break;
            case 'submit-quiz':
                submitQuiz();
                break;
            case 'review-quiz':
                reviewQuiz();
                break;
            case 'review-wrong-only':
                reviewWrongOnly();
                break;
            case 'retake-quiz':
                retakeQuiz();
                break;
            case 'start-weak-area-quiz':
                startWeakAreaQuiz();
                break;
            case 'show-quiz-setup':
                showQuizSetup();
                break;
            case 'open-study-topic':
                openStudyTopic(element.dataset.topic);
                break;
            case 'close-study-modal':
                closeStudyModal();
                break;
            case 'prev-flashcard':
                prevFlashcard();
                break;
            case 'flip-flashcard':
                flipFlashcard();
                break;
            case 'next-flashcard':
                nextFlashcard();
                break;
            case 'mark-flashcard':
                markFlashcard(element.dataset.difficulty);
                break;
            case 'add-custom-flashcard':
                addCustomFlashcard();
                break;
            case 'export-progress':
                exportProgress();
                break;
            case 'trigger-import':
                document.getElementById('importFile')?.click();
                break;
            case 'confirm-reset-progress':
                confirmResetProgress();
                break;
            case 'toggle-pomodoro':
                togglePomodoro();
                break;
            case 'reset-pomodoro':
                resetPomodoro();
                break;
            case 'save-note':
                saveNote();
                break;
            case 'filter-bookmarks':
                filterBookmarks(element.dataset.topic || 'all');
                break;
            case 'start-bookmark-quiz':
                startBookmarkQuiz();
                break;
            case 'clear-bookmarks':
                clearAllBookmarks();
                break;
            case 'print-sheet':
                window.print();
                break;
            case 'generate-schedule':
                generateSchedule();
                break;
            case 'scroll-top':
                scrollToTop();
                break;
            case 'close-shortcuts':
                document.getElementById('shortcutsModal').style.display = 'none';
                break;
            case 'toggle-interview-answer':
                toggleIntAnswer(element);
                break;
            case 'delete-note': {
                const noteId = parseNumber(element.dataset.noteId);
                if (noteId !== null) deleteNote(noteId);
                break;
            }
            case 'remove-bookmark': {
                const questionId = parseNumber(element.dataset.questionId);
                if (questionId !== null) removeBookmark(questionId);
                break;
            }
            case 'delete-custom-flashcard': {
                const cardId = parseNumber(element.dataset.cardId);
                if (cardId !== null) deleteCustomFc(cardId);
                break;
            }
            case 'open-search-result':
                openSearchResult(element.dataset.resultType, {
                    id: parseNumber(element.dataset.resultId),
                    index: parseNumber(element.dataset.resultIndex),
                    topicKey: element.dataset.resultTopic || '',
                    value: element.dataset.resultValue || ''
                });
                break;
            case 'select-answer': {
                const questionId = parseNumber(element.dataset.questionId);
                const optionIndex = parseNumber(element.dataset.optionIndex);
                if (questionId !== null && optionIndex !== null) {
                    selectAnswer(questionId, optionIndex);
                }
                break;
            }
            case 'go-to-question': {
                const index = parseNumber(element.dataset.questionIndex);
                if (index !== null) goToQuestion(index);
                break;
            }
            default:
                break;
        }
    }

    function bindDelegatedActions() {
        document.addEventListener('click', (event) => {
            const actionElement = event.target.closest('[data-action]');
            if (actionElement) {
                handleAction(actionElement);
                return;
            }

            if (event.target.id === 'searchOverlay') {
                closeSearch();
            }

            if (event.target.id === 'studyModal') {
                closeStudyModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            const actionElement = event.target.closest('[data-action]');
            if (!actionElement) return;

            const tagName = actionElement.tagName;
            if (tagName === 'BUTTON' || tagName === 'A' || tagName === 'INPUT' || tagName === 'SELECT') return;

            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleAction(actionElement);
            }
        });
    }

    function bindInputEvents() {
        document.getElementById('globalSearchInput')?.addEventListener('input', (event) => {
            performSearch(event.target.value);
        });

        document.getElementById('fcTopicSelect')?.addEventListener('change', loadFlashcards);
        document.getElementById('spacedRepToggle')?.addEventListener('change', toggleSpacedRepetition);
        document.getElementById('importFile')?.addEventListener('change', importProgress);
        document.getElementById('noteFilterCategory')?.addEventListener('change', renderNotesList);
        document.getElementById('formulaTopicFilter')?.addEventListener('change', renderFormulaSheet);

        ['focusDuration', 'breakDuration', 'longBreakDuration'].forEach((id) => {
            document.getElementById(id)?.addEventListener('change', updatePomodoroSettings);
        });

        document.getElementById('hoursPerDay')?.addEventListener('change', generateSchedule);

        const syncExamAndSchedule = (event) => {
            setExamDate(event.target.value || '');
            generateSchedule();
        };

        document.getElementById('examDateInput')?.addEventListener('change', syncExamAndSchedule);
        document.getElementById('dashboardExamDate')?.addEventListener('change', syncExamAndSchedule);
    }

    function updateInstallButton() {
        const installButton = document.getElementById('installAppBtn');
        if (!installButton) return;

        const isInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
        installButton.hidden = isInstalled || !deferredInstallPrompt;
    }

    function promptInstall() {
        if (!deferredInstallPrompt) {
            showToast('Install prompt is not available yet.', 'info');
            return;
        }

        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.finally(() => {
            deferredInstallPrompt = null;
            updateInstallButton();
        });
    }

    function setupPwaSignals() {
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault();
            deferredInstallPrompt = event;
            updateInstallButton();
        });

        window.addEventListener('appinstalled', () => {
            deferredInstallPrompt = null;
            updateInstallButton();
            showToast('App installed successfully.', 'success');
        });

        window.addEventListener('offline', () => {
            showToast('You are offline. Cached content remains available.', 'warning');
        });

        window.addEventListener('online', () => {
            showToast('Back online.', 'success');
        });

        updateInstallButton();
    }

    function initializeAppState() {
        initTheme();
        initNavigation();
        initStudyTabs();
        initInterviewTabs();
        initResourceTabs();
        initKeyboardShortcuts();
        initScrollToTop();

        updateDashboard();
        renderProgressPage();
        renderNotesList();
        renderBookmarksList();
        renderInterviewContent('technical');
        renderVideoGrid();
        renderLinksGrid();
        renderTopicResourceGrid();
        renderFormulaGrid();
        renderFormulaSheet();
        renderCustomFcList();
        loadFlashcards();
        updatePomodoroSettings();
        updatePomodoroDisplay();
        renderAnalytics();

        updateStreakBadge();
        syncExamDateInputs();
        updateCountdown();

        const hoursInput = document.getElementById('hoursPerDay');
        if (hoursInput) {
            hoursInput.value = state.progress.scheduleHoursPerDay || 4;
        }

        generateSchedule();
    }

    function bootstrapApp() {
        if (bootstrapped) return;
        bootstrapped = true;
        bindDelegatedActions();
        bindInputEvents();
        setupPwaSignals();
        initializeAppState();
    }

    window.bootstrapApp = bootstrapApp;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapApp, { once: true });
    } else {
        bootstrapApp();
    }
})();