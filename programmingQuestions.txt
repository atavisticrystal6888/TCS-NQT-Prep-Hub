# TCS NQT Previous Years Programming Questions

## Q1. Odd Occurring Element in O(log N) ■ VERIFIED PYQ [Hard]

**Problem**
Given an array of integers where every element appears an even number of times except one element which appears an odd number of times, find that odd-occurring element in O(log N) time. Conditions: Equal elements must appear in pairs in the array; no more than two consecutive occurrences of any element are allowed. Example of INVALID input (3 consecutive 2s): 7 → 1 1 2 2 2 3 3 Example of VALID input: 5 → 2 2 3 1 1 → Answer: 3

**Constraints**
1 <= N <= 10**5 (N is always odd)

**Sample Input**
```text
5
2 2 3 1 1
```

**Sample Output**
```text
3
```

**Explanation**
Element 3 appears once (odd), while 2 and 1 each appear twice (even).

**Hint**
Binary search: if mid index is even and arr[mid]==arr[mid+1], the odd one is to the right; else to the left.

---

## Q2. Count Subsets with Given Sum ■ VERIFIED PYQ [Hard]

**Problem**
Given an array of integers and a target sum S, count all subsets of the array whose elements sum equals S. Since the result can be very large, print the value modulo 10^9+7. Input: First line = T (test cases). Each test case: first line = n (array size), second line = n space-separated integers, third line = target sum.

**Constraints**
1<=T<=100, 1<=n<=10**3, 1<=a[i]<=10**3, 1<=sum<=10**3

**Sample Input**
```text
2
6
2 3 5 6 8 10
10
5
1 2 3 4 5
10
```

**Sample Output**
```text
3
3
```

**Explanation**
Test 1: subsets (2,3,5), (2,8), (10) = 3. Test 2: (1,2,3,4), (2,3,5), (1,4,5) = 3

**Hint**
DP approach: dp[i][j] = number of subsets of first i elements that sum to j. Or use bitmask for small n.

---

## Q3. Chocolate Packets — Move Empty Packets to End ■ VERIFIED PYQ [Easy]

**Problem**
A factory produces N chocolate packets. Empty (defective) packets are represented as 0. Push all empty packets (0s) to the end of the array while maintaining the relative order of non-zero (filled) packets. Input: First line = N (number of packets). Second line = N space-separated integers.

**Constraints**
1 <= N <= 10**5

**Sample Input**
```text
8
4 5 0 1 9 0 5 0
```

**Sample Output**
```text
4 5 1 9 5 0 0 0
```

**Hint**
Use a write pointer j=0. Copy non-zero elements to arr[j++]. Fill remaining indices with 0.

---

## Q4. COVID Handshake Problem ■ VERIFIED PYQ [Easy]

**Problem**
Before the outbreak of coronavirus, a meeting took place in Wuhan. A person who attended had COVID-19 and everyone shook hands with everyone else exactly once. Given N people in the room, find the total number of handshakes. Input: First line = T (test cases). Each following line = N (number of people).

**Constraints**
1<=T<=1000, 0<N<10**6

**Sample Input**
```text
2
1
2
```

**Sample Output**
```text
0
1
```

**Explanation**
1 person → 0 handshakes. 2 people → 1 handshake. Formula: N*(N-1)/2

**Hint**
Total handshakes = N*(N-1)/2. Use long long to avoid overflow for large N.

---

## Q5. Book Exchange — Derangement Count ■ VERIFIED PYQ [Hard]

**Problem**
A teacher distributes N books to N students and wants to exchange them weekly so every student gets a different book (not their own). Find the total number of valid exchanges (derangements) modulo 10^7+7. Example: N=4 → 9 valid exchanges (no student gets their original book).

**Constraints**
1 <= N <= 1000000

**Sample Input**
```text
4
```

**Sample Output**
```text
9
```

**Hint**
Derangement recurrence: D(n) = (n-1) * (D(n-1) + D(n-2)). Base: D(1)=0, D(2)=1.

---

## Q6. XOR Coin Denomination (Story-Based) ■ VERIFIED PYQ [Easy]

**Problem**
A shopkeeper has coins of several denominations. Initially there are an even number of coins of each type. One coin is lost. Find the denomination of the lost coin. Input: First line = N (total coins remaining). Second line = N space-separated coin values.

**Constraints**
1 <= N <= 10**5 (N is always odd after the loss)

**Sample Input**
```text
7
1 1 2 2 3 3 4
```

**Sample Output**
```text
4
```

**Explanation**
XOR of all values: 1^1^2^2^3^3^4 = 4. The lone coin is the lost denomination.

**Hint**
XOR all elements. All paired coins cancel to 0; only the odd-occurring denomination remains.

---

## Q7. Income, Expenditure and Savings Tracker ■ VERIFIED PYQ [Medium]

**Problem**
Write a program that continuously takes user input: - Income (amount earned) - Type of Material (category of expenditure) - Expenditure on that Material (amount spent) The input continues until the user enters "done". Then display: 1. Total income 2. Total savings (Income - Total Expenditure) 3. List of where money was spent with respective amounts

**Sample Input**
```text
5000
Food
1200
Rent
2000
done
```

**Sample Output**
```text
Total Income: 5000
Total Savings: 1800
Food: 1200
Rent: 2000
```

**Hint**
Use a dictionary to track expenditure categories. Sum all expenditures for savings calculation.

---

## Q8. Reverse Words in a Sentence ■ VERIFIED PYQ [Easy]

