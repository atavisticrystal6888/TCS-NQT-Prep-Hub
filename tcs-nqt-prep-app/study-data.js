// ==========================================
// TCS NQT PREP HUB — STUDY MATERIALS DATA
// ==========================================

const STUDY_MATERIALS = {
    quant: {
        title: "Quantitative Aptitude",
        sections: [
            {
                heading: "Number System",
                content: `
<h4>Key Concepts</h4>
<ul>
<li><strong>Natural Numbers:</strong> 1, 2, 3, ... (counting numbers)</li>
<li><strong>Whole Numbers:</strong> 0, 1, 2, 3, ... (natural + 0)</li>
<li><strong>Integers:</strong> ..., -2, -1, 0, 1, 2, ... (whole + negatives)</li>
<li><strong>Divisibility Rules:</strong>
  <br>• By 2: Last digit even
  <br>• By 3: Sum of digits divisible by 3
  <br>• By 4: Last 2 digits divisible by 4
  <br>• By 5: Last digit 0 or 5
  <br>• By 6: Divisible by both 2 and 3
  <br>• By 8: Last 3 digits divisible by 8
  <br>• By 9: Sum of digits divisible by 9
  <br>• By 11: Difference of sums of alternate digits divisible by 11
</li>
<li><strong>HCF & LCM:</strong> HCF × LCM = Product of two numbers</li>
</ul>`
            },
            {
                heading: "Percentages & Profit/Loss",
                content: `
<h4>Percentage Formulas</h4>
<ul>
<li>x% of y = (x/100) × y</li>
<li>If A is x% more than B: A = B × (100+x)/100</li>
<li>If A is x% less than B: A = B × (100-x)/100</li>
<li>Successive changes: a% then b% = (a + b + ab/100)%</li>
<li>If price increases by x%, reduce consumption by (x/(100+x))×100% to maintain expenditure</li>
</ul>
<h4>Profit & Loss</h4>
<ul>
<li>Profit = SP - CP</li>
<li>Loss = CP - SP</li>
<li>Profit% = (Profit/CP) × 100</li>
<li>SP = CP × (100 + Profit%)/100</li>
<li>If MP = Marked Price: Discount% = ((MP-SP)/MP) × 100</li>
</ul>`
            },
            {
                heading: "Speed, Time & Distance",
                content: `
<h4>Core Formulas</h4>
<ul>
<li>Speed = Distance/Time</li>
<li>1 km/h = 5/18 m/s</li>
<li>1 m/s = 18/5 km/h</li>
<li>Average Speed (same distance) = 2ab/(a+b)</li>
<li><strong>Trains:</strong>
  <br>• Time to cross pole = Length of train / Speed
  <br>• Time to cross platform = (Train length + Platform length) / Speed
  <br>• Opposite direction: Relative speed = S1 + S2
  <br>• Same direction: Relative speed = |S1 - S2|</li>
<li><strong>Boats:</strong>
  <br>• Downstream speed = Boat + Stream
  <br>• Upstream speed = Boat - Stream
  <br>• Speed of boat = (D+U)/2, Speed of stream = (D-U)/2</li>
</ul>`
            },
            {
                heading: "Time & Work",
                content: `
<h4>Key Formulas</h4>
<ul>
<li>If A completes work in 'a' days → rate = 1/a per day</li>
<li>A & B together: time = ab/(a+b)</li>
<li>If A is x times as efficient as B: Time ratio = 1:x</li>
<li><strong>Pipes & Cisterns:</strong> Same as work problems
  <br>• Fill pipe: positive rate (+1/a)
  <br>• Drain pipe: negative rate (-1/b)</li>
</ul>
<h4>Worked Examples</h4>
<ul>
<li>A: 10 days, B: 15 days → Together = 10×15/(10+15) = 6 days</li>
<li>A: 12 days, B: 18 days, C: 36 days → Combined rate = 1/12 + 1/18 + 1/36 = 6/36 = 1/6 → 6 days</li>
</ul>`
            },
            {
                heading: "Simple & Compound Interest",
                content: `
<h4>SI vs CI</h4>
<ul>
<li><strong>SI</strong> = (P × R × T)/100, Amount = P + SI</li>
<li><strong>CI</strong>: A = P(1 + R/100)^T, CI = A - P</li>
<li>Difference (CI - SI) for 2 years = P(R/100)²</li>
<li>Effective rate for CI (2 years) = 2R + R²/100</li>
</ul>`
            },
            {
                heading: "Ratio, Proportion & Mixtures",
                content: `
<h4>Ratio & Proportion</h4>
<ul>
<li>A:B = a:b means A/B = a/b → A = ka, B = kb</li>
<li>Duplicate ratio of a:b = a²:b²</li>
<li>Sub-duplicate ratio of a:b = √a : √b</li>
<li>Compound ratio of a:b and c:d = ac:bd</li>
<li>If A:B = 2:3 and B:C = 4:5 → Make B common → A:B:C = 8:12:15</li>
</ul>
<h4>Alligation & Mixtures</h4>
<ul>
<li>Alligation Rule: Ratio = (Dearer − Mean) : (Mean − Cheaper)</li>
<li>Replacement: After n operations, pure = V × (1 − x/V)^n</li>
<li>Example: 20L milk, 4L replaced each time, after 3 times → 20 × (16/20)³ = 10.24L pure milk</li>
</ul>`
            },
            {
                heading: "Permutation, Combination & Probability",
                content: `
<h4>Permutations (Order matters)</h4>
<ul>
<li>nPr = n! / (n−r)!</li>
<li>Circular permutation = (n−1)!</li>
<li>Arrangements with repetition: n!/(p!×q!) for p identical, q identical items</li>
</ul>
<h4>Combinations (Order doesn't matter)</h4>
<ul>
<li>nCr = n! / [r!(n−r)!]</li>
<li>nC0 = nCn = 1, nC1 = n</li>
<li>nCr = nC(n−r)</li>
</ul>
<h4>Probability</h4>
<ul>
<li>P(E) = Favorable outcomes / Total outcomes (0 ≤ P ≤ 1)</li>
<li>P(A or B) = P(A) + P(B) − P(A∩B)</li>
<li>P(A and B) = P(A) × P(B) [if independent]</li>
<li>P(not A) = 1 − P(A)</li>
<li>Dice: P(any face) = 1/6. Two dice: total outcomes = 36</li>
<li>Cards: P(King) = 4/52 = 1/13. P(Red) = 26/52 = 1/2</li>
</ul>`
            },
            {
                heading: "Geometry & Mensuration",
                content: `
<h4>2D Shapes</h4>
<ul>
<li><strong>Circle:</strong> Area = πr², Circumference = 2πr</li>
<li><strong>Triangle:</strong> Area = ½bh, Heron's = √[s(s−a)(s−b)(s−c)] where s=(a+b+c)/2</li>
<li><strong>Equilateral Triangle:</strong> Area = (√3/4)a², Height = (√3/2)a</li>
<li><strong>Rectangle:</strong> Area = l×b, Diagonal = √(l²+b²)</li>
<li><strong>Square:</strong> Area = a², Diagonal = a√2</li>
<li><strong>Trapezium:</strong> Area = ½(a+b)×h</li>
<li><strong>Rhombus:</strong> Area = ½×d₁×d₂</li>
</ul>
<h4>3D Solids</h4>
<ul>
<li><strong>Cube:</strong> Volume = a³, TSA = 6a², Diagonal = a√3</li>
<li><strong>Cuboid:</strong> Volume = l×b×h, TSA = 2(lb+bh+lh), Diagonal = √(l²+b²+h²)</li>
<li><strong>Cylinder:</strong> Volume = πr²h, CSA = 2πrh, TSA = 2πr(r+h)</li>
<li><strong>Cone:</strong> Volume = ⅓πr²h, Slant = √(r²+h²), CSA = πrl</li>
<li><strong>Sphere:</strong> Volume = 4/3πr³, SA = 4πr²</li>
<li><strong>Hemisphere:</strong> Volume = 2/3πr³, TSA = 3πr²</li>
</ul>`
            },
            {
                heading: "Number Properties & Algebra",
                content: `
<h4>Useful Algebraic Identities</h4>
<ul>
<li>(a+b)² = a² + 2ab + b²</li>
<li>(a−b)² = a² − 2ab + b²</li>
<li>a² − b² = (a+b)(a−b)</li>
<li>(a+b)³ = a³ + 3a²b + 3ab² + b³</li>
<li>a³ + b³ = (a+b)(a²−ab+b²)</li>
<li>a³ − b³ = (a−b)(a²+ab+b²)</li>
</ul>
<h4>Number Properties</h4>
<ul>
<li>Sum of first n natural numbers = n(n+1)/2</li>
<li>Sum of first n squares = n(n+1)(2n+1)/6</li>
<li>Sum of first n cubes = [n(n+1)/2]²</li>
<li>Number of factors of N = product of (exponent+1) for each prime factor</li>
<li>Euler's totient φ(n) = n × ∏(1 − 1/p) for each prime p dividing n</li>
<li>Remainder theorem: f(a) gives remainder when f(x) is divided by (x−a)</li>
</ul>`
            }
        ]
    },

    reasoning: {
        title: "Logical Reasoning",
        sections: [
            {
                heading: "Number & Letter Series",
                content: `
<h4>Common Patterns</h4>
<ul>
<li>Arithmetic: constant difference (2, 5, 8, 11 → +3)</li>
<li>Geometric: constant ratio (2, 6, 18, 54 → ×3)</li>
<li>Squares/Cubes: 1, 4, 9, 16, 25 (n²) or 1, 8, 27, 64 (n³)</li>
<li>Fibonacci-like: each = sum of previous two</li>
<li>Mixed: alternating operations (+2, ×2, +2, ×2)</li>
<li>Letter series: A=1, B=2... Z=26. Look for +1, +2, -1, skip patterns</li>
</ul>
<h4>Strategy</h4>
<p>1. Find differences between consecutive terms<br>
2. If differences form a pattern, it's a second-order series<br>
3. Check if terms are squares, cubes, primes, or factorials<br>
4. Look for alternating patterns</p>`
            },
            {
                heading: "Coding-Decoding",
                content: `
<h4>Types</h4>
<ul>
<li><strong>Letter shifting:</strong> Each letter shifted by fixed positions (A+1=B, B+1=C)</li>
<li><strong>Reverse coding:</strong> Word reversed then shifted</li>
<li><strong>Number coding:</strong> Letters assigned numbers (A=1 or A=26)</li>
<li><strong>Symbol coding:</strong> Letters replaced with symbols based on pattern</li>
</ul>
<h4>Strategy</h4>
<p>Compare coded word with original letter by letter. Find the shift/pattern for each position.</p>`
            },
            {
                heading: "Blood Relations",
                content: `
<h4>Key Relationships</h4>
<ul>
<li>Father's/Mother's son = Brother</li>
<li>Father's/Mother's daughter = Sister</li>
<li>Father's brother = Uncle; Father's sister = Aunt</li>
<li>Brother's/Sister's son = Nephew; daughter = Niece</li>
<li>Husband's/Wife's father = Father-in-law</li>
</ul>
<h4>Strategy</h4>
<p>Draw a family tree diagram. Use ↑ for parent, ↓ for child, — for spouse, / for sibling.</p>`
            },
            {
                heading: "Syllogisms",
                content: `
<h4>Rules</h4>
<ul>
<li>"All A are B" → Some B are A (converse true)</li>
<li>"Some A are B" → Some B are A (converse true)</li>
<li>"No A are B" → No B are A (converse true)</li>
<li>"Some A are not B" → Cannot conclude anything about B relative to A</li>
</ul>
<h4>Strategy: Venn Diagrams</h4>
<p>Draw circles for each category. Use ALL possible valid diagrams. A conclusion is true only if it holds in ALL valid diagrams.</p>`
            },
            {
                heading: "Direction Sense & Distance",
                content: `
<h4>Key Points</h4>
<ul>
<li>Draw starting point, then trace each turn and distance</li>
<li>Compass: North (up), South (down), East (right), West (left)</li>
<li>Right turn from North → East → South → West → North</li>
<li>Left turn from North → West → South → East → North</li>
<li>Final distance: Use Pythagorean theorem √(x² + y²)</li>
</ul>
<h4>Common Tricks</h4>
<ul>
<li>"Opposite direction" → add 180°</li>
<li>Shadow-based: Morning → West side shadow, Evening → East side</li>
<li>If facing sunrise → facing East</li>
</ul>`
            },
            {
                heading: "Clocks & Calendars",
                content: `
<h4>Clock Problems</h4>
<ul>
<li>Hour hand speed: 0.5°/minute (360° in 12 hrs)</li>
<li>Minute hand speed: 6°/minute (360° in 60 min)</li>
<li>Relative speed: 5.5°/minute</li>
<li>Angle at h:m = |30h − 5.5m|° (if > 180°, use 360° − angle)</li>
<li>Hands overlap 11 times in 12 hours (not 12!)</li>
<li>Hands at right angle (90°): 22 times in 12 hours</li>
</ul>
<h4>Calendar</h4>
<ul>
<li>Odd days: Mon=1, Tue=2 … Sun=0</li>
<li>Normal year = 1 odd day, Leap year = 2 odd days</li>
<li>Leap year: divisible by 4 (but NOT 100, unless also 400)</li>
<li>100 years = 5 odd days, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0</li>
</ul>`
            },
            {
                heading: "Seating Arrangement",
                content: `
<h4>Types</h4>
<ul>
<li><strong>Linear (row):</strong> People in a line, face same/opposite direction</li>
<li><strong>Circular:</strong> People around a table, clockwise/anti-clockwise</li>
<li><strong>Floor/Building:</strong> People on different floors (bottom = 1)</li>
</ul>
<h4>Strategy</h4>
<ul>
<li>Read ALL clues first. Identify fixed/definite positions first.</li>
<li>"Immediate left/right" = adjacent; "left/right" could be any position on that side</li>
<li>In circular: "to the left" = counter-clockwise; "to the right" = clockwise</li>
<li>Make multiple cases if needed, then eliminate with further clues</li>
</ul>`
            },
            {
                heading: "Data Interpretation Basics",
                content: `
<h4>Types of Charts</h4>
<ul>
<li><strong>Bar Graph:</strong> Compare quantities — read values carefully</li>
<li><strong>Pie Chart:</strong> Central angle = (value/total)×360°. Percentage = (angle/360)×100</li>
<li><strong>Line Graph:</strong> Track trends. Look at slope for rate of change</li>
<li><strong>Table:</strong> Direct data — calculate ratio, percentage, average</li>
</ul>
<h4>Quick Calculation Tips</h4>
<ul>
<li>10% → divide by 10; 5% → half of 10%; 1% → divide by 100</li>
<li>12.5% = 1/8; 16.67% = 1/6; 33.33% = 1/3; 25% = 1/4</li>
<li>Approximate to nearest whole numbers for quick comparison</li>
</ul>`
            }
        ]
    },

    verbal: {
        title: "Verbal Ability",
        sections: [
            {
                heading: "Grammar Rules",
                content: `
<h4>Subject-Verb Agreement</h4>
<ul>
<li>"Neither...nor" / "Either...or" → verb agrees with nearest subject</li>
<li>"Each", "Every", "Neither", "Either" → singular verb</li>
<li>Collective nouns: singular when acting as unit, plural when acting individually</li>
<li>"A number of" → plural verb; "The number of" → singular verb</li>
</ul>
<h4>Common Errors</h4>
<ul>
<li>Tense consistency within a sentence</li>
<li>Pronoun-antecedent agreement</li>
<li>Misplaced modifiers</li>
<li>"Fewer" for countable, "Less" for uncountable</li>
<li>"Between" for two, "Among" for three or more</li>
</ul>`
            },
            {
                heading: "Vocabulary — Important Words",
                content: `
<h4>Frequently Tested Words</h4>
<table class="vocab-table">
<tr><th>Word</th><th>Meaning</th><th>Synonym</th><th>Antonym</th></tr>
<tr><td>Benevolent</td><td>Kind, generous</td><td>Charitable</td><td>Malevolent</td></tr>
<tr><td>Ephemeral</td><td>Short-lived</td><td>Transient</td><td>Permanent</td></tr>
<tr><td>Pragmatic</td><td>Practical</td><td>Realistic</td><td>Idealistic</td></tr>
<tr><td>Meticulous</td><td>Very careful</td><td>Thorough</td><td>Careless</td></tr>
<tr><td>Eloquent</td><td>Fluent speaking</td><td>Articulate</td><td>Inarticulate</td></tr>
<tr><td>Diligent</td><td>Hardworking</td><td>Industrious</td><td>Lazy</td></tr>
<tr><td>Abundant</td><td>Plentiful</td><td>Copious</td><td>Scarce</td></tr>
<tr><td>Ambiguous</td><td>Unclear</td><td>Vague</td><td>Clear</td></tr>
<tr><td>Candid</td><td>Frank, honest</td><td>Straightforward</td><td>Deceitful</td></tr>
<tr><td>Arduous</td><td>Difficult</td><td>Strenuous</td><td>Easy</td></tr>
</table>`
            },
            {
                heading: "Idioms & Phrases",
                content: `
<ul>
<li><strong>A piece of cake:</strong> Very easy task</li>
<li><strong>Burn the midnight oil:</strong> Work/study late at night</li>
<li><strong>Hit the nail on the head:</strong> Be exactly right</li>
<li><strong>Cry over spilt milk:</strong> Regret something irreversible</li>
<li><strong>Break the ice:</strong> Start a conversation</li>
<li><strong>Bite the bullet:</strong> Face something difficult bravely</li>
<li><strong>Under the weather:</strong> Feeling unwell</li>
<li><strong>Cost an arm and a leg:</strong> Very expensive</li>
<li><strong>Once in a blue moon:</strong> Very rarely</li>
<li><strong>Spill the beans:</strong> Reveal a secret</li>
<li><strong>Barking up the wrong tree:</strong> Looking in the wrong place</li>
<li><strong>The ball is in your court:</strong> It's your decision/turn</li>
<li><strong>A blessing in disguise:</strong> Good thing that initially seemed bad</li>
<li><strong>Beat around the bush:</strong> Avoid saying directly</li>
<li><strong>Better late than never:</strong> Preferable to do late than not at all</li>
<li><strong>Call it a day:</strong> Stop working</li>
<li><strong>Get out of hand:</strong> Get out of control</li>
<li><strong>Kill two birds with one stone:</strong> Accomplish two things at once</li>
<li><strong>Let the cat out of the bag:</strong> Reveal a secret accidentally</li>
<li><strong>Miss the boat:</strong> Miss an opportunity</li>
</ul>`
            },
            {
                heading: "One Word Substitutions",
                content: `
<table class="vocab-table">
<tr><th>Phrase</th><th>One Word</th></tr>
<tr><td>One who loves mankind</td><td>Philanthropist</td></tr>
<tr><td>One who hates mankind</td><td>Misanthrope</td></tr>
<tr><td>One who can speak two languages</td><td>Bilingual</td></tr>
<tr><td>Government by the people</td><td>Democracy</td></tr>
<tr><td>Government by a king/queen</td><td>Monarchy</td></tr>
<tr><td>A person who walks on foot</td><td>Pedestrian</td></tr>
<tr><td>Killing of one's own father</td><td>Patricide</td></tr>
<tr><td>That which cannot be read</td><td>Illegible</td></tr>
<tr><td>One who knows everything</td><td>Omniscient</td></tr>
<tr><td>One who is present everywhere</td><td>Omnipresent</td></tr>
<tr><td>Something that cannot be corrected</td><td>Incorrigible</td></tr>
<tr><td>A word no longer in use</td><td>Obsolete</td></tr>
<tr><td>A brief summary of a book</td><td>Synopsis</td></tr>
<tr><td>The study of human mind</td><td>Psychology</td></tr>
<tr><td>A person who collects stamps</td><td>Philatelist</td></tr>
</table>`
            },
            {
                heading: "Reading Comprehension Strategy",
                content: `
<h4>Approach</h4>
<ul>
<li><strong>Step 1:</strong> Skim the passage quickly (1 minute) — get the main idea</li>
<li><strong>Step 2:</strong> Read the questions BEFORE deep reading</li>
<li><strong>Step 3:</strong> Re-read passage looking for specific answers</li>
<li><strong>Step 4:</strong> Answers are usually in the passage — don't use outside knowledge</li>
</ul>
<h4>Question Types</h4>
<ul>
<li><strong>Main idea:</strong> What is the passage about? (Read first & last paragraphs)</li>
<li><strong>Detail-based:</strong> Look for specific words from the question in the passage</li>
<li><strong>Inference:</strong> What can be concluded? (Not directly stated but implied)</li>
<li><strong>Tone/Attitude:</strong> Author's viewpoint (positive, negative, neutral, critical)</li>
<li><strong>Vocabulary:</strong> Meaning in context — look at surrounding sentences</li>
</ul>
<h4>Time Management</h4>
<p>Allocate 3-4 minutes per RC set (passage + 4-5 questions). Don't spend more than 5 minutes on one passage.</p>`
            },
            {
                heading: "Sentence Arrangement & Error Spotting",
                content: `
<h4>Para Jumbles (Sentence Arrangement)</h4>
<ul>
<li>Find the opening sentence (introduces topic, no pronoun references)</li>
<li>Look for link words: "however", "moreover", "therefore", "hence"</li>
<li>Pronouns (he, she, it, they) must refer to previously mentioned nouns</li>
<li>Time/chronological order clues</li>
<li>Try to form pairs first, then arrange</li>
</ul>
<h4>Error Spotting Checklist</h4>
<ul>
<li>Subject-verb agreement (singular/plural)</li>
<li>Tense consistency</li>
<li>Preposition errors (interested in, consist of, depend on)</li>
<li>Article usage (a/an/the)</li>
<li>Pronoun errors (who vs whom, their vs there)</li>
<li>Redundancy (return back → return, revert back → revert)</li>
<li>Parallelism (list items should be same form)</li>
</ul>`
            }
        ]
    },

    programming: {
        title: "Programming Logic",
        sections: [
            {
                heading: "OOP Concepts",
                content: `
<h4>Four Pillars</h4>
<ul>
<li><strong>Encapsulation:</strong> Bundling data + methods; hiding internals via access modifiers (private fields, public getters)</li>
<li><strong>Abstraction:</strong> Hiding complex implementation; exposing only interface (abstract classes, interfaces)</li>
<li><strong>Inheritance:</strong> Child class inherits from parent. Promotes code reuse. <code>class Dog extends Animal</code></li>
<li><strong>Polymorphism:</strong> Same interface, different behavior.
  <br>• Compile-time: Method overloading (same name, different params)
  <br>• Runtime: Method overriding (child redefines parent method)</li>
</ul>
<h4>SOLID Principles</h4>
<ul>
<li><strong>S</strong>ingle Responsibility: One class, one reason to change</li>
<li><strong>O</strong>pen/Closed: Open for extension, closed for modification</li>
<li><strong>L</strong>iskov Substitution: Subtypes must be substitutable for base types</li>
<li><strong>I</strong>nterface Segregation: Prefer small, specific interfaces</li>
<li><strong>D</strong>ependency Inversion: Depend on abstractions, not concretions</li>
</ul>`
            },
            {
                heading: "Data Types & Operators",
                content: `
<h4>C/Java Data Types</h4>
<table class="vocab-table">
<tr><th>Type</th><th>Size</th><th>Range</th></tr>
<tr><td>char</td><td>1 byte</td><td>-128 to 127 (signed)</td></tr>
<tr><td>int</td><td>4 bytes</td><td>-2³¹ to 2³¹-1</td></tr>
<tr><td>float</td><td>4 bytes</td><td>~7 decimal digits</td></tr>
<tr><td>double</td><td>8 bytes</td><td>~15 decimal digits</td></tr>
<tr><td>long</td><td>8 bytes</td><td>-2⁶³ to 2⁶³-1</td></tr>
<tr><td>boolean</td><td>1 bit*</td><td>true/false</td></tr>
</table>
<h4>Operator Precedence (High to Low)</h4>
<p>() → Unary (++, --) → *, /, % → +, - → Relational (<, >) → Equality (==, !=) → Logical AND (&&) → Logical OR (||) → Assignment (=)</p>`
            },
            {
                heading: "Pseudocode Tracing Tips",
                content: `
<h4>Common Patterns to Watch</h4>
<ul>
<li><strong>Loop counting:</strong> Track variable values through each iteration</li>
<li><strong>Off-by-one errors:</strong> Does loop run n or n-1 times?</li>
<li><strong>Post vs Pre increment:</strong> x++ (use then increment) vs ++x (increment then use)</li>
<li><strong>Integer division:</strong> 7/2 = 3 (not 3.5) in C/Java</li>
<li><strong>Modulo operator:</strong> 7%3 = 1 (remainder)</li>
<li><strong>Short-circuit evaluation:</strong> && stops at first false, || stops at first true</li>
<li><strong>Recursion:</strong> Draw call tree, track return values</li>
</ul>
<h4>Strategy</h4>
<p>Create a trace table with columns for each variable. Execute line by line. Don't skip steps.</p>`
            },
            {
                heading: "Sorting Algorithms Comparison",
                content: `
<table class="vocab-table">
<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable?</th></tr>
<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>No</td></tr>
<tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>No</td></tr>
<tr><td>Heap Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>No</td></tr>
<tr><td>Counting Sort</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>Yes</td></tr>
</table>
<h4>Key Insights</h4>
<ul>
<li>Merge Sort: Guaranteed O(n log n), needs extra space → good for linked lists</li>
<li>Quick Sort: Best practical performance, O(n²) worst with poor pivot → use randomized pivot</li>
<li>Insertion Sort: Best for nearly sorted data, adaptive</li>
<li>Stable sort: Preserves relative order of equal elements</li>
</ul>`
            },
            {
                heading: "Data Structures Quick Reference",
                content: `
<table class="vocab-table">
<tr><th>Structure</th><th>Access</th><th>Search</th><th>Insert</th><th>Delete</th></tr>
<tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
<tr><td>Linked List</td><td>O(n)</td><td>O(n)</td><td>O(1)*</td><td>O(1)*</td></tr>
<tr><td>Stack</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Queue</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Hash Table</td><td>—</td><td>O(1) avg</td><td>O(1) avg</td><td>O(1) avg</td></tr>
<tr><td>BST</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td></tr>
<tr><td>Heap</td><td>O(1) max</td><td>O(n)</td><td>O(log n)</td><td>O(log n)</td></tr>
</table>
<p style="font-size:0.8em;">* at known position. BST times are for balanced trees.</p>`
            },
            {
                heading: "Recursion & Important Patterns",
                content: `
<h4>Recursion Structure</h4>
<ul>
<li><strong>Base case:</strong> When to stop (prevents infinite recursion)</li>
<li><strong>Recursive case:</strong> Function calls itself with simpler input</li>
<li><strong>Stack overflow:</strong> Too many recursive calls without reaching base case</li>
</ul>
<h4>Classic Examples</h4>
<pre><code>// Factorial
fact(n) = n == 0 ? 1 : n * fact(n-1)

// Fibonacci
fib(n) = n <= 1 ? n : fib(n-1) + fib(n-2)

// Power
power(x, n) = n == 0 ? 1 : x * power(x, n-1)

// Tower of Hanoi (2^n - 1 moves)
hanoi(n, from, to, aux)</code></pre>
<h4>Tail Recursion</h4>
<p>Recursive call is the last operation → can be optimized to iteration by compilers. Example: <code>f(n, acc)</code> pattern.</p>`
            },
            {
                heading: "Bitwise Operations",
                content: `
<h4>Operators</h4>
<ul>
<li><strong>& (AND):</strong> 1 only if both bits are 1 → used for masking</li>
<li><strong>| (OR):</strong> 1 if at least one bit is 1 → used for setting bits</li>
<li><strong>^ (XOR):</strong> 1 if bits differ → swap without temp: a^=b; b^=a; a^=b;</li>
<li><strong>~ (NOT):</strong> Flips all bits → ~x = -(x+1)</li>
<li><strong>&lt;&lt; (Left shift):</strong> x << n = x × 2ⁿ</li>
<li><strong>&gt;&gt; (Right shift):</strong> x >> n = x ÷ 2ⁿ</li>
</ul>
<h4>Tricks</h4>
<ul>
<li>Check even/odd: (n & 1) == 0 → even</li>
<li>Check power of 2: n > 0 && (n & (n-1)) == 0</li>
<li>Count set bits: Brian Kernighan's — n = n & (n-1) in loop, count iterations</li>
<li>Swap two numbers: a ^= b; b ^= a; a ^= b;</li>
</ul>`
            }
        ]
    },

    dbms: {
        title: "DBMS & SQL",
        sections: [
            {
                heading: "SQL Essentials",
                content: `
<h4>Command Categories</h4>
<ul>
<li><strong>DDL:</strong> CREATE, ALTER, DROP, TRUNCATE — structure changes</li>
<li><strong>DML:</strong> SELECT, INSERT, UPDATE, DELETE — data manipulation</li>
<li><strong>DCL:</strong> GRANT, REVOKE — access control</li>
<li><strong>TCL:</strong> COMMIT, ROLLBACK, SAVEPOINT — transactions</li>
</ul>
<h4>Key Query Patterns</h4>
<pre><code>-- Second highest salary
SELECT MAX(salary) FROM emp
WHERE salary < (SELECT MAX(salary) FROM emp);

-- Using DENSE_RANK
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rnk
  FROM emp
) t WHERE rnk = 2;

-- Count by department
SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5;

-- JOIN example
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;</code></pre>`
            },
            {
                heading: "Keys & Constraints",
                content: `
<ul>
<li><strong>Primary Key:</strong> Uniquely identifies each row. One per table. NOT NULL.</li>
<li><strong>Foreign Key:</strong> References primary key of another table. Enforces referential integrity.</li>
<li><strong>Unique Key:</strong> Ensures uniqueness. Multiple per table. Can have ONE NULL.</li>
<li><strong>Candidate Key:</strong> Minimal set of attributes that uniquely identify a row.</li>
<li><strong>Super Key:</strong> Any set containing a candidate key.</li>
<li><strong>Composite Key:</strong> Primary key made of multiple columns.</li>
</ul>`
            },
            {
                heading: "Normalization",
                content: `
<ul>
<li><strong>1NF:</strong> Atomic values only. No multi-valued or composite attributes.</li>
<li><strong>2NF:</strong> 1NF + No partial dependencies (non-key depends on full PK).</li>
<li><strong>3NF:</strong> 2NF + No transitive dependencies (non-key → non-key).</li>
<li><strong>BCNF:</strong> 3NF + Every determinant is a superkey.</li>
</ul>
<h4>ACID Properties</h4>
<ul>
<li><strong>Atomicity:</strong> Transaction is all-or-nothing</li>
<li><strong>Consistency:</strong> DB moves from one valid state to another</li>
<li><strong>Isolation:</strong> Concurrent transactions don't interfere</li>
<li><strong>Durability:</strong> Committed data persists even after crash</li>
</ul>`
            },
            {
                heading: "SQL Joins & Subqueries",
                content: `
<h4>Types of Joins</h4>
<ul>
<li><strong>INNER JOIN:</strong> Only matching rows from both tables</li>
<li><strong>LEFT JOIN:</strong> All rows from left table + matching from right (NULL if no match)</li>
<li><strong>RIGHT JOIN:</strong> All rows from right table + matching from left</li>
<li><strong>FULL OUTER JOIN:</strong> All rows from both tables (NULL where no match)</li>
<li><strong>CROSS JOIN:</strong> Cartesian product (every row × every row)</li>
<li><strong>SELF JOIN:</strong> Table joined with itself (e.g., employee-manager)</li>
</ul>
<h4>Subqueries</h4>
<pre><code>-- Correlated subquery
SELECT e.name FROM emp e
WHERE e.salary > (SELECT AVG(salary) FROM emp
                  WHERE dept = e.dept);

-- IN subquery
SELECT name FROM emp
WHERE dept_id IN (SELECT id FROM dept WHERE city='Mumbai');

-- EXISTS subquery
SELECT name FROM emp e
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.emp_id = e.id);</code></pre>`
            },
            {
                heading: "Aggregate Functions & Window Functions",
                content: `
<h4>Aggregate Functions</h4>
<ul>
<li><strong>COUNT(*):</strong> Number of rows</li>
<li><strong>SUM(col):</strong> Total of column values</li>
<li><strong>AVG(col):</strong> Average value</li>
<li><strong>MAX(col) / MIN(col):</strong> Maximum / Minimum</li>
<li><strong>GROUP BY:</strong> Group rows for aggregate calculation</li>
<li><strong>HAVING:</strong> Filter groups (like WHERE but for groups)</li>
</ul>
<h4>Window Functions (Advanced)</h4>
<pre><code>-- Rank employees by salary within department
SELECT name, dept, salary,
  ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) as rn,
  RANK() OVER (ORDER BY salary DESC) as rnk,
  DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rnk
FROM emp;

-- Running total
SELECT name, salary,
  SUM(salary) OVER (ORDER BY hire_date) as running_total
FROM emp;</code></pre>`
            },
            {
                heading: "ER Model & Relational Algebra",
                content: `
<h4>ER Diagram Components</h4>
<ul>
<li><strong>Entity:</strong> Rectangle — object/thing (Student, Employee)</li>
<li><strong>Attribute:</strong> Oval — property of entity (Name, Age)</li>
<li><strong>Relationship:</strong> Diamond — association between entities (enrolls, works_for)</li>
<li><strong>Cardinality:</strong> 1:1, 1:N, M:N</li>
<li><strong>Weak Entity:</strong> Double rectangle — depends on strong entity for identification</li>
</ul>
<h4>Relational Algebra Operations</h4>
<ul>
<li><strong>σ (Selection):</strong> Filter rows (like WHERE)</li>
<li><strong>π (Projection):</strong> Select columns (like SELECT col1, col2)</li>
<li><strong>⋈ (Join):</strong> Combine tables on condition</li>
<li><strong>∪ (Union):</strong> Combine results (same schema)</li>
<li><strong>− (Difference):</strong> Rows in R1 but not in R2</li>
<li><strong>× (Cross product):</strong> Cartesian product</li>
</ul>`
            }
        ]
    },

    os: {
        title: "Operating Systems",
        sections: [
            {
                heading: "Process Management",
                content: `
<h4>Process vs Thread</h4>
<ul>
<li><strong>Process:</strong> Independent program, own memory space, heavy context switch</li>
<li><strong>Thread:</strong> Lightweight unit within process, shared memory, fast context switch</li>
</ul>
<h4>Process States</h4>
<p>New → Ready → Running → Waiting → Terminated</p>
<h4>CPU Scheduling</h4>
<ul>
<li><strong>FCFS:</strong> First Come First Served. Simple. Convoy effect.</li>
<li><strong>SJF:</strong> Shortest Job First. Optimal avg waiting time. Starvation risk.</li>
<li><strong>Round Robin:</strong> Time quantum. Fair. Good for time-sharing.</li>
<li><strong>Priority:</strong> Based on priority. Can cause starvation → solved by aging.</li>
</ul>`
            },
            {
                heading: "Memory Management",
                content: `
<h4>Virtual Memory</h4>
<ul>
<li>Uses disk as extension of RAM</li>
<li>Page Table maps virtual → physical addresses</li>
<li>Page Fault: requested page not in RAM → load from disk</li>
<li>Thrashing: excessive page faults, system slows drastically</li>
</ul>
<h4>Page Replacement Algorithms</h4>
<ul>
<li><strong>FIFO:</strong> Replace oldest page</li>
<li><strong>LRU:</strong> Replace least recently used page</li>
<li><strong>Optimal:</strong> Replace page not needed for longest (theoretical)</li>
</ul>`
            },
            {
                heading: "Deadlocks",
                content: `
<h4>Coffman Conditions (ALL 4 needed)</h4>
<ol>
<li><strong>Mutual Exclusion:</strong> Resource held exclusively</li>
<li><strong>Hold and Wait:</strong> Hold one, wait for another</li>
<li><strong>No Preemption:</strong> Can't forcibly take resource</li>
<li><strong>Circular Wait:</strong> Circular chain of waiting</li>
</ol>
<h4>Handling</h4>
<ul>
<li><strong>Prevention:</strong> Break any one condition</li>
<li><strong>Avoidance:</strong> Banker's Algorithm (check for safe state)</li>
<li><strong>Detection:</strong> Wait-for graph, then recovery</li>
<li><strong>Ignorance:</strong> Ostrich algorithm (just restart)</li>
</ul>`
            },
            {
                heading: "File Systems & Disk Scheduling",
                content: `
<h4>File Allocation Methods</h4>
<ul>
<li><strong>Contiguous:</strong> Blocks stored together. Fast sequential access. External fragmentation.</li>
<li><strong>Linked:</strong> Each block points to next. No fragmentation. Slow random access.</li>
<li><strong>Indexed:</strong> Index block holds all pointers. Fast access. Overhead of index block.</li>
</ul>
<h4>Disk Scheduling Algorithms</h4>
<ul>
<li><strong>FCFS:</strong> Process requests in order. Simple but inefficient.</li>
<li><strong>SSTF:</strong> Shortest Seek Time First. Better than FCFS but can cause starvation.</li>
<li><strong>SCAN (Elevator):</strong> Move in one direction, then reverse. Fair distribution.</li>
<li><strong>C-SCAN:</strong> Circular SCAN — jumps back to start after reaching end.</li>
<li><strong>LOOK/C-LOOK:</strong> Like SCAN but reverses at last request, not disk end.</li>
</ul>`
            },
            {
                heading: "Synchronization",
                content: `
<h4>Critical Section Problem</h4>
<ul>
<li><strong>Mutual Exclusion:</strong> Only one process in critical section at a time</li>
<li><strong>Progress:</strong> No process outside should block others from entering</li>
<li><strong>Bounded Waiting:</strong> Limit on how long a process waits</li>
</ul>
<h4>Solutions</h4>
<ul>
<li><strong>Mutex:</strong> Lock/unlock mechanism. Binary (0 or 1). One owner.</li>
<li><strong>Semaphore:</strong> Counting mechanism. wait(S) decrements, signal(S) increments.</li>
<li><strong>Binary Semaphore:</strong> Like mutex but no ownership concept.</li>
<li><strong>Monitor:</strong> High-level synchronization. Only one process active inside monitor.</li>
</ul>
<h4>Classic Problems</h4>
<ul>
<li>Producer-Consumer (Bounded Buffer)</li>
<li>Readers-Writers Problem</li>
<li>Dining Philosophers Problem</li>
</ul>`
            }
        ]
    },

    networks: {
        title: "Computer Networks",
        sections: [
            {
                heading: "OSI & TCP/IP Models",
                content: `
<h4>OSI Model (7 Layers)</h4>
<table class="vocab-table">
<tr><th>Layer</th><th>Name</th><th>Function</th><th>Protocols</th></tr>
<tr><td>7</td><td>Application</td><td>User interface</td><td>HTTP, FTP, DNS, SMTP</td></tr>
<tr><td>6</td><td>Presentation</td><td>Data format, encryption</td><td>SSL/TLS, JPEG</td></tr>
<tr><td>5</td><td>Session</td><td>Session management</td><td>NetBIOS, RPC</td></tr>
<tr><td>4</td><td>Transport</td><td>End-to-end delivery</td><td>TCP, UDP</td></tr>
<tr><td>3</td><td>Network</td><td>Routing, addressing</td><td>IP, ICMP, ARP</td></tr>
<tr><td>2</td><td>Data Link</td><td>Frame, MAC address</td><td>Ethernet, PPP</td></tr>
<tr><td>1</td><td>Physical</td><td>Bits over wire</td><td>Cables, Hubs</td></tr>
</table>
<h4>TCP/IP Model (4 Layers)</h4>
<p>Application (OSI 5-7) → Transport (OSI 4) → Internet (OSI 3) → Network Access (OSI 1-2)</p>`
            },
            {
                heading: "TCP vs UDP & HTTP/HTTPS",
                content: `
<h4>TCP vs UDP</h4>
<table class="vocab-table">
<tr><th>Feature</th><th>TCP</th><th>UDP</th></tr>
<tr><td>Connection</td><td>Connection-oriented (3-way handshake)</td><td>Connectionless</td></tr>
<tr><td>Reliability</td><td>Reliable (ACKs, retransmission)</td><td>Unreliable</td></tr>
<tr><td>Ordering</td><td>Guaranteed order</td><td>No guarantee</td></tr>
<tr><td>Speed</td><td>Slower</td><td>Faster</td></tr>
<tr><td>Use cases</td><td>HTTP, FTP, Email</td><td>DNS, Streaming, Gaming</td></tr>
</table>
<h4>HTTP vs HTTPS</h4>
<ul>
<li>HTTP: Port 80, plaintext, no encryption</li>
<li>HTTPS: Port 443, TLS/SSL encrypted, certificate-based auth</li>
</ul>`
            },
            {
                heading: "IP Addressing & Subnetting",
                content: `
<h4>IPv4 Classes</h4>
<table class="vocab-table">
<tr><th>Class</th><th>Range</th><th>Default Mask</th><th>Networks</th><th>Hosts/Network</th></tr>
<tr><td>A</td><td>1.0.0.0 – 126.x.x.x</td><td>255.0.0.0 (/8)</td><td>126</td><td>16M</td></tr>
<tr><td>B</td><td>128.0.0.0 – 191.x.x.x</td><td>255.255.0.0 (/16)</td><td>16K</td><td>65K</td></tr>
<tr><td>C</td><td>192.0.0.0 – 223.x.x.x</td><td>255.255.255.0 (/24)</td><td>2M</td><td>254</td></tr>
<tr><td>D</td><td>224.0.0.0 – 239.x.x.x</td><td>—</td><td colspan="2">Multicast</td></tr>
<tr><td>E</td><td>240.0.0.0 – 255.x.x.x</td><td>—</td><td colspan="2">Reserved</td></tr>
</table>
<h4>Subnetting</h4>
<ul>
<li>Number of subnets = 2^(subnet bits)</li>
<li>Hosts per subnet = 2^(host bits) − 2 (subtract network & broadcast)</li>
<li>Example: /26 mask → 2 borrowed bits from /24 → 4 subnets, 62 hosts each</li>
</ul>
<h4>Private IP Ranges</h4>
<ul>
<li>10.0.0.0/8 (Class A)</li>
<li>172.16.0.0/12 (Class B)</li>
<li>192.168.0.0/16 (Class C)</li>
</ul>`
            },
            {
                heading: "Important Protocols & Port Numbers",
                content: `
<table class="vocab-table">
<tr><th>Protocol</th><th>Port</th><th>Purpose</th></tr>
<tr><td>HTTP</td><td>80</td><td>Web pages (unencrypted)</td></tr>
<tr><td>HTTPS</td><td>443</td><td>Secure web pages</td></tr>
<tr><td>FTP</td><td>20, 21</td><td>File transfer (data, control)</td></tr>
<tr><td>SSH</td><td>22</td><td>Secure shell / remote login</td></tr>
<tr><td>Telnet</td><td>23</td><td>Remote login (unencrypted)</td></tr>
<tr><td>SMTP</td><td>25</td><td>Send email</td></tr>
<tr><td>DNS</td><td>53</td><td>Domain name resolution</td></tr>
<tr><td>DHCP</td><td>67, 68</td><td>Automatic IP assignment</td></tr>
<tr><td>POP3</td><td>110</td><td>Receive email</td></tr>
<tr><td>IMAP</td><td>143</td><td>Receive email (synced)</td></tr>
<tr><td>MySQL</td><td>3306</td><td>Database server</td></tr>
</table>
<h4>DNS Resolution Process</h4>
<p>Browser Cache → OS Cache → Router Cache → ISP DNS → Root DNS → TLD DNS → Authoritative DNS → IP returned</p>`
            }
        ]
    },

    sysdesign: {
        title: "System Design Basics",
        sections: [
            {
                heading: "Key Concepts",
                content: `
<ul>
<li><strong>Load Balancer:</strong> Distributes traffic across servers (Nginx, ALB)</li>
<li><strong>Caching:</strong> Redis/Memcached for frequently accessed data</li>
<li><strong>CDN:</strong> Content Delivery Network for static assets</li>
<li><strong>Database Sharding:</strong> Splitting data across multiple databases</li>
<li><strong>Message Queue:</strong> Kafka, RabbitMQ for async processing</li>
<li><strong>Microservices:</strong> Independent services vs monolithic architecture</li>
</ul>
<h4>Monolithic vs Microservices</h4>
<ul>
<li><strong>Monolithic:</strong> Single deployable unit. Simple initially. Tightly coupled.</li>
<li><strong>Microservices:</strong> Independent services with own DB. Scalable. Complex ops.</li>
</ul>`
            },
            {
                heading: "Docker & Containers",
                content: `
<h4>Container vs VM</h4>
<ul>
<li><strong>VM:</strong> Full guest OS, heavy (GBs), slow boot, strong isolation</li>
<li><strong>Container:</strong> Shares host kernel, lightweight (MBs), fast boot, process isolation</li>
</ul>
<h4>CAP Theorem</h4>
<ul>
<li>Choose 2 of 3: <strong>C</strong>onsistency, <strong>A</strong>vailability, <strong>P</strong>artition tolerance</li>
<li>CP systems: MongoDB, HBase</li>
<li>AP systems: Cassandra, DynamoDB</li>
</ul>`
            }
        ]
    }
};

