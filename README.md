Assignment 4

## Problem Summaries & Approach

 Q1 — Digit Gatekeeper 
Problem: Count integers x in [L, R] that are divisible by K, have a prime digit sum, and contain no digit 0.

Approach: Linear scan from L to R. For each x, check three conditions:
1. Divisibility by K using modulo.
2. Prime digit sum using trial division up to √(digitSum).
3. No zero digit by checking if the string representation includes '0'.

Complexity:O((R − L) · log(digitSum))



 Q2 — Roll-Seed Lock 
 Problem: Apply 3 transformation steps to N using a seed value, then check if the result is a 3-digit number whose middle digit equals seed.

Approach: Simulate the 3 steps directly. After the loop, extract the middle digit using `Math.floor(current / 10) % 10` and validate the conditions.

Complexity: O(1)



Q3 — Mirror Corridor 
Problem: Find the smallest X ≥ 0 such that N + X is both a palindrome and divisible by K.

Approach: Iterate X from 0 to 100000. For each candidate, reverse its string representation and compare, then check divisibility. Return the first match or -1.

Complexity: O(100000 · d) where d = number of digits ≈ O(1) practically

Q4 — Fare Calculator 
Problem: Compute ride fare using base, distance, lateness, and seed, applying sequential rules.

Approach: Apply each rule in order as described. Use `Math.ceil(fare / 5) * 5` to round up to the nearest multiple of 5.

Complexity: O(1)

 Q5 — Skipping Numbers 
Problem: Find the smallest m such that the sum of all integers 1..m not divisible by (seed+2) is ≥ N.

Approach:Increment m one at a time, adding m to the running sum only if m is not divisible by (seed+2). Stop as soon as sum ≥ N.

Complexity: O(m) where m grows roughly as O(√N)


Q6 — Contest Score Judge 
Problem: Compute contest score = 3a + b − 2c, apply penalty rules, and determine PASS/FAIL.

Approach: Compute score directly. Clamp to 0 if negative. Subtract 10 if total submissions exceed 50. Clamp again in case penalty causes negative. Output PASS if score ≥ 60.

**Complexity:** O(1)