**Problem**
Given a sentence, reverse each word individually while keeping the word order intact. Example: "Hello World" becomes "olleH dlroW"

**Sample Input**
```text
Hello World TCS
```

**Sample Output**
```text
olleH dlroW SCT
```

**Hint**
Split by space, reverse each word using slicing [::-1], join back with space.

---

## Q9. Count Vowels, Consonants, Spaces and Special Characters ■ VERIFIED PYQ [Easy]

**Problem**
Given a string, count and display: - Number of vowels (a,e,i,o,u — case insensitive) - Number of consonants - Number of spaces - Number of special characters

**Sample Input**
```text
Hello World! 123
```

**Sample Output**
```text
Vowels: 3
Consonants: 7
Spaces: 2
Special: 4
```

**Hint**
Loop through each character. Check: is it in vowel set? is it alpha (consonant)? is it space? else special.

---

## Q10. Check Palindrome (Case-Insensitive) ■ VERIFIED PYQ [Easy]

**Problem**
Given a string, check if it is a palindrome. Ignore spaces and case while checking.

**Sample Input**
```text
Race Car
```

**Sample Output**
```text
YES
```

**Hint**
Remove spaces, convert to lowercase, compare with its reverse.

---

## Q11. Armstrong Number Check ■ VERIFIED PYQ [Easy]

**Problem**
A number is an Armstrong number if the sum of its own digits, each raised to the power of the number of digits, equals the original number. Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ✓

**Sample Input**
```text
153
```

**Sample Output**
```text
YES
```

**Hint**
Count digits n. Sum each digit^n. Compare with original.

---

## Q12. Second Largest Number in Array ■ VERIFIED PYQ [Easy]

**Problem**
Find the second largest distinct element in an array of N integers.

**Constraints**
2 <= N <= 10**5

**Sample Input**
```text
5
4 2 9 1 9
```

**Sample Output**
```text
4
```

**Hint**
Use two variables: largest and second_largest. Traverse once. Handle duplicate largest values.

---

## Q13. Leap Year Check ■ VERIFIED PYQ [Easy]

**Problem**
Given a year Y, determine whether it is a leap year or not. Rules: Divisible by 4 AND (not divisible by 100 OR divisible by 400).

**Sample Input**
```text
2024
```

**Sample Output**
```text
YES
```

**Hint**
if (Y%4==0 and Y%100!=0) or (Y%400==0): print YES else NO

---

## Q14. Binary Number Conversion ■ VERIFIED PYQ [Easy]

**Problem**
Given a decimal number N, convert it to binary representation. (TCS also asks: decimal to octal, decimal to hexadecimal — practice all three.)

**Sample Input**
```text
10
```

**Sample Output**
```text
1010
```

**Hint**
Repeatedly divide by 2, collect remainders. Print remainders in reverse.

---

## Q15. GCD and LCM ■ VERIFIED PYQ [Easy]

**Problem**
Find the GCD (Greatest Common Divisor) and LCM (Least Common Multiple) of two numbers.

**Sample Input**
```text
12 18
```

**Sample Output**
```text
GCD: 6
LCM: 36
```

**Hint**
Use Euclidean algorithm for GCD: gcd(a,b) = gcd(b, a%b). LCM = (a*b) / gcd(a,b).

---

## Q16. Digit Sum (Repeatedly Until Single Digit) ■ VERIFIED PYQ [Easy]

**Problem**
Given a number N, repeatedly sum its digits until you get a single digit. Print that digit. Example: 9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2

**Sample Input**
```text
9875
```

**Sample Output**
```text
2
```

**Hint**
Digital root formula: 1 + (n-1)%9 for n>0. Or loop: while n>=10: n = sum of digits.

---

## Q17. 26 April 2024 Shift 1 — Average Sales Calculation ■ VERIFIED PYQ [Easy]

**Problem**
A shopkeeper has N items for sale. Each item has a name, price per unit, and quantity. Calculate the average sales value across all items. Average Sales = (Sum of price * quantity for all items) / N Input: First line = N. Next N lines: item_name price quantity

**Sample Input**
```text
3
apple 1.0 5
orange 10.0 5
kiwi 10.0 2
```

**Sample Output**
```text
Average Sales: 25.0
```

**Explanation**
Sales: 1*5=5, 10*5=50, 10*2=20 → Total=75 → Average=75/3=25.0

**Hint**
Read each item, compute price*qty, accumulate total, divide by N. Use float division.

---

## Q18. 26 April 2024 Shift 2 — Number Pattern Series ■ VERIFIED PYQ [Easy]

**Problem**
Two number series are interleaved: Series A: 1, 2, 3, 4, 5, ... (natural numbers) Series B: 1, 4, 9, 16, 25, ... (perfect squares) Merged: 1, 1, 2, 4, 3, 9, 4, 16, 5, 25, ... Given N, find the Nth term of the merged series.

**Sample Input**
```text
7
```

**Sample Output**
```text
4
```

**Explanation**
Position 7: odd → (7+1)/2 = 4th natural number = 4

**Hint**
If N is odd: answer = (N+1)//2. If N is even: answer = (N//2)^2.

---

## Q19. 29 April 2024 Shift 1 — Smallest Number in Array ■ VERIFIED PYQ [Easy]

**Problem**
Given an array of N integers, find the smallest element. Input: First line = N. Second line = N space-separated integers.

**Sample Input**
```text
5
7 3 1 9 4
```

**Sample Output**
```text
1
```

**Hint**
Track minimum using a variable. Update whenever a smaller element is found. O(N) time.

---