// Interview Questions Data — 200+ Questions from TCS NQT Digital Interview Prep
const INTERVIEW_DATA = {
    technical: [
        // === DSA - Fundamentals (Easy) ===
        {q: "What is the difference between an Array and a Linked List?", a: "Array: Contiguous memory, O(1) random access, fixed size, O(n) insert/delete in middle. Linked List: Non-contiguous nodes with pointers, O(n) access, O(1) insert/delete at known position. Use Array for frequent reads, Linked List for frequent modifications.", difficulty: "Easy"},
        {q: "Explain the difference between a Stack and a Queue with real-world examples.", a: "Stack: LIFO (Last In First Out) — push/pop from top. Examples: browser back button, undo in editors, function call stack. Queue: FIFO (First In First Out) — enqueue at rear, dequeue from front. Examples: printer queue, CPU task scheduling, BFS traversal. Both have O(1) operations.", difficulty: "Easy"},
        {q: "What is a Priority Queue? How is it implemented using a Heap?", a: "A Priority Queue serves elements by priority, not insertion order. Implemented using a Binary Heap (complete binary tree as array). Min-Heap: parent <= children. Max-Heap: parent >= children. Insert: Add at end, bubble up — O(log n). Extract min/max: Remove root, replace with last, heapify down — O(log n). Peek: O(1).", difficulty: "Easy"},
        {q: "What are the differences between a Graph and a Tree?", a: "Tree: Connected acyclic graph. Exactly n-1 edges for n nodes. One root, unique path between any two nodes. Hierarchical. Graph: General structure, can have cycles, disconnected components, multiple paths. May be directed/undirected, weighted/unweighted. Every tree is a graph, but not every graph is a tree.", difficulty: "Easy"},
        {q: "Implement Binary Search. State its time complexity.", a: "Works on sorted arrays. Compare target with middle element; if smaller go left half, if larger go right half. Iterative: low=0, high=n-1. While low<=high: mid=(low+high)/2. If arr[mid]==target return mid. If target<arr[mid] high=mid-1. Else low=mid+1. Time: O(log n). Space: O(1) iterative.", difficulty: "Easy"},
        {q: "Find the first non-repeating character in a string.", a: "Use HashMap to store frequency of each char. Then iterate string again, return first char with count==1. Time: O(n), Space: O(k) where k=alphabet size. Python: from collections import Counter; freq = Counter(s); return next((c for c in s if freq[c]==1), None).", difficulty: "Easy"},

        // === OOP - Fundamentals (Easy) ===
        {q: "Explain the four pillars of OOP with examples.", a: "1) Encapsulation: Bundling data+methods, hiding internals (private fields, public getters). 2) Abstraction: Hide complexity, expose interface (abstract class Shape with abstract method area()). 3) Inheritance: Child inherits from parent (Dog extends Animal). 4) Polymorphism: Same interface, different behavior — compile-time (overloading) and runtime (overriding).", difficulty: "Easy"},
        {q: "What is the difference between method overloading and method overriding?", a: "Overloading (Compile-time polymorphism): Same method name, different parameter list in SAME class. E.g., add(int,int) and add(double,double). Overriding (Runtime polymorphism): Child class redefines parent method with SAME signature. Uses @Override in Java. Key: Overloading = same class, different params. Overriding = different class, same params.", difficulty: "Easy"},
        {q: "What are access modifiers? Explain public, private, protected, default.", a: "public: Accessible from everywhere. private: Same class only, not inherited. protected: Same package + subclasses (even different packages). default (no modifier): Same package only (package-private). Increasing restriction: public > protected > default > private.", difficulty: "Easy"},
        {q: "What is a constructor? Default vs parameterized constructor.", a: "Constructor: Special method called automatically when object is created. Same name as class, no return type. Default: No parameters, provided by compiler if none defined. Parameterized: Takes arguments to initialize with specific values. If you define any constructor, compiler does NOT provide default.", difficulty: "Easy"},
        {q: "Explain static methods and variables. Can a static method access non-static members?", a: "Static members belong to the CLASS, not instances. Shared across all objects. Accessed via ClassName.member. Static variable: One copy shared. Static method: Called without creating object (e.g., Math.sqrt()). A static method CANNOT directly access non-static members because no 'this' reference exists — must create an object first.", difficulty: "Easy"},
        {q: "What is garbage collection? How does it work in Java?", a: "GC automatically reclaims memory of unreferenced objects. Prevents memory leaks. Java: JVM runs GC in background. Objects with zero references are eligible. Uses generational collection (Young Gen → Old Gen). Algorithms: Mark-and-Sweep, G1 GC (default since Java 9). System.gc() is only a suggestion. Cannot force GC.", difficulty: "Easy"},

        // === DBMS - Fundamentals (Easy) ===
        {q: "What is the difference between SQL and NoSQL databases?", a: "SQL (Relational): Structured tables, fixed schema, ACID transactions. E.g., MySQL, PostgreSQL. Best for complex queries, joins. NoSQL: Flexible schema, horizontal scaling. Types: Document (MongoDB), Key-Value (Redis), Column-family (Cassandra), Graph (Neo4j). Choose SQL for ACID needs; NoSQL for massive scale, unstructured data.", difficulty: "Easy"},
        {q: "What is the difference between Primary Key and Unique Key?", a: "Primary Key: Uniquely identifies each row. Only ONE per table. Cannot be NULL. Creates clustered index. Unique Key: Ensures uniqueness. Multiple allowed per table. CAN have one NULL. Creates non-clustered index. Example: EmployeeID = Primary Key, Email = Unique Key.", difficulty: "Easy"},
        {q: "Explain the difference between DELETE, TRUNCATE, and DROP.", a: "DELETE: DML, removes rows based on WHERE, can rollback, fires triggers, slower. TRUNCATE: DDL, removes ALL rows, can't use WHERE, faster, resets identity counter, can't rollback. DROP: DDL, removes entire table (structure + data + indexes), irreversible, frees all space.", difficulty: "Easy"},
        {q: "What is a View in SQL? What are its advantages?", a: "A View is a virtual table based on a SELECT query. Does not store data physically (except materialized views). Advantages: 1) Security — restrict access to specific columns/rows. 2) Simplicity — hide complex joins. 3) Consistency — same logic reused. 4) Abstraction — decouple app from schema changes.", difficulty: "Easy"},

        // === OS - Fundamentals (Easy/Medium) ===
        {q: "What is the difference between a Process and a Thread?", a: "Process: Independent program in execution. Own memory space (code, data, stack, heap). Heavy context switch. IPC needed for communication. Thread: Lightweight unit within a process. Shares process memory but has own stack and registers. Faster context switch. Direct communication via shared memory.", difficulty: "Easy"},
        {q: "What is virtual memory? How does it work?", a: "Allows processes to use more memory than physical RAM by using disk (swap space) as extension. OS maps virtual→physical addresses via page table. Pages loaded on demand (demand paging). Page fault = load from disk. Benefits: process isolation, larger address space. Drawback: thrashing if excessive.", difficulty: "Medium"},

        // === Networks - Fundamentals (Easy/Medium) ===
        {q: "Explain the OSI model (7 layers) and TCP/IP model (4 layers).", a: "OSI (top→bottom): Application, Presentation, Session, Transport, Network, Data Link, Physical. TCP/IP: Application (=OSI 5-7), Transport (=OSI 4), Internet (=OSI 3), Network Access (=OSI 1-2). Key protocols: Application (HTTP, DNS, FTP), Transport (TCP, UDP), Network (IP, ICMP), Data Link (Ethernet, ARP).", difficulty: "Easy"},
        {q: "What is the difference between TCP and UDP?", a: "TCP: Connection-oriented (3-way handshake), reliable (ACKs, retransmission), ordered, flow/congestion control, slower. Use: HTTP, FTP, SSH. UDP: Connectionless, unreliable (no ACKs), no ordering, faster. Use: DNS, video streaming, gaming, VoIP. TCP = reliability matters. UDP = speed matters.", difficulty: "Easy"},
        {q: "What is the difference between HTTP and HTTPS?", a: "HTTP: Port 80, data in plaintext, no encryption. HTTPS: HTTP + TLS/SSL encryption, Port 443, data encrypted in transit, server authenticated via certificate. Prevents eavesdropping, tampering, MITM attacks. Uses TLS handshake: client hello, server certificate, key exchange, symmetric encryption.", difficulty: "Easy"},

        // === Programming Languages (Easy) ===
        {q: "[Java] Difference between == and .equals() in Java?", a: "== compares references (memory addresses) for objects, primitive values for primitives. .equals() compares content/values. Default Object.equals() uses ==, but String, Integer etc. override it. Example: new String('hi') == new String('hi') is false; .equals() is true. Best practice: Always use .equals() for objects.", difficulty: "Easy"},
        {q: "[Java] Difference between String, StringBuilder, and StringBuffer?", a: "String: Immutable, creates new object on modification, thread-safe. StringBuilder: Mutable, modifications in-place, NOT thread-safe, faster. StringBuffer: Mutable, thread-safe (synchronized), slower. Use: String for constants/keys, StringBuilder for single-thread string building, StringBuffer when thread safety needed.", difficulty: "Easy"},
        {q: "[Python] Difference between a list and a tuple?", a: "List: Mutable (can modify), defined with [], slower iteration, more memory, methods: append, extend, remove, pop. Tuple: Immutable (cannot change), defined with (), faster iteration, less memory, can be dict keys. Use list when data changes; tuple for fixed collections (coordinates, RGB, function returns).", difficulty: "Easy"},
        {q: "[C/C++] What is pass-by-value vs pass-by-reference?", a: "Pass-by-value: Copy of argument passed, changes inside function do NOT affect original. C uses this by default. Pass-by-reference: Actual variable (address) passed, changes AFFECT original. C++ supports with & operator. C simulates with pointers. Java is always pass-by-value (but object references passed by value).", difficulty: "Easy"},

        // === React & Frontend - Basics (Easy) ===
        {q: "What is React? Why is it popular for frontend development?", a: "React is a JavaScript library (by Meta) for building UIs, primarily SPAs. Key features: Component-based, Virtual DOM for performance, JSX syntax, unidirectional data flow, large ecosystem. Popular because: Reusable components, fast rendering via Virtual DOM diffing, huge community, rich tooling (Next.js, Vite).", difficulty: "Easy"},
        {q: "What is JSX? Can browsers read JSX directly?", a: "JSX = JavaScript XML. Syntax extension for writing HTML-like code in JavaScript. E.g., const el = <h1>Hello</h1>. Browsers CANNOT read JSX — it must be transpiled by Babel to React.createElement('h1', null, 'Hello'). JSX is not mandatory but makes React code more readable.", difficulty: "Easy"},
        {q: "What is the Virtual DOM? How does it improve performance?", a: "Virtual DOM is a lightweight in-memory JS representation of the real DOM. Process: 1) State changes → new Virtual DOM created. 2) Diffing algorithm compares new vs old. 3) Only changed nodes updated in real DOM (reconciliation). Faster because: direct DOM manipulation is expensive, batch updates minimize operations.", difficulty: "Easy"},
        {q: "What is the difference between a class component and a functional component?", a: "Class: ES6 class extending React.Component, lifecycle methods, 'this' keyword, state via this.state/this.setState. Functional: Plain JS function returning JSX, simpler, uses Hooks (useState, useEffect). Modern React strongly favors functional components + hooks. Class components are legacy.", difficulty: "Easy"},
        {q: "What are props in React?", a: "Props (properties) are read-only inputs passed from parent to child component. Make components reusable and configurable. Flow one-way: parent → child (unidirectional). A child cannot modify its props. Example: <UserCard name='Dhruv' role='SDE' /> — accessed as props.name in functional component.", difficulty: "Easy"},

        // === DSA - Applied Coding (Medium) ===
        {q: "What is a Hash Map? How does it handle collisions?", a: "HashMap stores key-value pairs. Hash function maps key to bucket index. Average O(1) for get/put. Collision handling: 1) Chaining: linked list at each bucket (Java 8+: balanced tree for >8 entries). 2) Open Addressing: linear probing, quadratic probing, double hashing. Java resizes when load factor > 0.75.", difficulty: "Medium"},
        {q: "Explain BFS and DFS. When would you use each?", a: "BFS: Level-by-level using Queue. O(V+E). Space O(V). DFS: Depth-first using Stack/recursion. O(V+E). Space O(V) worst. Use BFS for: shortest path in unweighted graph, level-order traversal. Use DFS for: cycle detection, topological sort, maze solving, connected components.", difficulty: "Medium"},
        {q: "Reverse a Linked List. Write iterative approach.", a: "Use three pointers: prev=null, curr=head, next=null. While curr != null: next = curr.next; curr.next = prev; prev = curr; curr = next. Return prev (new head). Time: O(n), Space: O(1). Recursive: Base case: if head==null or head.next==null return head. newHead = reverse(head.next); head.next.next = head; head.next = null.", difficulty: "Medium"},
        {q: "Detect a cycle in a Linked List (Floyd's algorithm).", a: "Floyd's Tortoise and Hare: Two pointers — slow (1 step) and fast (2 steps). If they meet, cycle exists. To find cycle start: After meeting, move one pointer to head. Advance both by 1 step. They meet at cycle start. Time: O(n), Space: O(1). Alternative: HashSet — O(n) time and space.", difficulty: "Medium"},
        {q: "Implement a Queue using two Stacks.", a: "Stack1 for enqueue, Stack2 for dequeue. Enqueue: Push to Stack1 — O(1). Dequeue: If Stack2 empty, pop all from Stack1 and push to Stack2 (reverses order). Pop from Stack2. Amortized O(1) per operation because each element is moved at most once. Worst case single dequeue: O(n).", difficulty: "Medium"},
        {q: "Two Sum: Find two numbers in sorted array that add to target.", a: "Two-pointer (sorted): left=0, right=n-1. While left<right: sum=arr[left]+arr[right]. If sum==target, return. If sum<target, left++. If sum>target, right--. Time O(n), Space O(1). For unsorted: HashMap — for each num, check if (target-num) exists. Time O(n), Space O(n).", difficulty: "Medium"},
        {q: "Check if a Binary Tree is a valid BST.", a: "Approach 1 (Range check): Recursively pass valid range (min, max). For each node: min < node.val < max. Left subtree: max=node.val. Right subtree: min=node.val. Approach 2: Inorder traversal should produce sorted sequence — track previous value. Time: O(n), Space: O(h) for both.", difficulty: "Medium"},
        {q: "Sort an array using Merge Sort. Explain complexity.", a: "Divide array into halves recursively until single elements. Merge sorted halves back. merge(): Two pointers compare elements from both halves, place smaller in temp array. Time: O(n log n) always (best/avg/worst). Space: O(n) for temp array. Stable sort. Good for linked lists and external sorting.", difficulty: "Medium"},

        // === OOP - Design & Patterns (Medium) ===
        {q: "Abstract class vs Interface. When to use each?", a: "Abstract class: Can have abstract + concrete methods, instance variables, constructors. Single inheritance only. 'IS-A' with partial implementation. Interface: Only abstract methods (Java 8+: default/static). No instance variables. Multiple allowed. Defines a contract. Use abstract for shared code among related classes; interface for unrelated classes sharing behavior.", difficulty: "Medium"},
        {q: "What is the Singleton design pattern? Write thread-safe implementation.", a: "Singleton ensures only ONE instance exists. Thread-safe (Bill Pugh): private constructor, private static inner class Holder with static final instance, public getInstance() returns Holder.INSTANCE. Uses lazy initialization via inner static class. JVM guarantees thread safety of static initialization. No synchronization overhead.", difficulty: "Medium"},
        {q: "Composition vs Inheritance. When to prefer each?", a: "Inheritance: 'IS-A' relationship. Dog IS-A Animal. Tight coupling, can break encapsulation. Composition: 'HAS-A' relationship. Car HAS-A Engine. Loose coupling, more flexible. Prefer composition when: need runtime behavior change, avoid deep hierarchies, follow 'favor composition over inheritance'. Use inheritance for true IS-A + polymorphism.", difficulty: "Medium"},

        // === DBMS - Querying & Design (Medium) ===
        {q: "Explain normalization: 1NF, 2NF, 3NF, BCNF.", a: "1NF: Atomic values, each row unique. 2NF: 1NF + no partial dependency on composite key. 3NF: 2NF + no transitive dependency (non-key → non-key). BCNF: For every FD X→Y, X must be a superkey. Purpose: Reduce redundancy, prevent insert/update/delete anomalies.", difficulty: "Medium"},
        {q: "Write SQL to find the second-highest salary from Employee table.", a: "Method 1: SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee). Method 2: SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1. Method 3: SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM Employee) t WHERE rnk = 2.", difficulty: "Medium"},
        {q: "Explain SQL Joins: INNER, LEFT, RIGHT, FULL OUTER.", a: "INNER JOIN: Only matching rows from both tables. LEFT JOIN: All left rows + matching right (NULL if no match). RIGHT JOIN: All right rows + matching left. FULL OUTER JOIN: All rows from both (NULL where no match). CROSS JOIN: Cartesian product. SELF JOIN: Table joined with itself.", difficulty: "Medium"},
        {q: "What is an index in a database? Benefits and drawbacks?", a: "Index: Data structure (B-tree/B+ tree) that speeds up retrieval. Like a book index. Benefits: SELECT/WHERE much faster O(log n), speeds up JOIN, ORDER BY. Drawbacks: Extra storage, slower INSERT/UPDATE/DELETE (index must be updated). Types: Clustered (sorts data, 1 per table), Non-clustered (separate structure, multiple allowed).", difficulty: "Medium"},

        // === OS - Concurrency (Medium) ===
        {q: "What is a deadlock? What are the four Coffman conditions?", a: "Deadlock: Two+ processes permanently blocked, each waiting for resource held by another. Four conditions (ALL must hold): 1) Mutual Exclusion 2) Hold and Wait 3) No Preemption 4) Circular Wait. Prevention: Break any one condition. E.g., impose resource ordering (breaks circular wait).", difficulty: "Medium"},
        {q: "Explain semaphore vs mutex. When to use each?", a: "Mutex: Binary lock, only locking thread can unlock (ownership). Used for exclusive access to one resource. Semaphore: Counter-based, allows N threads (counting semaphore), no ownership — any thread can signal. Use mutex for: protecting single resource (critical section). Use semaphore for: controlling pool of resources (e.g., connection pool of 10).", difficulty: "Medium"},
        {q: "Explain the Producer-Consumer problem.", a: "Producer generates data into bounded buffer. Consumer removes data. Need sync to prevent overflow/underflow. Solution with semaphores: empty_slots(N), full_slots(0), mutex(1). Producer: wait(empty); wait(mutex); add; signal(mutex); signal(full). Consumer: wait(full); wait(mutex); remove; signal(mutex); signal(empty).", difficulty: "Medium"},

        // === Networks - Protocols (Medium) ===
        {q: "Explain the TCP three-way handshake.", a: "1) Client → SYN (seq=x) → Server (SYN_SENT). 2) Server → SYN+ACK (seq=y, ack=x+1) → Client (SYN_RECEIVED). 3) Client → ACK (ack=y+1) → Server. Both ESTABLISHED. Teardown (4-way): FIN from client, ACK from server, FIN from server, ACK from client.", difficulty: "Medium"},
        {q: "What is DNS? Explain the full resolution process.", a: "DNS translates domain names to IP addresses. Steps: 1) Browser cache. 2) OS cache. 3) Recursive resolver (ISP). 4) Root nameserver → TLD server. 5) TLD (.com) → authoritative NS. 6) Authoritative NS → IP. Cached with TTL. Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail).", difficulty: "Medium"},
        {q: "Explain REST API. What are the HTTP methods?", a: "REST: Stateless, resource-based URLs, standard HTTP methods. GET (read, idempotent), POST (create), PUT (replace, idempotent), PATCH (partial update), DELETE (remove, idempotent). Principles: Stateless, Client-Server, Cacheable, Uniform Interface. Status: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.", difficulty: "Medium"},

        // === Programming - Intermediate (Medium) ===
        {q: "[Java] Explain exception handling: try-catch-finally, checked vs unchecked.", a: "try: Code that may throw. catch: Handles exception. finally: Always executes (cleanup). Checked: Compile-time, must handle/declare (IOException, SQLException). Unchecked: Runtime (NullPointerException, ArrayIndexOutOfBounds). Best practice: Catch specific exceptions, use try-with-resources for cleanup.", difficulty: "Medium"},
        {q: "[Java] Java Memory Model: Stack vs Heap.", a: "Stack: Per thread, stores method frames/local variables/primitives/references. LIFO, fast, fixed size (StackOverflowError). Heap: Shared across threads, stores objects/instance variables. Managed by GC, larger but slower (OutOfMemoryError). String Pool is special area in heap.", difficulty: "Medium"},
        {q: "[Python] What are decorators? Write a custom example.", a: "Decorators wrap functions to extend/modify behavior without changing code. Uses @decorator syntax. Example: @timer wraps function with timing logic. def timer(func): def wrapper(*args): start=time.time(); result=func(*args); print(time.time()-start); return result; return wrapper. Built-in: @staticmethod, @classmethod, @property.", difficulty: "Medium"},

        // === React & Frontend - Intermediate (Medium) ===
        {q: "What are React Hooks? Explain useState and useEffect.", a: "Hooks let functional components use state/lifecycle (React 16.8+). useState: const [count, setCount] = useState(0) — declares state, setter triggers re-render. useEffect: runs after render, replaces lifecycle methods. Deps array: [] = mount only, [x] = when x changes, omit = every render. Rules: Top level only, only in functional components.", difficulty: "Medium"},
        {q: "What is state vs props in React? How do they differ?", a: "Props: Passed FROM parent, read-only in child, used to configure components. State: Managed WITHIN component, mutable via setState/useState, represents changing data. Key: Props are external, state is internal. Both trigger re-render when changed. Lifting state up: move shared state to common parent.", difficulty: "Medium"},
        {q: "Explain the React component lifecycle (class and hooks equivalent).", a: "Class phases: Mounting (constructor, render, componentDidMount), Updating (shouldComponentUpdate, render, componentDidUpdate), Unmounting (componentWillUnmount). Hooks: componentDidMount = useEffect(()=>{}, []). componentDidUpdate = useEffect(()=>{}, [dep]). componentWillUnmount = useEffect(() => { return () => cleanup }, []).", difficulty: "Medium"},
        {q: "What is React Context API? When would you use it over props?", a: "Context passes data through component tree without prop drilling. Usage: createContext(default), Provider wraps tree with value, Consumer uses useContext(). Use for: theme, locale, auth — data needed by many components. Avoid for: frequently changing data (causes re-renders). For complex state: Redux or Zustand.", difficulty: "Medium"},
        {q: "What is the difference between controlled and uncontrolled components?", a: "Controlled: Form data handled by React state. Input value set by state, onChange updates state. Single source of truth. Uncontrolled: Form data handled by DOM. Use ref to access values. Controlled preferred for: validation, conditional disabling, format enforcement. Uncontrolled for: simple forms, file inputs.", difficulty: "Medium"},
        {q: "What is React Router? Explain client-side routing.", a: "React Router enables navigation between views without full page reload. Key: BrowserRouter, Routes, Route, Link, useNavigate(). Client-side routing: URL changes handled by JS (History API), DOM updated without server request. Server serves same HTML for all routes. React Router matches URL to component.", difficulty: "Medium"},
        {q: "What is the key prop in React lists? Why is it important?", a: "When rendering lists with .map(), React needs unique 'key' prop on each element to track changes efficiently. Keys help diffing: without keys, React re-renders entire list. With keys, only changed items updated. Rules: Stable, unique among siblings. Use data IDs, not array index (index changes on reorder).", difficulty: "Medium"},

        // === Web Fundamentals (Medium) ===
        {q: "Explain how a browser loads a webpage end-to-end.", a: "1) DNS resolution. 2) TCP connection + TLS if HTTPS. 3) HTTP GET request. 4) Server returns HTML. 5) Parse HTML → DOM tree. 6) CSS → CSSOM. 7) JS executed (blocks unless async/defer). 8) DOM + CSSOM = Render Tree. 9) Layout (positions). 10) Paint (pixels). 11) Composite (layers).", difficulty: "Medium"},
        {q: "What is CORS? Why does it exist?", a: "CORS (Cross-Origin Resource Sharing): Controls which domains can make requests. Same-Origin Policy blocks cross-origin requests. CORS relaxes this via server headers: Access-Control-Allow-Origin, Allow-Methods, Allow-Headers. Preflight (OPTIONS) sent for non-simple requests. Fix: Server sets headers. Never use * with credentials in production.", difficulty: "Medium"},
        {q: "What is the difference between CSS Flexbox and Grid?", a: "Flexbox: One-dimensional (row OR column). Best for single-axis alignment. Properties: display:flex, justify-content, align-items. Grid: Two-dimensional (rows AND columns). Best for complex layouts. Properties: display:grid, grid-template-columns/rows. Use Flexbox for navbars, card rows. Use Grid for full page layouts, dashboards.", difficulty: "Medium"},
        {q: "Explain event delegation in JavaScript.", a: "Instead of listeners on each child, attach ONE to parent. Events bubble up (event bubbling). In parent listener, event.target identifies clicked child. Benefits: Less memory (fewer listeners), works for dynamically added children. Example: One handler on <ul>, check event.target.tagName === 'LI'. React handles this via synthetic events.", difficulty: "Medium"},

        // === Git & Tools (Medium) ===
        {q: "Explain git merge vs git rebase.", a: "Merge: Creates merge commit combining branches. Preserves full history. Non-destructive. Rebase: Replays commits onto another branch. Creates linear history. Rewrites commit hashes. Use merge for: shared branches, preserving history. Use rebase for: clean linear history, feature branches. NEVER rebase public/shared branches.", difficulty: "Medium"},

        // === DSA - Advanced (Hard) ===
        {q: "Explain Dynamic Programming vs Divide and Conquer.", a: "D&C: Independent subproblems, no overlap (Merge Sort, Quick Sort, Binary Search). DP: Overlapping subproblems — store results (memoization/tabulation). E.g., Fibonacci, LCS, Knapsack, Coin Change. Top-down: recursion+memo. Bottom-up: iterative from base cases. LCS: dp[i][j] = s1[i]==s2[j] ? dp[i-1][j-1]+1 : max(dp[i-1][j], dp[i][j-1]).", difficulty: "Hard"},
        {q: "What is a Trie? Where is it used? Implement insert and search.", a: "Trie (Prefix Tree): Each node represents a character. Path from root forms prefix. Used for: autocomplete, spell check, IP routing, dictionary. Each node has children (array[26] or HashMap) + isEndOfWord. Insert/Search: O(L) where L=word length. Space: O(ALPHABET × L × N) worst case.", difficulty: "Hard"},
        {q: "Find LCA of two nodes in a BST and in a general Binary Tree.", a: "BST: Exploit BST property. If both < root, go left. If both > root, go right. Otherwise root is LCA. O(h). General BT: Recursive — if root==null or root==p or root==q, return root. Recurse left and right. If both non-null, root is LCA. If one null, return other. O(n).", difficulty: "Hard"},
        {q: "Explain SOLID principles with code examples.", a: "S: Single Responsibility — one reason to change. O: Open/Closed — open for extension, closed for modification. L: Liskov Substitution — subtypes must substitute base types. I: Interface Segregation — prefer small, specific interfaces. D: Dependency Inversion — depend on abstractions, not concretions.", difficulty: "Hard"},

        // === DBMS - Advanced (Hard) ===
        {q: "Explain the CAP theorem with system examples.", a: "In distributed systems, guarantee at most 2 of 3: Consistency (same data), Availability (every request gets response), Partition tolerance (works despite network splits). Partition tolerance is mandatory, so real choice is CP or AP. CP: MongoDB, HBase. AP: Cassandra, DynamoDB (eventually consistent).", difficulty: "Hard"},

        // === OS - Advanced (Hard) ===
        {q: "Explain the Banker's Algorithm for deadlock avoidance.", a: "Before granting request, check if resulting state is SAFE. Data: Available[m], Max[n][m], Allocation[n][m], Need=Max-Allocation. Safety check: Find process whose Need <= Available. Simulate completion: Available += Allocation[i]. Repeat. If all finish = SAFE. Limitation: requires knowing max needs in advance.", difficulty: "Hard"},

        // === React - Advanced (Hard) ===
        {q: "What is Redux? Explain its architecture and when to use it.", a: "Redux: Centralized state management. Architecture: Store (single source of truth) → Components dispatch Actions (type+payload) → Reducers (pure functions: state+action → newState) → Components re-render via useSelector. Middleware: Thunk/Saga for async. Use for: large apps, shared state, complex logic. Avoid for: small apps.", difficulty: "Hard"},
        {q: "Explain React performance optimization techniques.", a: "1) React.memo: Skip re-render if props unchanged. 2) useMemo: Memoize computations. 3) useCallback: Memoize function references. 4) Code splitting: React.lazy + Suspense. 5) Virtualization: react-window for large lists. 6) Avoid inline objects/functions as props. 7) Use Profiler to identify slow components.", difficulty: "Hard"},
        {q: "What is SSR vs CSR vs SSG?", a: "CSR (Client-Side): Browser renders with JS. Slower initial load, faster navigation. Default React. SSR (Server-Side): Server renders full HTML per request. Faster first paint, better SEO. Next.js. SSG (Static Site Generation): Pre-rendered at build time. Fastest (CDN). Next.js/Gatsby. ISR: SSG + revalidation on timer.", difficulty: "Hard"},
        {q: "What is a custom hook in React? Write an example.", a: "Custom hooks encapsulate reusable stateful logic. Must start with 'use'. Example — useLocalStorage: useState with lazy initializer reading localStorage, useEffect syncing to localStorage on change. Returns [value, setValue]. Common: useFetch, useDebounce, useToggle, useLocalStorage.", difficulty: "Hard"},
        {q: "Explain Webpack, Babel, and the modern frontend build pipeline.", a: "Babel: Transpiler — converts ES6+/JSX to backward-compatible JS. Webpack: Module bundler — code splitting, tree shaking, loaders, plugins. Pipeline: Source (JSX/TS/SCSS) → Babel → Webpack → Minify → Output. Modern alternatives: Vite (faster, ESM + esbuild), Turbopack. Vite: lightning-fast HMR via native ES modules.", difficulty: "Hard"},

        // === System Design (Hard) ===
        {q: "How would you design a URL shortener (like bit.ly)?", a: "Generate unique ID (auto-increment/hash), encode to base62 (7 chars = 3.5T URLs). Store in key-value DB. Cache popular URLs (Redis). Rate limiting. Analytics. Scale: horizontal scaling + load balancer, pre-generate IDs (Snowflake), CDN for redirects. 301 vs 302 redirect.", difficulty: "Hard"},
        {q: "What is Docker? Container vs VM. Explain layers.", a: "Docker: Containerizes apps with dependencies. VM: Full guest OS, heavy (GBs), slow boot, strong isolation. Container: Shares host kernel, lightweight (MBs), fast boot, process isolation via namespaces/cgroups. Docker layers: Each Dockerfile instruction creates cached layer. Read-only layers + thin writable container layer on top.", difficulty: "Hard"},
        {q: "Explain microservices vs monolithic architecture.", a: "Monolithic: Single deployable unit, tightly coupled, one codebase/database. Microservices: Independent services, own codebase/DB/deployment, communicate via APIs. Pros: Independent scaling, deployment, tech choice. Cons: Distributed complexity, operational overhead. Start monolithic, split when scale demands it.", difficulty: "Hard"}
    ],
    managerial: [
        // === Easy — Project & Background ===
        {q: "Walk me through your most challenging project.", a: "Structure: 1) Project name & objective 2) Your role 3) Technologies used & why 4) Challenge faced 5) How you overcame it 6) Outcome/result. Be specific, show decision-making, quantify results.", difficulty: "Easy", tip: "Prepare 2-3 projects with STAR format"},
        {q: "Why did you choose those technologies for your project?", a: "Show decision-making: 'I chose React for component reusability and Virtual DOM performance. Node.js for non-blocking I/O (real-time). MongoDB for flexible schema.' Always mention: problem requirements, alternatives considered, and why your choice was best fit.", difficulty: "Easy", tip: "Show deliberate, informed decisions"},
        {q: "How did you test your project?", a: "Multi-level approach: Unit tests (Jest) for functions, integration tests (Supertest) for APIs, manual testing for UI. Load testing with k6. If no tests: be honest but show awareness — 'I focused on manual testing but understand importance of automated testing and plan to integrate TDD.'", difficulty: "Easy", tip: "Mention testing tools you know"},
        {q: "What do you know about TCS?", a: "Founded 1968, HQ Mumbai. CEO: K. Krithivasan (2023). Revenue: US$31B (FY 2025). ~593K employees, 46 countries. Products: BaNCS (banking), Ignio (AI), MasterCraft, Quartz (blockchain), HOBS (telecom). Tagline: 'Building on Belief'. Part of Tata Group (71.74% owned by Tata Sons).", difficulty: "Easy", tip: "Research TCS.com before interview"},
        {q: "What is TCS Ion? How does it differ from other TCS platforms?", a: "TCS Ion is a digital platform for learning, assessment, and business solutions. Serves educational institutions, government bodies, enterprises. Key: online assessments (NQT), learning management, HR solutions. Different from BaNCS (banking) or Ignio (AI operations) — Ion focuses on learning/assessment/HR domain.", difficulty: "Easy", tip: "Know the platform you're interviewing through"},
        {q: "Where do you see yourself in 5 years?", a: "Strong full-stack developer with deep expertise in cloud-native technologies. Contributing to large-scale enterprise projects, potentially leading a small team. Interested in TCS Digital for cutting-edge tech and diverse domains.", difficulty: "Easy", tip: "Show growth WITHIN company. Avoid: 'start own company' or 'MBA'"},
        {q: "Why TCS over other IT companies?", a: "TCS offers unmatched scale and diversity — 46 countries, every industry. TCS Digital focuses on modern technologies. Learning culture (ILP training, Fresco Play) and stable growth ideal for freshers. Tata Group values, global exposure, work-life balance.", difficulty: "Easy", tip: "Mention specific things: ILP, Fresco Play, global exposure"},
        {q: "How do you keep yourself updated with technology?", a: "Tech blogs (Dev.to, Medium, Hacker News), YouTube (Fireship, Traversy Media), Coursera/Udemy. Weekly LeetCode. Open-source contributions on GitHub. Local tech meetups. Recently exploring GenAI/LLM APIs and Docker/containerization.", difficulty: "Easy", tip: "Mention recent specific learnings"},

        // === Medium — Situational & Behavioral (STAR Method) ===
        {q: "You realize midway you won't meet the deadline. What do you do?", a: "1) Immediately inform lead with specifics (done, remaining, blocking). 2) Propose solutions: extend deadline, reduce scope, get help, overtime. 3) Prioritize critical features (MVP). KEY: Never hide problems. Communicate early. Offer solutions, not just problems.", difficulty: "Medium", tip: "STAR: situation, task, action, result"},
        {q: "Your team lead asks you to implement a feature with a design flaw.", a: "1) Respectfully share concern with specific technical reasoning. 2) Propose alternative with pros/cons. 3) If lead disagrees, document concern and follow decision (they may have context you don't). Voice concerns with data, don't be confrontational, support final decision.", difficulty: "Medium", tip: "Show technical maturity and respect"},
        {q: "Two team members have conflicting ideas. How do you mediate?", a: "1) Hear both sides fully without bias. 2) Identify common ground/shared goals. 3) Objectively evaluate against requirements (scalability, time, complexity). 4) Suggest POC if possible. 5) Escalate to lead if no resolution. Be neutral, use data as deciding factor.", difficulty: "Medium", tip: "Show conflict resolution skills"},
        {q: "A production bug is reported at 11 PM. How do you respond?", a: "1) Acknowledge and assess severity (P1=outage, P2=degraded, P3=minor). 2) For P1: join war room, check logs, identify root cause, hotfix, validate, communicate status. 3) Post-incident: RCA, document fix, add monitoring/tests. Show urgency, structured approach, learning mindset.", difficulty: "Medium", tip: "Show ownership and structured thinking"},
        {q: "Describe a time you took initiative beyond assigned work.", a: "STAR: During internship, noticed deployment was manual/error-prone (Situation). My task was only frontend (Task). Created CI/CD pipeline with GitHub Actions (Action). Reduced deployment from 30 min to 3 min, eliminated errors (Result). Show self-motivation, identify inefficiencies.", difficulty: "Medium", tip: "Even small initiatives count"},
        {q: "Tell me about a time you received harsh criticism.", a: "STAR: Senior developer criticized my DB queries as inefficient (Situation). My task was to improve (Task). Asked for specific feedback, studied optimization, rewrote with proper indexing (Action). Queries ran 10x faster, reviewer acknowledged improvement (Result). Don't take personally, learn and improve.", difficulty: "Medium", tip: "Show growth mindset"},
        {q: "How is AI changing the IT services industry?", a: "1) AI code generation (Copilot, Cursor). 2) Automated testing/QA. 3) AIOps (Ignio by TCS). 4) Customer service automation. 5) Data-driven decisions. TCS investing in GenAI (AI.Cloud, AWS/Azure/GCP partnerships). AI won't replace devs but changes the role — learn prompt engineering, AI integration.", difficulty: "Medium", tip: "Connect to TCS AI initiatives"},

        // === Hard — Analytical & System Thinking ===
        {q: "If TCS needs to process 10 million transactions/day, what factors would you consider?", a: "Architecture: Microservices, message queues (Kafka), load balancers. DB: ~115 TPS avg, ~500+ peak. Sharding, read replicas, caching (Redis). Infra: Auto-scaling (cloud), Multi-AZ, CDN, monitoring (Prometheus/Grafana). Other: Data validation, idempotency, batch processing, DR, security (encryption, rate limiting), compliance.", difficulty: "Hard", tip: "Show breadth of system thinking"},
        {q: "Given 50,000 customer complaints, how would you identify top 3 improvement areas?", a: "1) Data cleaning (remove duplicates, normalize). 2) NLP categorization (billing, service, product). 3) Frequency analysis (Pareto: top 20% cause 80%). 4) Sentiment analysis (weight by severity). 5) Trend analysis (growing categories). 6) Business impact mapping (correlate with churn). Present with visualizations + actionable recommendations.", difficulty: "Hard", tip: "Show structured analytical approach"},
        {q: "Estimate the number of software engineers in India (Fermi estimation).", a: "Population ~1.4B. Working age ~60% = 840M. Labor force ~50% = 420M. IT sector ~5M (NASSCOM). ~60% are devs = ~3M. Cross-check: Top 5 companies alone = ~1.5M. Plus startups + non-IT = roughly double. Estimate: 3-5 million. Show reasoning process, not just number.", difficulty: "Hard", tip: "Show structured estimation approach"},
        {q: "How would you optimize a legacy system with no documentation?", a: "Phase 1: Read code, profiling, add logging, talk to team, generate call graphs. Phase 2: Add monitoring/APM, optimize DB queries, caching, fix N+1s. Phase 3: Write tests first (golden master), refactor incrementally (strangler fig pattern), document as you learn. Phase 4: CI/CD, containerize, gradual migration. Never big-bang rewrite.", difficulty: "Hard", tip: "Show incremental, practical approach"}
    ],
    hr: [
        // === Easy — Introduction & Background ===
        {q: "Tell me about yourself.", a: "Structure (2 min): Name, Branch, College, CGPA. Passion area. Project 1 (tech stack). Project 2. Certifications. Hobby + transferable skill. Why TCS. Keep professional, concise. Recent → relevant past. Don't recite resume. End with why you're here.", difficulty: "Easy", tip: "Practice until natural, not rehearsed"},
        {q: "Why did you choose your engineering branch?", a: "CS: 'Fascinated by how software solves real-world problems. Enjoyed math/logic in school, programming was natural extension. Versatility ensures continuous learning.' Non-CS: 'Discovered passion for programming through [experience]. Self-learned, built projects. Engineering background gives strong analytical skills.'", difficulty: "Easy", tip: "Be genuine about your journey"},
        {q: "Do you have any backlogs?", a: "If no: 'Clear academic record.' If yes: Be honest — 'Had backlog in [subject] due to [honest reason]. Cleared next attempt. Learned importance of consistent study.' KEY: Never lie (TCS verifies). Show what you learned. Demonstrate it's not a pattern.", difficulty: "Easy", tip: "Honesty is critical — TCS verifies"},
        {q: "Are you willing to relocate anywhere in India?", a: "'Yes, completely flexible. I see it as opportunity to experience different cities/cultures. TCS has offices in all major cities, ready to go where needed.' If constraints: mention honestly but show flexibility — 'Open to most locations, slight preference for [city] due to [reason], but business needs first.'", difficulty: "Easy", tip: "Maximum flexibility preferred"},
        {q: "When can you join if selected?", a: "Based on situation: 'Can join immediately after final results in [month]' or 'Available within [X] weeks of offer letter.' Be transparent about timeline. TCS generally allows reasonable joining time for freshers.", difficulty: "Easy", tip: "Be clear and realistic"},

        // === Medium — Company & Role Fit ===
        {q: "Why should we hire you over other candidates?", a: "3 differentiators with evidence: 1) Strong fundamentals (500+ LeetCode, DSA + system design). 2) Project experience (production-quality apps, modern stack). 3) Learning agility (taught self React/Docker in 3 weeks for hackathon, won 2nd place). Be confident not arrogant.", difficulty: "Medium", tip: "Back every claim with evidence"},
        {q: "Are you okay working in any technology TCS assigns?", a: "'Absolutely. While I prefer [area], every technology teaches valuable concepts. Different stacks make me well-rounded. In a services company, adaptability is key.' Mention fundamentals (DSA, design principles) are transferable. Never say 'I only want to work on X.'", difficulty: "Medium", tip: "Show flexibility and adaptability"},
        {q: "Are you comfortable with night shifts for global clients?", a: "'Yes, I understand TCS serves global clients across time zones and shift work is sometimes necessary. I'm prepared for that. I can manage schedule and health effectively during rotations.' Be honest about health concerns if any, but show flexibility.", difficulty: "Medium", tip: "Show understanding of services industry"},
        {q: "What are your salary expectations?", a: "TCS Digital offers 7-9 LPA for freshers. 'I'm aligned with the standard offering and trust TCS's compensation to be fair and market-competitive. My primary focus is learning, growth, and impactful projects.' Don't negotiate aggressively as fresher.", difficulty: "Medium", tip: "Research package beforehand"},
        {q: "Do you have other offers? How will you decide?", a: "If yes: 'Have offer from [company]. Considering learning opportunities, project diversity, career growth, work culture. TCS Digital stands out because [specific reasons].' If no: 'TCS is my top priority. Applied selectively to companies with long-term growth.' Be honest, never use offers as leverage.", difficulty: "Medium", tip: "Show TCS is genuine preference"},
        {q: "Tell me about a leadership role you've held.", a: "STAR: Technical lead of hackathon team (S). Responsible for architecture and delegation (T). Broke 48-hr project into milestones, assigned tasks by strengths, conducted sync-ups (A). Delivered on time, won Best Innovation (R). If no formal role: mention helping juniors, organizing study groups.", difficulty: "Medium", tip: "Informal leadership counts too"},
        {q: "How do you handle stress and pressure?", a: "Break large problems into smaller tasks, prioritize ruthlessly. Use Pomodoro technique. Daily schedule with time blocks during exam/deadline season. Maintain physical health through exercise for mental clarity. Ask for help when needed. Show SPECIFIC strategies, not vague statements.", difficulty: "Medium", tip: "Give concrete examples and techniques"},
        {q: "Describe yourself in three words.", a: "Choose and justify: 'Curious — love understanding how things work under the hood. Persistent — don't give up on hard problems (180-day LeetCode streak). Collaborative — best solutions come from diverse perspectives.' Pick words that are relevant, backed by evidence, authentic.", difficulty: "Medium", tip: "Avoid generic words without stories"},

        // === Hard — Ethics & Decision Making ===
        {q: "If you discovered a colleague violating company policy, what would you do?", a: "Consider severity. Minor issues (dress code, late): mention casually to colleague. Serious violations (data theft, security breach, harassment): follow proper reporting channel — inform manager/HR or use anonymous ethics helpline. Protect company and clients over personal discomfort.", difficulty: "Hard", tip: "Show ethical judgment and proper process"},
        {q: "If you received a better offer after accepting TCS, what would you do?", a: "'Once I accept, it's a commitment. I would honor my acceptance. Breaking commitment is unprofessional and damages reputation. I made my decision based on thorough evaluation and stand by it.' Shows integrity, professionalism, commitment. Companies blacklist candidates who renege.", difficulty: "Hard", tip: "This tests integrity — be firm"},
        {q: "What does professionalism mean to you?", a: "1) Delivering quality work on time. 2) Being accountable — owning mistakes. 3) Respectful communication. 4) Maintaining confidentiality of client data. 5) Continuous self-improvement. 6) Being reliable. In TCS: representing company well at client sites, adapting to client cultures, maintaining trust built over 55+ years.", difficulty: "Hard", tip: "Connect to TCS values and context"},
        {q: "Have you ever faced an ethical dilemma? How did you handle it?", a: "Example: Teammate suggested copying code from another team's repo without attribution. Explained this was plagiarism and could get us disqualified. Suggested studying their approach for inspiration but writing our own with citations. Team agreed, scored well with original work. Show clear boundaries, diplomatic handling.", difficulty: "Hard", tip: "Show ethics without being confrontational"},

        // === Questions to Ask the Interviewer ===
        {q: "[ASK] What does a typical day look like for an SDE fresher at TCS Digital?", a: "Why ask: Shows genuine interest in the role. Helps understand daily expectations. Demonstrates you're already mentally preparing for the job.", difficulty: "Easy", tip: "Shows genuine curiosity about the role"},
        {q: "[ASK] What training programs does TCS offer to freshers?", a: "Context: TCS has ILP (Initial Learning Program). Ask about duration, technologies covered, location, evaluation. Shows eagerness to learn and grow within TCS's structured path.", difficulty: "Easy", tip: "Shows eagerness to learn"},
        {q: "[ASK] What technologies are most in-demand within TCS Digital right now?", a: "Why ask: Shows you want to align learning with company needs. The answer helps you prepare before joining. Demonstrates proactive thinking about adding value.", difficulty: "Easy", tip: "Shows proactive alignment"},
        {q: "[ASK] What are the growth and promotion paths at TCS Digital?", a: "Why ask: Shows long-term thinking and ambition. TCS values employees who plan to grow within the company. Demonstrates you're not just looking for a stepping stone.", difficulty: "Easy", tip: "Shows long-term commitment"},
        {q: "[ASK] How are teams and projects assigned to freshers?", a: "Why ask: Practical question showing maturity. Understanding allocation process helps set expectations. Shows you're thinking practically about joining.", difficulty: "Easy", tip: "Shows maturity and practical thinking"},
        {q: "[ASK] Is there an internal rotation or mobility policy at TCS?", a: "Why ask: Shows desire for diverse experience. TCS has internal job postings (IJP) for lateral moves. Demonstrates career awareness and interest in breadth.", difficulty: "Easy", tip: "Shows desire for growth and variety"}
    ]
};
