const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const APP_DIR = path.join(__dirname, '..', 'tcs-nqt-prep-app');

function read(fileName) {
  return fs.readFileSync(path.join(APP_DIR, fileName), 'utf8');
}

function createQuizModelSandbox() {
  const sandbox = { console, window: {}, globalThis: {} };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(read('quiz-model.js'), sandbox, { filename: 'quiz-model.js' });
  return sandbox;
}

function createAppCoreSandbox() {
  const storage = new Map();
  const sandbox = {
    console,
    window: {
      setInterval: () => 0,
      clearInterval: () => {},
      setTimeout: () => 0,
      clearTimeout: () => {}
    },
    document: {
      getElementById: () => null,
      body: { appendChild: () => {} },
      createElement: () => ({
        setAttribute() {},
        appendChild() {},
        classList: { add() {}, remove() {} }
      })
    },
    localStorage: {
      getItem: (key) => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: (key) => storage.delete(key)
    },
    QuizModel: {
      buildQuizSnapshot: (quiz) => ({
        questionIds: quiz.questions.map((question) => question.id),
        currentIndex: quiz.currentIndex,
        answers: { ...quiz.answers },
        flaggedIds: [...quiz.flaggedIds],
        confidence: { ...quiz.confidence },
        startTime: quiz.startTime,
        timeLimit: quiz.timeLimit,
        timeRemaining: quiz.timeRemaining,
        instantFeedback: quiz.instantFeedback,
        mode: quiz.mode,
        examVariant: quiz.examVariant,
        reviewMode: quiz.reviewMode,
        presetKey: quiz.presetKey
      })
    },
    formatTime: (seconds) => `${seconds}s`
  };
  sandbox.window.document = sandbox.document;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(read('app-core.js'), sandbox, { filename: 'app-core.js' });
  return sandbox;
}

function test(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

const quizSandbox = createQuizModelSandbox();
const QuizModel = quizSandbox.QuizModel;
const coreSandbox = createAppCoreSandbox();

test('getWeakTopicKeys returns weak and untested topics when requested', () => {
  const weakTopics = QuizModel.getWeakTopicKeys(
    {
      topicStats: {
        quantitative: { attempted: 10, correct: 4 },
        verbal: { attempted: 8, correct: 7 }
      }
    },
    { quantitative: {}, verbal: {}, programming: {} },
    70,
    true
  );

  assert.deepStrictEqual(plain(weakTopics), ['quantitative', 'programming']);
});

test('buildAdaptiveQuestionPool prioritizes weak-topic and wrong-answer questions', () => {
  const bank = [
    { id: 1, topic: 'quantitative', difficulty: 'medium', meta: { examVariant: ['all'] } },
    { id: 2, topic: 'quantitative', difficulty: 'hard', meta: { examVariant: ['all'] } },
    { id: 3, topic: 'verbal', difficulty: 'easy', meta: { examVariant: ['all'] } }
  ];
  const progress = {
    topicStats: {
      quantitative: { attempted: 5, correct: 1 },
      verbal: { attempted: 5, correct: 5 }
    },
    questionStats: {
      2: { wrong: 2, lastConfidence: 'low' }
    }
  };

  const pool = QuizModel.buildAdaptiveQuestionPool(bank, progress, {
    selectedTopics: ['quantitative', 'verbal'],
    numQuestions: 2,
    difficulty: 'mixed',
    examVariant: 'all'
  });

  assert.strictEqual(pool.length, 2);
  assert.strictEqual(pool[0].id, 2);
  assert.strictEqual(pool[1].topic, 'quantitative');
});

test('summarizeQuiz returns correct counts, wrong ids, and low-confidence ids', () => {
  const summary = QuizModel.summarizeQuiz(
    [
      { id: 10, topic: 'quantitative', answer: 1 },
      { id: 11, topic: 'verbal', answer: 0 },
      { id: 12, topic: 'verbal', answer: 2 }
    ],
    { 10: 1, 11: 2 },
    { confidence: { 10: 'high', 11: 'low', 12: 'low' }, flaggedIds: [11] }
  );

  assert.deepStrictEqual(
    {
      correct: summary.correct,
      wrong: summary.wrong,
      skipped: summary.skipped,
      percent: summary.percent,
      wrongQuestionIds: plain(summary.wrongQuestionIds),
      lowConfidenceQuestionIds: plain(summary.lowConfidenceQuestionIds),
      flaggedQuestionIds: plain(summary.flaggedQuestionIds)
    },
    {
      correct: 1,
      wrong: 1,
      skipped: 1,
      percent: 33,
      wrongQuestionIds: [11],
      lowConfidenceQuestionIds: [11, 12],
      flaggedQuestionIds: [11]
    }
  );
});

test('buildRetryPool preserves requested order and limit', () => {
  const pool = QuizModel.buildRetryPool(
    [
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 }
    ],
    [8, 6, 999, 5],
    2
  );

  assert.deepStrictEqual(plain(pool.map((question) => question.id)), [8, 6]);
});

test('restoreQuizSnapshot rebuilds a quiz state from IDs', () => {
  const restored = QuizModel.restoreQuizSnapshot(
    {
      questionIds: [2, 1],
      currentIndex: 1,
      answers: { 2: 3 },
      flaggedIds: [1],
      confidence: { 1: 'medium' },
      timeLimit: 600,
      timeRemaining: 240,
      instantFeedback: false,
      mode: 'adaptive',
      examVariant: 'it',
      reviewMode: 'explanation-first',
      presetKey: 'adaptive'
    },
    [
      { id: 1, topic: 'a' },
      { id: 2, topic: 'b' }
    ]
  );

  assert.deepStrictEqual(plain(restored.questions.map((question) => question.id)), [2, 1]);
  assert.strictEqual(restored.currentIndex, 1);
  assert.strictEqual(restored.mode, 'adaptive');
  assert.strictEqual(restored.timeRemaining, 240);
});

test('normalizeProgress fills question stats defaults and deduplicates review queues', () => {
  const progress = coreSandbox.normalizeProgress({
    questionStats: { 1: { seen: 2, wrong: 1 } },
    mistakeQuestionIds: [1, '2', 1],
    flaggedQuestionIds: ['3', 3],
    lastSession: { type: 'quiz', snapshot: { questionIds: [7, 8] } }
  });

  assert.deepStrictEqual(plain(progress.mistakeQuestionIds), [1, 2]);
  assert.deepStrictEqual(plain(progress.flaggedQuestionIds), [3]);
  assert.strictEqual(progress.questionStats['1'].lastConfidence, 'unrated');
  assert.deepStrictEqual(plain(progress.lastSession.snapshot.questionIds), [7, 8]);
});

if (!process.exitCode) {
  console.log('All logic tests passed.');
}