## Q20. 3 May 2024 Shift 1 — Sorting Algorithm (Bubble Sort) ■ VERIFIED PYQ [Easy]

**Problem**
Sort an array of N integers in ascending order using Bubble Sort. Input: First line = N. Second line = N space-separated integers.

**Sample Input**
```text
5
64 25 12 22 11
```

**Sample Output**
```text
11 12 22 25 64
```

**Hint**
Outer loop N-1 times. Inner loop compares adjacent pairs. Swap if arr[i]>arr[i+1]. Stop early if no swaps.

---

## Q21. 8 May 2024 Shift 2 — Prime Number Check ■ VERIFIED PYQ [Easy]

**Problem**
Given a number N, check whether it is prime or not. Input: A single integer N.

**Sample Input**
```text
17
```

**Sample Output**
```text
YES
```

**Hint**
Loop from 2 to sqrt(N). If any number divides N → not prime. Handle N=1 as special case (not prime).

---

## Q22. 9 May 2024 Shift 1 — Remove Duplicates from Array ■ VERIFIED PYQ [Easy]

**Problem**
Remove all duplicate elements from an array and print the unique elements in the order they first appeared.

**Sample Input**
```text
7
1 3 2 1 4 3 5
```

**Sample Output**
```text
1 3 2 4 5
```

**Hint**
Use a HashSet/dictionary to track seen elements. Add to result only if not seen before.

---

## Q23. 14 May 2024 Shift 1 — Fibonacci Series ■ VERIFIED PYQ [Easy]

**Problem**
Find the Nth Fibonacci number. F(1)=1, F(2)=1, F(N)=F(N-1)+F(N-2).

**Sample Input**
```text
10
```

**Sample Output**
```text
55
```

**Hint**
Iterative DP: a=1, b=1, loop from 3 to N: c=a+b, a=b, b=c. Return b.

---

## Q24. 14 May 2024 Shift 2 — Pattern: Right-Angle Triangle of Numbers ■ VERIFIED PYQ [Easy]

**Problem**
Print a right-angled triangle pattern of numbers for N rows: Row 1: 1 Row 2: 1 2 Row 3: 1 2 3 ... Row N: 1 2 3 ... N

**Sample Input**
```text
4
```

**Sample Output**
```text
1
1 2
1 2 3
1 2 3 4
```

**Hint**
Outer loop i from 1 to N. Inner loop j from 1 to i. Print j with space, newline after inner loop.

---

## Q25. Rotate Array Left by K Positions ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Given an array of N elements, rotate it to the left by K positions.

**Sample Input**
```text
5 2
1 2 3 4 5
```

**Sample Output**
```text
3 4 5 1 2
```

**Hint**
Reverse method: reverse first K, reverse last N-K, reverse whole array.

---

## Q26. Find Missing Number in 1 to N+1 ■ PRACTICE (Pattern-Based) [Easy]

**Problem**
An array contains N distinct integers taken from 1 to N+1 (one number is missing). Find it.

**Sample Input**
```text
5
1 2 4 5 6
```

**Sample Output**
```text
3
```

**Hint**
Expected sum = (N+1)*(N+2)/2. Subtract actual sum. Difference is the missing number.

---

## Q27. Sort Array of 0s, 1s and 2s (Dutch National Flag) ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Sort an array containing only 0s, 1s and 2s in a single traversal without extra space.

**Sample Input**
```text
6
0 1 2 1 0 2
```

**Sample Output**
```text
0 0 1 1 2 2
```

**Hint**
Three pointers: low=0, mid=0, high=n-1. Swap based on value at arr[mid].

---

## Q28. Maximum Subarray Sum (Kadane's Algorithm) ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Find the sum of the contiguous subarray with the maximum sum.

**Sample Input**
```text
6
-2 1 -3 4 -1 2
```

**Sample Output**
```text
5
```

**Hint**
current_sum = max(arr[i], current_sum + arr[i]). max_sum = max(max_sum, current_sum).

---

## Q29. Check if Two Strings are Anagrams ■ PRACTICE (Pattern-Based) [Easy]

**Problem**
Given two strings, check if they are anagrams of each other (contain same characters same number of times).

**Sample Input**
```text
listen
silent
```

**Sample Output**
```text
YES
```

**Hint**
Sort both strings and compare, OR use a frequency array of size 26.

---

## Q30. Longest Substring Without Repeating Characters ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Given a string, find the length of the longest substring that has no repeating characters.

**Sample Input**
```text
abcabcbb
```

**Sample Output**
```text
3
```

**Explanation**
Longest substring without repeat: "abc" (length 3)

**Hint**
Sliding window + HashSet. Expand right pointer; when duplicate found, shrink left pointer.

---

## Q31. Find Maximum Occurring Character ■ PRACTICE (Pattern-Based) [Easy]

**Problem**
Find the character that appears most frequently in a string. If tie, print the lexicographically smallest.

**Sample Input**
```text
programming
```

**Sample Output**
```text
g
```

**Hint**
Frequency array of size 26. Track max frequency. In case of tie, smaller index wins.

---

## Q32. Pascal's Triangle ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Print Pascal's Triangle for N rows.

**Sample Input**
```text
4
```

**Sample Output**
```text
1
1 1
1 2 1
1 3 3 1
```

**Hint**
Each row i: C(i,j) = C(i-1,j-1) + C(i-1,j). Print with leading spaces for formatting.

---

## Q33. Sum of Digits of a Number ■ PRACTICE (Pattern-Based) [Easy]

**Problem**
Given a number N, find the sum of all its digits.

**Sample Input**
```text
1234
```

**Sample Output**
```text
10
```

