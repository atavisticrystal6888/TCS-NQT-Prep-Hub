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

// Interview Questions Data
const INTERVIEW_DATA = {
    technical: [
        {q: "What is the difference between an Array and a Linked List?", a: "Array: Contiguous memory, O(1) random access, fixed size, O(n) insert/delete in middle. Linked List: Non-contiguous nodes with pointers, O(n) access, O(1) insert/delete at known position. Use Array for frequent reads, Linked List for frequent modifications.", difficulty: "Easy"},
        {q: "Explain the four pillars of OOP with examples.", a: "1) Encapsulation: Bundling data+methods, hiding internals (private fields, public getters). 2) Abstraction: Hide complexity, expose interface (abstract class Shape). 3) Inheritance: Child inherits from parent (Dog extends Animal). 4) Polymorphism: Same interface, different behavior — compile-time (overloading) and runtime (overriding).", difficulty: "Easy"},
        {q: "What is the difference between Stack and Queue?", a: "Stack: LIFO (Last In First Out) — push/pop from top. Examples: undo, browser back, function call stack. Queue: FIFO (First In First Out) — enqueue at rear, dequeue from front. Examples: printer queue, BFS, task scheduling. Both have O(1) operations.", difficulty: "Easy"},
        {q: "What is a HashMap? How does it handle collisions?", a: "HashMap stores key-value pairs using a hash function to map keys to bucket indices. Average O(1) for get/put. Collisions (two keys → same index) handled by: 1) Chaining: linked list at each bucket. 2) Open Addressing: linear probing, quadratic probing, double hashing. Java resizes when load factor > 0.75.", difficulty: "Medium"},
        {q: "Explain BFS and DFS. When to use each?", a: "BFS: Level-by-level using Queue. O(V+E). Use for shortest path in unweighted graphs. DFS: Go deep using Stack/recursion. O(V+E). Use for cycle detection, topological sort, maze solving, connected components.", difficulty: "Medium"},
        {q: "What is normalization? Explain 1NF, 2NF, 3NF.", a: "1NF: Atomic values, no repeating groups. 2NF: 1NF + no partial dependencies on composite key. 3NF: 2NF + no transitive dependencies (non-key → non-key). BCNF: Every determinant is a superkey. Purpose: Reduce redundancy, prevent anomalies.", difficulty: "Medium"},
        {q: "Explain the TCP three-way handshake.", a: "1) Client → SYN (seq=x) → Server. 2) Server → SYN+ACK (seq=y, ack=x+1) → Client. 3) Client → ACK (ack=y+1) → Server. Both enter ESTABLISHED state. Teardown: 4-way (FIN, ACK, FIN, ACK).", difficulty: "Medium"},
        {q: "What is a deadlock? Name the four Coffman conditions.", a: "Deadlock: Two+ processes permanently blocked, each waiting for resource held by another. Four conditions (ALL must hold): 1) Mutual Exclusion 2) Hold and Wait 3) No Preemption 4) Circular Wait. Prevention: break any one condition.", difficulty: "Medium"},
        {q: "What is Dynamic Programming? How is it different from Divide and Conquer?", a: "D&C: Independent subproblems, no overlap (Merge Sort, Quick Sort). DP: Overlapping subproblems — store results to avoid recomputation (memoization/tabulation). Examples: Fibonacci, LCS, Knapsack, Coin Change. Top-down (recursion+memo) vs Bottom-up (iterative).", difficulty: "Hard"},
        {q: "Design a URL shortener system.", a: "Generate unique ID (auto-increment/hash), encode to base62 (7 chars = 3.5T URLs). Store in key-value DB (DynamoDB/Redis). Cache popular URLs. Rate limiting. Analytics. Scale: horizontal scaling, pre-generated IDs (Snowflake), CDN for redirects.", difficulty: "Hard"},
        {q: "Explain REST API and HTTP methods.", a: "REST: Stateless, resource-based URLs, standard HTTP methods. GET (read, idempotent), POST (create), PUT (update/replace, idempotent), PATCH (partial update), DELETE (remove, idempotent). Status: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.", difficulty: "Medium"},
        {q: "What is virtual memory?", a: "Allows processes to use more memory than physical RAM by using disk (swap space) as extension. OS maps virtual→physical addresses via page table. Pages loaded on demand. Page fault = load from disk. Benefits: process isolation, larger address space. Drawback: thrashing if excessive.", difficulty: "Medium"}
    ],
    managerial: [
        {q: "Walk me through your most challenging project.", a: "Structure: 1) Project name & objective 2) Your role 3) Technologies used & why 4) Challenge faced 5) How you overcame it 6) Outcome. Be specific, show decision-making, and quantify results where possible.", difficulty: "Easy", tip: "Prepare 2-3 projects with STAR format"},
        {q: "You realize midway you won't meet the deadline. What do you do?", a: "1) Immediately inform lead/manager with specifics (what's done, remaining, blocking). 2) Propose solutions: extend deadline, reduce scope, get help, overtime. 3) Prioritize critical features (MVP approach). KEY: Never hide problems. Communicate early. Offer solutions, not just problems.", difficulty: "Medium", tip: "Use STAR method"},
        {q: "Your team lead asks you to implement something with a design flaw.", a: "1) Respectfully share concern with specific technical reasoning. 2) Propose alternative with pros/cons comparison. 3) If lead disagrees, document concern and follow decision (they may have context you don't). KEY: Voice concerns with data, don't be confrontational, support final decision.", difficulty: "Medium", tip: "Show maturity"},
        {q: "How is AI changing the IT services industry?", a: "1) AI-powered code generation (Copilot, Cursor). 2) Automated testing/QA. 3) AIOps (Ignio by TCS). 4) Customer service automation. 5) Data-driven decisions. TCS is investing heavily in GenAI. Freshers who understand AI integration have advantage.", difficulty: "Medium", tip: "Know TCS AI initiatives"},
        {q: "What do you know about TCS?", a: "Founded 1968, HQ Mumbai. CEO: K. Krithivasan. Revenue: US$31B (FY 2025). ~593K employees. 46 countries. Products: BaNCS (banking), Ignio (AI), Quartz (blockchain). Tagline: 'Building on Belief'. Part of Tata Group.", difficulty: "Easy", tip: "Research TCS.com before interview"},
        {q: "Where do you see yourself in 5 years?", a: "Strong full-stack developer with cloud-native expertise. Contributing to large-scale enterprise projects. Potentially leading a small team. Interested in TCS Digital for cutting-edge tech exposure. Show growth WITHIN the company.", difficulty: "Easy", tip: "Avoid: 'start own company' or 'MBA'"},
        {q: "How do you keep yourself updated with technology?", a: "Tech blogs (Dev.to, Medium), YouTube (Fireship, Traversy Media), Coursera/Udemy. Weekly LeetCode practice. Open-source contributions. Local tech meetups. Recently: GenAI/LLM APIs, Docker.", difficulty: "Easy", tip: "Mention specific recent learnings"}
    ],
    hr: [
        {q: "Tell me about yourself.", a: "Structure (2 min): Name, Branch, College, CGPA. Passion area. Project 1 (tech stack). Project 2. Certifications. Hobby + transferable skill. Why TCS. Keep it professional, concise. End with why you're here.", difficulty: "Easy", tip: "Practice until natural, not rehearsed"},
        {q: "Why should we hire you?", a: "Highlight 3 differentiators with evidence: 1) Strong fundamentals (500+ LeetCode, DSA + system design). 2) Project experience (production-quality apps). 3) Learning agility (taught self new tech for hackathon). Be confident not arrogant.", difficulty: "Medium", tip: "Back every claim with evidence"},
        {q: "What are your salary expectations?", a: "TCS Digital offers 7-9 LPA for freshers. 'I'm aligned with the standard offering and trust TCS's compensation to be fair. My focus is learning, growth, and impactful projects.' Don't negotiate aggressively as fresher.", difficulty: "Medium", tip: "Research package beforehand"},
        {q: "Are you willing to relocate?", a: "'Yes, completely flexible. I see it as opportunity to experience different cities and cultures. TCS has offices in all major cities.' If constraints: mention honestly but show flexibility.", difficulty: "Easy", tip: "Show maximum flexibility"},
        {q: "Do you have other offers?", a: "If yes: mention, compare on learning/growth/culture. Show TCS is genuine preference. If no: 'TCS is my top priority, I applied selectively.' Never use offers as leverage.", difficulty: "Medium", tip: "Be honest, show TCS preference"},
        {q: "How do you handle stress?", a: "Break large problems into smaller tasks. Prioritize ruthlessly. Use Pomodoro technique. Maintain physical health (exercise). Ask for help when needed. Show SPECIFIC strategies, not vague 'I handle stress well.'", difficulty: "Medium", tip: "Give concrete examples"},
        {q: "If you received a better offer after accepting TCS?", a: "'Once I accept, it's a commitment. I would honor my acceptance. Breaking commitment is unprofessional and damages reputation. I made a thorough decision and stand by it.' Shows integrity.", difficulty: "Hard", tip: "This is a test of integrity"},
        {q: "What does professionalism mean to you?", a: "1) Quality work on time. 2) Accountability — owning mistakes. 3) Respectful communication. 4) Confidentiality of client data. 5) Continuous self-improvement. 6) Reliability. In TCS: representing company well at client sites.", difficulty: "Medium", tip: "Connect to TCS values"}
    ]
};
