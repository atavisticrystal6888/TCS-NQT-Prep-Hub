<div align="center">

# 📚 TCS NQT Prep Hub

### Your Complete TCS National Qualifier Test Preparation Kit

**424+ Practice Questions · 10 Previous Papers · Interactive PWA · Interview Prep**

[![GitHub Pages](https://img.shields.io/badge/Live%20App-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://atavisticrystal6888.github.io/TCS-NQT-Prep-Hub/)
![Questions](https://img.shields.io/badge/Questions-424+-green?style=for-the-badge)
![Papers](https://img.shields.io/badge/Previous%20Papers-10-orange?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-purple?style=for-the-badge)

</div>

---

## 🎯 What Is This?

A **free, open-source, all-in-one** preparation platform for the **TCS National Qualifier Test (NQT)** — built for freshers and graduates targeting TCS Ninja, Digital, and Prime roles.

This repo contains:
- **74 verified Previous Year Questions** from actual 2024 TCS NQT exam shifts
- **300 aptitude & reasoning practice questions** with answers
- **50 beginner coding problems** with solutions
- **10 full previous papers** for mock practice
- **An installable Progressive Web App** with quizzes, flashcards, analytics, study timer, and more
- **HR & interview preparation** material for all three TCS rounds

> **No sign-ups. No paywalls. No ads. Just prep.**

---

## 📋 TCS NQT Exam Pattern

| Section | Questions | Duration | Key Topics |
|:--------|:---------:|:--------:|:-----------|
| Numerical Ability | 26 | 40 min | Speed & Distance, Profit & Loss, Ratios, Probability, SI/CI |
| Verbal Ability | 24 | 30 min | Grammar, Vocabulary, Reading Comprehension, Cloze Tests |
| Reasoning Ability | 30 | 50 min | Series, Coding-Decoding, Blood Relations, Puzzles, Syllogisms |
| Programming Logic | 10 | 15 min | Pseudocode, Output Prediction, Data Structures |
| Coding (Advanced) | 2 | 15 min | Implementation in C / Java / Python |
| **Total** | **92** | **150 min** | |

> ✅ No negative marking &nbsp;·&nbsp; ✅ Online proctored &nbsp;·&nbsp; ✅ Score valid for 2 years

---

## 🗂️ Repository Structure

```
TCS-NQT-PYQ-QUESTIONS/
│
├── index.html                          # Redirect to the web app
├── questions.md                        # 74 verified PYQs (2024 shifts)
├── README.md
│
├── materials/                          # Study resources & reference material
│   ├── pyq-300.md                      # 300 aptitude + reasoning questions
│   ├── coding-questions-50.md          # 50 beginner coding problems
│   ├── dsa-patterns.md                 # Key DSA patterns with code (Java/C++/Python)
│   ├── hr-questions.md                 # HR round sample Q&A
│   ├── solved-paper-2024-morning.md    # 2024 morning slot solved paper
│   └── previous-papers/               # 10 full previous year papers
│       ├── paper-01.md
│       ├── paper-02.md
│       ├── ...
│       └── paper-10.md
│
└── tcs-nqt-prep-app/                  # Interactive PWA
    ├── index.html                      # App shell
    ├── app.js                          # Core application logic
    ├── questions-data.js               # Quiz question bank
    ├── study-data.js                   # Study material data
    ├── styles.css                      # UI styles with dark mode
    ├── manifest.json                   # PWA manifest
    └── sw.js                           # Service worker for offline support
```

---

## 📖 Study Materials

### Verified PYQs — [`questions.md`](questions.md)

74 actual TCS NQT questions from 2024 exam shifts, each tagged with difficulty (Easy / Medium / Hard) and complete with:
- Problem statement and constraints
- Sample input/output
- Detailed explanations
- Solution hints and approaches

**Topics covered:** Arrays, Strings, Bit Manipulation, Dynamic Programming, Graph Algorithms, Math, Greedy, and more.

### 300 Aptitude Questions — [`materials/pyq-300.md`](materials/pyq-300.md)

Organized by section:
- **Quantitative Aptitude** — Percentages, Speed-Distance-Time, Ratio & Proportion, Profit & Loss, Simple & Compound Interest, Work & Time
- **Logical Reasoning** — Number Series, Coding-Decoding, Blood Relations, Syllogisms, Odd One Out, Arrangements

### Coding Practice — [`materials/coding-questions-50.md`](materials/coding-questions-50.md)

50 fundamental programming problems: Even/Odd, Prime Check, Factorial, Fibonacci, Palindrome, Armstrong Numbers, Sorting, Searching, and more.

### DSA Patterns — [`materials/dsa-patterns.md`](materials/dsa-patterns.md)

Essential DSA patterns that appear frequently in TCS NQT coding rounds, with implementations in Java, C++, and Python.

### HR & Interview Prep — [`materials/hr-questions.md`](materials/hr-questions.md)

Sample answers for 12+ common HR questions: "Tell me about yourself", "Why TCS?", "Strengths & Weaknesses", relocation expectations, ILP details, and project discussions.

### Previous Papers — [`materials/previous-papers/`](materials/previous-papers/)

10 complete previous year papers covering Numerical Ability, Verbal, Reasoning, and Programming sections.

### Solved 2024 Paper — [`materials/solved-paper-2024-morning.md`](materials/solved-paper-2024-morning.md)

Step-by-step solutions for the 2024 morning slot exam including revenue calculations, ratio problems, loan installments, and nth root computations.

---

## 💻 TCS NQT Prep App (PWA)

The repo ships with a fully functional **Progressive Web App** you can install on your phone or desktop and use offline.

### Features

| Feature | Description |
|:--------|:------------|
| **Dashboard** | Track questions attempted, accuracy, study time, tests completed, and weak areas at a glance |
| **Take a Test** | Custom quiz builder — pick topics, question count (10/25/50/100), difficulty, and time limits. Quick-start presets for Quant, Reasoning, Verbal, Programming, and Full Mock |
| **Study Materials** | 8 core topics with 45+ formulas and shortcuts: Quantitative Aptitude, Logical Reasoning, Verbal Ability, Programming Logic, DBMS & SQL, Operating Systems, Computer Networks, System Design |
| **Interview Prep** | Structured prep for all 3 TCS rounds: Technical, Managerial, and HR |
| **Flashcards** | Spaced repetition across 6 categories with difficulty ratings. Create your own custom cards |
| **Notes** | Categorized note-taking (General, Quant, Verbal, Reasoning, Programming, Formulas, Mistakes) |
| **Pomodoro Timer** | Built-in study timer with configurable work/break intervals (25/5/15 min) and streak tracking |
| **Bookmarks** | Save important questions for quick review |
| **Progress Analytics** | Performance trends, topic mastery levels, test history, export/import progress |
| **Resources** | Curated YouTube playlists, practice links, recommended books, and a 7-day prep plan |
| **Know TCS** | Company facts, salary breakdowns (Ninja/Digital/Prime), ILP details, and hiring process overview |
| **Dark Mode** | Eye-friendly dark theme for late-night study sessions |

### Tech Stack

- **Vanilla JavaScript (ES6+)** — zero dependencies, fast load
- **HTML5 + CSS3** — responsive design, glass-morphism UI
- **Service Worker** — full offline support
- **localStorage** — persistent progress without a backend
- **PWA Manifest** — installable on any device

---

## 🚀 Getting Started

### Use the Web App Online

Visit the [live GitHub Pages site](https://atavisticrystal6888.github.io/TCS-NQT-Prep-Hub/) and start practicing immediately. Click **"Install"** in your browser to add it to your home screen.

### Use Locally

```bash
# Clone the repo
git clone https://github.com/atavisticrystal6888/TCS-NQT-Prep-Hub.git

# Open in browser
# Simply open index.html — no build tools or servers needed
```

### Study from Markdown Files

All questions and study materials are in plain Markdown — read them directly on GitHub, in VS Code, or any text editor.

---

## 📅 Suggested 7-Day Prep Plan

| Day | Focus Area | What to Do |
|:---:|:-----------|:-----------|
| 1 | Quantitative Aptitude | Solve 50+ problems on percentages, ratios, SI/CI from `pyq-300.md` |
| 2 | Quantitative Aptitude | Speed-Distance, Profit-Loss, Work-Time. Review formula sheet |
| 3 | Logical Reasoning | 30+ questions on series, coding-decoding, blood relations |
| 4 | Verbal Ability | Learn 50 new vocabulary words. Practice RC passages |
| 5 | Programming & DBMS | Pseudocode practice, SQL basics, `coding-questions-50.md` |
| 6 | Coding Practice | Solve 10–15 problems from `questions.md`. Review DSA patterns |
| 7 | Full Mock & Revision | Take a full mock test in the app. Revise weak areas |

---

## 💰 TCS NQT Roles & Packages

| Role | Package (CTC) | NQT Score Required |
|:-----|:--------------|:-------------------|
| Ninja | ₹3.36 LPA | Qualifying score |
| Digital | ₹7–9 LPA | Higher score threshold |
| Prime | ₹9–11+ LPA | Top percentile |

---

## 📚 Recommended Resources

- **R.S. Aggarwal** — Quantitative Aptitude & Reasoning
- **Word Power Made Easy** by Norman Lewis — Vocabulary building
- **GeeksforGeeks** — Programming & DSA reference
- **PrepInsta** — TCS NQT specific practice
- **Striver's SDE Sheet** — Coding round preparation

---

## 🤝 Contributing

Contributions are welcome! You can help by:

1. Adding new verified PYQs from recent exam shifts
2. Improving solutions or adding alternative approaches
3. Fixing errors in existing questions
4. Adding more previous year papers
5. Enhancing the web app with new features

Fork the repo, create a branch, and submit a pull request.

---

## ⚖️ License

This project is open source and available for educational purposes. All questions are sourced from publicly available previous year papers and community contributions.

---

## ⭐ Support

If this repo helped your preparation, consider giving it a **star** — it helps others discover it too.

<div align="center">

**Good luck with your TCS NQT! 🎯**

</div>