**Hint**
While N>0: digit = N%10, sum+=digit, N=N//10.

---

## Q34. Sieve of Eratosthenes — All Primes up to N ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Print all prime numbers from 2 to N using Sieve of Eratosthenes.

**Sample Input**
```text
20
```

**Sample Output**
```text
2 3 5 7 11 13 17 19
```

**Hint**
Create bool array size N+1. Mark multiples of each prime (starting from 2) as composite.

---

## Q35. Subset Sum Problem (DP) ■ VERIFIED PYQ [Hard]

**Problem**
Given an array and a target sum S, determine if there exists a subset with sum equal to S.

**Sample Input**
```text
5 9
3 1 4 2 2
```

**Sample Output**
```text
YES
```

**Hint**
DP: dp[j] = True if sum j is achievable. For each element, update dp from right to left.

---

## Q36. Longest Common Subsequence (LCS) ■ PRACTICE (Pattern-Based) [Hard]

**Problem**
Given two strings, find the length of their Longest Common Subsequence (LCS).

**Sample Input**
```text
ABCBDAB
BDCABA
```

**Sample Output**
```text
4
```

**Explanation**
LCS = BCBA (length 4)

**Hint**
dp[i][j] = LCS of s1[:i] and s2[:j]. If chars match: dp[i][j]=dp[i-1][j-1]+1, else max(left, up).

---

## Q37. Minimum Coin Change ■ PRACTICE (Pattern-Based) [Hard]

**Problem**
Given coin denominations and a target amount, find the minimum number of coins needed.

**Sample Input**
```text
3 11
1 5 6
```

**Sample Output**
```text
2
```

**Explanation**
5+6=11, using 2 coins

**Hint**
DP: dp[0]=0, dp[i]=min(dp[i-c]+1) for each coin c. Initialize dp with infinity.

---

## Q38. Cycle Detection in Linked List (Floyd's Algorithm) ■ PRACTICE (Pattern-Based) [Medium]

**Problem**
Given a linked list, detect if there is a cycle. Print "Cycle Detected" or "No Cycle".

**Sample Input**
```text
1 -> 2 -> 3 -> 4 -> 2 (cycle back to node 2)
```

**Sample Output**
```text
Cycle Detected
```

**Hint**
Slow pointer moves 1 step, fast pointer moves 2 steps. If they meet → cycle. If fast=NULL → no cycle.

---

## Q39. 8 May 2024 (Basic) — Closest Multiple of Y to X ■ VERIFIED PYQ [Easy]

**Problem**
Given two integers X and Y, find the multiple of Y that is closest to X. If there are two equally close multiples, return the larger one.

**Constraints**
-10**5 < x < 10**5, Y > 0

**Sample Input**
```text
15
4
```

**Sample Output**
```text
16
```

**Explanation**
Multiples of 4 near 15: 12 and 16. Distance: |15-12|=3, |15-16|=1. Closest = 16.

