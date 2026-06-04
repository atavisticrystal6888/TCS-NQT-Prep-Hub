const fs = require('fs');
const path = require('path');
const vm = require('vm');

const APP_DIR = path.join(__dirname, '..', 'tcs-nqt-prep-app');
const TODAY = new Date();
const MAX_REVIEW_AGE_DAYS = 540;

function read(fileName) {
  return fs.readFileSync(path.join(APP_DIR, fileName), 'utf8');
}

function runClassicScript(context, fileName, exportedNames = []) {
  const exportsCode = exportedNames
    .map((name) => `this.${name} = typeof ${name} !== 'undefined' ? ${name} : this.${name};`)
    .join('\n');
  const source = `${read(fileName)}\n${exportsCode}`;
  vm.runInContext(source, context, { filename: fileName });
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/₹/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function daysBetween(left, right) {
  return Math.round((left.getTime() - right.getTime()) / 86400000);
}

function loadAppContent() {
  const sandbox = {
    console,
    window: {},
    globalThis: {}
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);

  runClassicScript(sandbox, 'questions-data.js', ['QUESTION_BANK', 'TOPIC_META', 'FLASHCARD_DATA']);
  runClassicScript(sandbox, 'study-data.js', ['STUDY_MATERIALS', 'INTERVIEW_DATA']);
  vm.runInContext(read('content-model.js'), sandbox, { filename: 'content-model.js' });

  if (!sandbox.AppContent) {
    throw new Error('Expected AppContent to be available after loading content-model.js');
  }

  return sandbox;
}

function main() {
  const sandbox = loadAppContent();
  const questions = sandbox.AppContent.getQuestionBank();
  const topicMeta = sandbox.TOPIC_META || {};
  const freshness = sandbox.AppContent.getFreshnessSummary();
  const errors = [];
  const warnings = [];
  const duplicateIds = new Set();
  const seenIds = new Set();

  questions.forEach((question) => {
    if (seenIds.has(question.id)) duplicateIds.add(question.id);
    seenIds.add(question.id);

    if (!Array.isArray(question.options) || question.options.length !== 4) {
      errors.push(`Question ${question.id}: expected exactly 4 options.`);
    }

    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
      errors.push(`Question ${question.id}: invalid answer index ${question.answer}.`);
    }

    if (!question.explanation || !String(question.explanation).trim()) {
      errors.push(`Question ${question.id}: explanation is missing.`);
    }

    if (!topicMeta[question.topic]) {
      errors.push(`Question ${question.id}: unknown topic '${question.topic}'.`);
    }

    if (!['easy', 'medium', 'hard'].includes(question.difficulty)) {
      errors.push(`Question ${question.id}: unexpected difficulty '${question.difficulty}'.`);
    }

    if (!question.meta || !question.meta.reviewedAt || !question.meta.confidence || !Array.isArray(question.meta.examVariant)) {
      errors.push(`Question ${question.id}: hydrated metadata is incomplete.`);
    }

    const reviewedAt = parseDate(question.meta?.reviewedAt);
    if (!reviewedAt) {
      errors.push(`Question ${question.id}: invalid reviewedAt date '${question.meta?.reviewedAt}'.`);
    } else if (daysBetween(TODAY, reviewedAt) > MAX_REVIEW_AGE_DAYS) {
      warnings.push(`Question ${question.id}: reviewedAt ${question.meta.reviewedAt} is older than ${MAX_REVIEW_AGE_DAYS} days.`);
    }

    const normalizedExplanation = normalizeText(question.explanation);
    const optionHits = question.options
      .map((option, index) => ({ index, option, normalized: normalizeText(option) }))
      .filter((entry) => entry.normalized.length >= 3 && normalizedExplanation.includes(entry.normalized));

    if (optionHits.length === 1 && optionHits[0].index !== question.answer) {
      warnings.push(`Question ${question.id}: explanation mentions '${optionHits[0].option}' but answer points to '${question.options[question.answer]}'.`);
    }
  });

  if (duplicateIds.size > 0) {
    errors.push(`Duplicate question IDs found: ${Array.from(duplicateIds).join(', ')}`);
  }

  Object.keys(sandbox.STUDY_MATERIALS || {}).forEach((key) => {
    const topic = sandbox.AppContent.getStudyTopic(key);
    if (!topic?.meta?.reviewedAt || !topic?.meta?.confidence) {
      errors.push(`Study topic '${key}' is missing metadata.`);
    }
  });

  Object.keys(sandbox.INTERVIEW_DATA || {}).forEach((key) => {
    const round = sandbox.AppContent.getInterviewRound(key);
    if (!round?.meta?.reviewedAt || !round?.meta?.confidence) {
      errors.push(`Interview round '${key}' is missing metadata.`);
    }
  });

  if (!freshness?.version || !Array.isArray(freshness?.sections) || freshness.sections.length === 0) {
    errors.push('Freshness summary is incomplete.');
  }

  console.log(`Validated ${questions.length} questions, ${Object.keys(sandbox.STUDY_MATERIALS || {}).length} study topics, and ${Object.keys(sandbox.INTERVIEW_DATA || {}).length} interview rounds.`);

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }

  if (errors.length > 0) {
    console.error('\nErrors:');
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log('Content validation passed.');
}

main();