**Hint**
lower = (x//y)*y, upper = lower+y. Compare abs(x-lower) vs abs(x-upper). Return closer (upper if tie).

---

## Q40. 8 May 2024 (Advanced) — Password Validator + Caesar Cipher ■ VERIFIED PYQ [Medium]

**Problem**
Take a string "password" as input and perform two operations: VALIDATE: Check that the password satisfies ALL of these conditions: 1. Length >= 8 2. Contains at least one digit (0-9) 3. Contains at least one special character 4. Contains at least one uppercase letter 5. Contains at least one lowercase letter If ANY condition fails, print "Error!" ENCRYPT (only if valid): Apply Caesar Cipher — shift each character and digit by N positions. Input n (shift integer) after the password. Wrap around: Z+1=A, 9+1=0. Return the encrypted string. Example: password = "T@nuJ@in13", n=2 → "VBpwLBkp35"

**Constraints**
1 <= n <= 25

**Sample Input**
```text
T@nuJ@in13
2
```

**Sample Output**
```text
VBpwLBkp35
```

**Hint**
Use regex or manual checks for validation. For encryption, handle uppercase, lowercase, digit separately with modular arithmetic.

---

## Q41. 26 April 2024 — All Subarrays with Sum Equal to K ■ VERIFIED PYQ [Medium]

**Problem**
Find and print all contiguous subarrays of a given array whose elements sum equals K. Note: Input format is unusual — integers separated by spaces, with a comma before K. Example input line: 1 2 3 4 5 -4 -3 ,10 (comma separates array from K) Print each qualifying subarray on a separate line.

**Sample Input**
```text
1 2 3 4 ,6
```

**Sample Output**
```text
1 2 3
2 4
6
```

**Note**
The ambiguous I/O format is intentional — TCS NQT sometimes has unclear input specs. Practice parsing!

**Hint**
Parse input until non-integer char (comma). Use brute force O(N^2): for each i, sum from i to j until sum>=K.

---

## Q42. 29 April 2024 Kolkata (Q1) — Fibonacci Sum up to N Terms ■ VERIFIED PYQ [Easy]

**Problem**
Generate the Fibonacci series and find the sum of its elements up to N terms. F(1)=1, F(2)=1, F(n)=F(n-1)+F(n-2). Print the sum of first N Fibonacci numbers.

**Sample Input**
```text
7
```

**Sample Output**
```text
33
```

**Explanation**
Fibonacci: 1,1,2,3,5,8,13. Sum = 1+1+2+3+5+8+13 = 33

**Hint**
Generate Fibonacci iteratively. Accumulate the sum as you go. O(N) time O(1) space.

---

## Q43. 29 April 2024 Kolkata (Q2) — Distinct Bitwise OR of Subarrays ■ VERIFIED PYQ [Hard]

**Problem**
Given an integer array, find the number of distinct values that can be obtained as the bitwise OR of any contiguous subarray of the array.

**Sample Input**
```text
4
1 2 3 2
```

**Sample Output**
```text
4
```

**Explanation**
OR values: {1},{2},{3},{2},{1,2}=3,{2,3}=3,{3,2}=3,{1,2,3}=3,{2,3,2}=3,{1,2,3,2}=3 → distinct={1,2,3,3}={1,2,3} + full=3 → set={1,2,3,3}→ actually {1,2,3} = 3 distinct values plus 0... check.

**Hint**
For each starting index i, maintain running OR. Add each OR to a HashSet. Return set size. O(N^2).

---

## Q44. Two-Wheeler and Four-Wheeler Production (Scenario-Based) ■ VERIFIED PYQ [Easy]

**Problem**
An automobile company manufactures both two-wheelers (TW) and four-wheelers (FW). Given: - Total number of vehicles (TW + FW) = V - Total number of wheels = W Find how many two-wheelers and four-wheelers need to be manufactured. Print "INVALID INPUT" if the inputs don't satisfy valid constraints (e.g. negative counts). Formula: TW + FW = V and 2*TW + 4*FW = W Solve: FW = (W - 2V) / 2, TW = V - FW

**Constraints**
V > 0, W > 0, W must be even, FW and TW must be non-negative integers

**Sample Input**
```text
12
32
```

**Sample Output**
```text
TW = 8
FW = 4
```

**Explanation**
FW=(32-24)/2=4, TW=12-4=8. Verify: 8+4=12 vehicles, 16+16=32 wheels. Correct!

**Hint**
Check: if (W-2V) is negative or odd or FW > V → print INVALID INPUT.

---

## Q45. MPCS Fitness Test — Average Oxygen Level of Trainees ■ VERIFIED PYQ [Medium]

**Problem**
A batch of 3 trainees runs for 3 rounds. Record their oxygen level after every round (value must be between 1 and 100, else re-prompt). After all rounds, calculate each trainee's average oxygen level and select the trainee(s) with the highest average as "most fit". If all averages are below 70, declare "All trainees are unfit." Round average oxygen values before comparing.

**Sample Input**
```text
95 88 91
78 82 85
70 75 72
```

**Sample Output**
```text
Most fit trainee: 1
Average Oxygen Level: 91.33
```

**Hint**
2D array 3x3. For each trainee, compute average. Find max average. Print all trainees achieving that max. If max < 70 → unfit.

---

## Q46. Caesar Cipher (Custom — With Digits) ■ VERIFIED PYQ [Medium]

**Problem**
Implement a Caesar Cipher that works on both alphabets AND digits. Given a plaintext string and a key K (shift value 1-25): - Uppercase letters: shift within A-Z (wrap around) - Lowercase letters: shift within a-z (wrap around) - Digits (0-9): shift within 0-9 (wrap around) - Special characters: remain unchanged Example: Key=2, "Hello World! 5" → "Jgnnq Yqtnf! 7"

**Constraints**
1 <= K <= 25

**Sample Input**
```text
Hello World! 5
2
```

**Sample Output**
```text
Jgnnq Yqtnf! 7
```

**Hint**
For each char: if upper, chr((ord(c)-65+K)%26+65). If lower, chr((ord(c)-97+K)%26+97). If digit, chr((ord(c)-48+K)%10+48). Else unchanged.

---

## Q47. Matrix Addition ■ VERIFIED PYQ [Easy]

**Problem**
Given two N x M matrices A and B of the same size, compute and print their sum matrix C where C[i][j] = A[i][j] + B[i][j].

**Sample Input**
```text
2 2
1 2
3 4
1 1
1 1
```

**Sample Output**
```text
2 3
4 5
```

**Hint**
Read both matrices. Use nested loops: C[i][j] = A[i][j] + B[i][j]. Print row by row.

---

## Q48. Reverse a String Without Built-In Functions ■ VERIFIED PYQ [Easy]

**Problem**
Reverse a given string without using any built-in reverse functions or slicing.

**Sample Input**
```text
Hello World
```

**Sample Output**
```text
dlroW olleH
```

**Hint**
Use a loop from len(s)-1 down to 0, build result string. Or swap in-place with two pointers.

---

## Q49. Check if Number is Perfect ■ VERIFIED PYQ [Easy]

**Problem**
A perfect number equals the sum of its proper divisors (excluding itself). Check if a given number N is perfect. Example: 28 = 1 + 2 + 4 + 7 + 14 = 28 → Perfect

**Sample Input**
```text
28
```

**Sample Output**
```text
YES
```

**Hint**
Loop from 1 to N//2. Sum all divisors. Compare to N. Edge case: N=1 is not perfect.

---

## Q50. Count Frequency of Each Element in Array ■ VERIFIED PYQ [Easy]

**Problem**
Given an array of N integers, count and print the frequency of each unique element in the order they first appear.

**Sample Input**
```text
6
1 2 2 3 1 4
```

**Sample Output**
```text
1 occurs 2 times
2 occurs 2 times
3 occurs 1 times
4 occurs 1 times
```

**Hint**
Use OrderedDict or list of seen elements + dict to preserve first-occurrence order.

---

## Q63. Chocolate Factory — Push Zeros to End ■ VERIFIED PYQ [Easy]

**Problem**
A chocolate factory packs chocolates into an array of N integers. 0 = empty packet. Push all zeros to END while keeping order of non-zero elements.

**Constraints**
1<=N<=100

**Sample Input**
```text
8
4
5
0
1
9
0
5
0
```

**Sample Output**
```text
4 5 1 9 5 0 0 0
```

**Explanation**
arr=[4,5,0,1,9,0,5,0]. Three zeros move to end.

**Hint**
Collect non-zeros first, then append zeros. Or two-pointer approach in O(N).

---

## Q64. Toggle All Bits After MSB (Including MSB) ■ VERIFIED PYQ [Easy]

**Problem**
Given positive integer N, convert to binary and toggle ALL bits (including MSB). Print resulting integer.

**Constraints**
1<=N<=100

**Sample Input**
```text
10
```

**Sample Output**
```text
5
```

**Explanation**
10 = 1010 binary. Toggle all 4 bits = 0101 = 5.

**Hint**
k = (1 << (floor(log2(N))+1)) - 1. Answer = N XOR k.

---

## Q65. Count Sundays in N Days from a Given Start Day ■ VERIFIED PYQ [Easy]

**Problem**
Given start day as string (mon/tue/wed/thu/fri/sat/sun) and N (number of days), count how many Sundays fall within N days.

**Sample Input**
```text
mon
13
```

**Sample Output**
```text
2
```

**Explanation**
Starting Monday: first Sunday in 6 days, next in 13 days. Total = 2.

**Hint**
Map: mon=6,tue=5,wed=4,thu=3,fri=2,sat=1,sun=0. If N >= days_to_sun: ans = 1 + (N - days_to_sun)//7

---

## Q66. Airport Security — Sort Items by Risk (0, 1, 2) ■ VERIFIED PYQ [Easy]

**Problem**
Items confiscated at airport have risk levels 0, 1, or 2. Sort the N-element array in ascending order of risk. Classic Dutch National Flag problem.

**Sample Input**
```text
7
1
0
2
0
1
0
2
```

**Sample Output**
```text
0 0 0 1 1 2 2
```

**Hint**
Dutch National Flag: 3 pointers low/mid/high. O(N) time. Or: count 0s, 1s, 2s and rebuild.

---

## Q67. Count Elements Greater Than All Previous Elements ■ VERIFIED PYQ [Easy]

**Problem**
Given array of N integers, count elements strictly greater than ALL previous elements. First element always counts.

**Constraints**
1<=N<=20, 1<=arr[i]<=10000

**Sample Input**
```text
5
7
4
8
2
9
```

**Sample Output**
```text
3
```

**Explanation**
arr=[7,4,8,2,9]. 7=first(count), 8>7(count), 9>8(count). Total=3.

**Hint**
Track running max. Count++ whenever element > max_so_far, update max.

---

## Q68. Supermarket Scanner — Product of All Digits ■ VERIFIED PYQ [Easy]

**Problem**
A product has code N printed on it. The price = product (multiplication) of all digits of N. Given N, compute and print the price.

**Sample Input**
```text
5244
```

**Sample Output**
```text
160
```

**Explanation**
5*2*4*4 = 160

**Hint**
for ch in str(N): product *= int(ch). Works for any length.

---

## Q69. Curtain Factory — Max Aqua Curtains in Any Box ■ VERIFIED PYQ [Easy]

**Problem**
String of a/b chars (N length). Pack into boxes of L chars. Find box with MAXIMUM number of 'a' chars. Leftover chars after N//L groups form another box.

**Constraints**
1<=L<=10, 1<=N<=50

**Sample Input**
```text
bbbaaababa
3
```

**Sample Output**
```text
3
```

**Explanation**
Groups of 3: bbb, aaa, bab, a. Max a count = 3 (group 2).

**Hint**
chunk string in groups of L using range(0,len(s),L). Count 'a' in each chunk. Return max.

---

## Q51. Weekly Exercise Summary ■ VERIFIED PYQ [Easy]

**Problem**
Design a weekly exercise summary. Take number of minutes of daily exercise for 7 consecutive days as input. Calculate: 1. Total exercise duration for the week 2. Average daily workout duration (round to nearest integer)

**Sample Input**
```text
45
15
30
15
5
10
20
```

**Sample Output**
```text
Exercise summary
Total exercise duration : 140 (minutes)
Average daily exercise duration: 20 minutes
```

**Hint**
Sum all 7 values. Average = total // 7 (integer division for rounding). Print formatted output.

---

## Q52. Count Palindrome Numbers in Range M to N ■ VERIFIED PYQ [Easy]

**Problem**
Given two integers M and N (M <= N), count how many numbers in the range [M, N] (inclusive) are palindromes. A palindrome number reads the same forwards and backwards. Example: 11, 121, 131, 9 are palindromes.

**Constraints**
M <= N, both non-negative integers

**Sample Input**
```text
10
20
```

**Sample Output**
```text
1
```

**Explanation**
Only 11 is a palindrome between 10 and 20.

**Hint**
For each number i from M to N: convert to string, check if str(i)==str(i)[::-1]. Count matches.

---

## Q53. Train Travel Time on Bridge ■ VERIFIED PYQ [Easy]

**Problem**
A train covers a total distance of 800 meters (400m track length + 400m bridge length). Given the speed of the train in km/hr, calculate the time taken to completely cross the bridge in seconds. Formula: Time (seconds) = (Total Distance in metres / Speed in m/s) Convert km/hr to m/s by multiplying by (5/18).

**Sample Input**
```text
72
```

**Sample Output**
```text
40
```

**Explanation**
Speed = 72 * 5/18 = 20 m/s. Time = 800/20 = 40 seconds.

**Hint**
speed_ms = speed_kmh * 5/18. time = 800 / speed_ms. Print as integer.

---

## Q54. Split Array with Equal Averages ■ VERIFIED PYQ [Medium]

**Problem**
Given an array of N integers, check if it can be split into two non-empty contiguous parts such that both parts have equal averages. Print "true" if possible, "false" otherwise.

**Sample Input**
```text
4
1 2 3 4
```

**Sample Output**
```text
false
```

**Hint**
For each split point i (1 to n-1): check if leftSum*(n-i) == rightSum*i. If yes for any i, return true.

---

## Q55. Perfect Donation Amount ■ VERIFIED PYQ [Easy]

**Problem**
A charity accepts donations only in "perfect" amounts. A perfect number equals the sum of all its proper divisors (excluding itself). Given a donation amount N, check if it is a perfect number. Print true or false. Example: 28 = 1+2+4+7+14 = 28 → perfect. 6 = 1+2+3 = 6 → perfect.

**Sample Input**
```text
28
```

**Sample Output**
```text
true
```

**Hint**
Sum divisors from 1 to sqrt(N). For each i dividing N, add both i and N/i (if different). Exclude N itself.

---

## Q56. Inventory Frequency Counter ■ VERIFIED PYQ [Easy]

**Problem**
Given a string of space-separated item names (inventory), count how many times each item appears. If the input contains any digit, print "Invalid input" and stop. Print each item and its count.

**Sample Input**
```text
apple banana apple orange banana apple
```

**Sample Output**
```text
apple 3
banana 2
orange 1
```

**Note**
If input contains digits e.g. "apple123 banana" → print "Invalid input"

**Hint**
Split by space. Check each char — if digit found, print Invalid input and return. Else use dict to count frequency.

---

## Q57. Calculate Speed from Distance and Time ■ VERIFIED PYQ [Easy]

**Problem**
A car travels a fixed distance of 1000 meters. Given the time taken in seconds, calculate the speed of the car in km/hr. Formula: Speed (m/s) = Distance / Time. Convert m/s to km/hr by multiplying by (18/5).

**Sample Input**
```text
50
```

**Sample Output**
```text
72.0
```

**Explanation**
Speed = 1000/50 = 20 m/s = 20 * 18/5 = 72.0 km/hr

**Hint**
speed_ms = 1000.0 / time. speed_kmh = speed_ms * 18/5. Print as float.

---

## Q58. Jump Game — Can You Reach the End? ■ VERIFIED PYQ [Medium]

**Problem**
Given an array where each element represents the maximum number of steps you can jump forward from that position, determine if you can reach the last index starting from index 0. Print "true" if reachable, "false" otherwise.

**Sample Input**
```text
2,3,1,1,4
```

**Sample Output**
```text
true
```

**Explanation**
From index 0 jump 2 → index 2. From index 2 jump 1 → index 3. From index 3 jump 1 → last index.

**Hint**
Track maxReach. For each index i <= maxReach: maxReach = max(maxReach, i+nums[i]). If maxReach >= n-1, return true.

---

## Q59. 6 May 2024 Shift 1 — Count Subarrays with Sum = K ■ VERIFIED PYQ [Medium]

**Problem**
Given a sequence of integers "nums" and an integer K, find the total count of contiguous subarrays whose elements sum equals exactly K. Input: comma-separated integers followed by comma then K value.

**Constraints**
1 <= len(nums) <= 2*10**4, -1000 <= nums[i] <= 1000

**Sample Input**
```text
1 2 3 4 5 -4 -3 ,10
```

**Sample Output**
```text
2
```

**Explanation**
Subarrays summing to 10: [1,2,3,4] and [3,4,5,-4,-3+10... check carefully with prefix sum]

**Hint**
Use prefix sum + hashmap. For each index, check count of (prefix_sum - K) in map. O(N) time.

---

## Q60. 6 May 2024 Shift 2 — First Non-Repeating Character ■ VERIFIED PYQ [Easy]

**Problem**
Given a string, find the first character that does not repeat. If all characters repeat, print -1.

**Sample Input**
```text
aabbcde
```

**Sample Output**
```text
c
```

**Hint**
Use OrderedDict or two-pass: first build frequency dict, then scan string left-to-right for freq==1.

---

## Q61. Toggle Bits — Number of Bits to Flip ■ VERIFIED PYQ [Easy]

**Problem**
Given two integers A and B, find the number of bits that need to be flipped to convert A to B. (i.e., count the number of set bits in A XOR B)

**Sample Input**
```text
10 20
```

**Sample Output**
```text
4
```

**Explanation**
10 = 01010, 20 = 10100. XOR = 11110 → 4 set bits → 4 flips needed.

**Hint**
XOR both numbers. Count set bits in XOR result using bin(a^b).count("1").

---

## Q62. AP/GP Series: Find Nth Term ■ VERIFIED PYQ [Easy]

**Problem**
Given first term A, common difference D (for AP) or common ratio R (for GP), and N: - If series type is AP: Nth term = A + (N-1)*D - If series type is GP: Nth term = A * R^(N-1) Input: series type (AP/GP), first term, difference/ratio, and N.

**Sample Input**
```text
AP
2 3 5
```

**Sample Output**
```text
14
```

**Explanation**
AP with A=2, D=3, N=5: 2 + (5-1)*3 = 2 + 12 = 14

**Hint**
Check series type. For AP: a+(n-1)*d. For GP: a*(r**(n-1)). Handle both.

---

## Q63. Count Sundays in a Month ■ VERIFIED PYQ [Easy]

**Problem**
Jack loves Sundays. Given the day on which a month starts (e.g., "mon", "tue") and the total number of days in that month, find how many Sundays occur in that month. Input: Line 1 = starting day (3-letter lowercase). Line 2 = total days in the month.

**Sample Input**
```text
mon
13
```

**Sample Output**
```text
2
```

**Explanation**
Find offset of starting day. Count days i where (offset+i)%7==0.

**Hint**
Map days: mon=6,tue=5,wed=4,thu=3,fri=2,sat=1,sun=0. Loop 1 to days, count (offset+i)%7==0.

---

## Q64. Toggle All Bits of a Number ■ VERIFIED PYQ [Easy]

**Problem**
Given a positive integer N, convert it to binary, flip every bit from MSB to LSB, and return the decimal value. Example: 10 (binary: 1010) toggled = 0101 = 5

**Sample Input**
```text
10
```

**Sample Output**
```text
5
```

**Hint**
bit_length = n.bit_length(). mask = (1 << bit_length) - 1. Answer = n XOR mask.

---

## Q65. Number Series: n^2 + n Pattern — Find Next Term ■ VERIFIED PYQ [Easy]

**Problem**
Find the next number in the series: 2, 6, 12, 20, ? Pattern: nth term = n^2 + n → 1+1=2, 4+2=6, 9+3=12, 16+4=20, 25+5=?

**Sample Input**
```text
2 6 12 20
```

**Sample Output**
```text
30
```

**Hint**
Detect n for last term, compute (n+1)^2 + (n+1). Or use differences: 4,6,8,10 → next diff=10 → 20+10=30.

---

## Q66. Alice's Verbal Kho-Kho — Digit Passing Game ■ VERIFIED PYQ [Medium]

**Problem**
Alice gives a digit to F[1]. Each friend passes the digit to the next without speaking. A confused friend passes digit+1 (wraps: 9->0). Others pass correctly. Given starting digit S, N friends, and final digit F, find how many confusions occurred.

**Sample Input**
```text
3
5
7
```

**Sample Output**
```text
2
```

**Explanation**
Start=5, 3 friends, final=7. Confusions = (7-5+10)%10 = 2.

**Hint**
confusions = (final - start + 10) % 10. This works due to modular arithmetic.

---

## Q67. Distinct Elements in Array ■ VERIFIED PYQ [Easy]

**Problem**
Find and print all distinct (unique) elements from an array of size n (n <= 20). Maintain the order of first occurrence.

**Sample Input**
```text
6
1 2 2 3 1 4
```

**Sample Output**
```text
1 2 3 4
```

**Hint**
For each element at index i, check if it appeared in arr[0..i-1]. Print only if not seen before.

---

## Q68. BFS (Breadth First Search) on a Graph ■ VERIFIED PYQ [Medium]

**Problem**
Given a graph with V vertices and E edges (undirected), perform BFS starting from vertex 0 and print the traversal order.

**Sample Input**
```text
5 4
0 1
0 2
1 3
2 4
```

**Sample Output**
```text
0 1 2 3 4
```

**Hint**
Use queue. Enqueue 0, mark visited. While queue: dequeue u, print u, enqueue unvisited neighbors.

---

## Q69. Factory Production (Rate Calculation) ■ VERIFIED PYQ [Easy]

**Problem**
A factory produces X units in 24 days. How many units will it produce in D days? Input: X and D on separate lines.

**Sample Input**
```text
48
15
```

**Sample Output**
```text
30
```

**Explanation**
Rate = 48/24 = 2/day. In 15 days: 2*15 = 30.

**Hint**
units = (X * D) // 24. Use integer or float division based on expected output.

---

## Q70. Nth Term of Mixed Series A(n)=n and B(n)=n^2 ■ VERIFIED PYQ [Easy]

**Problem**
Two series are interleaved: Series A: 1,2,3,4... and Series B: 1,4,9,16... Combined: 1,1,2,4,3,9,4,16,5,25... Given N, find the Nth term.

**Sample Input**
```text
6
```

**Sample Output**
```text
9
```

**Explanation**
Position 6 is even → Series B → (6//2)^2 = 3^2 = 9.

**Hint**
If N is odd: result = (N+1)//2. If N is even: result = (N//2)**2.

---

## Q71. Sort 0s, 1s and 2s — Dutch National Flag (Confirmed 2026 Pattern) ■ VERIFIED PYQ [Medium]

**Problem**
Given an array of N integers with only 0s, 1s, and 2s, sort it in a single traversal without any built-in sort. All 0s first, then 1s, then 2s.

**Sample Input**
```text
6
0 1 2 1 0 2
```

**Sample Output**
```text
0 0 1 1 2 2
```

**Hint**
lo=mid=0, hi=n-1. If arr[mid]==0: swap(lo,mid), lo++, mid++. If 1: mid++. If 2: swap(mid,hi), hi--.

---

## Q72. Move Zeroes to End — Chocolate Factory (Exact Wording 2026) ■ VERIFIED PYQ [Easy]

**Problem**
A chocolate factory packs chocolates into packets. 0 = empty packet. Move all empty packets (0s) to the end of the array while maintaining the order of the non-zero (filled) packets.

**Sample Input**
```text
8
4 5 0 1 9 0 5 0
```

**Sample Output**
```text
4 5 1 9 5 0 0 0
```

**Hint**
count=0. For each non-zero element, arr[count]=element, count++. Fill arr[count:] with 0s.

---
