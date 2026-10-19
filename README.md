# Week 4 — JavaScript Logic Challenges

## Project Description

This project contains JavaScript logic challenges completed using plain JavaScript and Node.js. The purpose is to improve logical thinking, problem-solving skills, and understanding of arrays, loops, conditions, and functions.

## Technologies Used

- JavaScript
- Node.js
- Git and GitHub

## Project Structure

```text
week4-logic-challenges/
├── README.md
├── round1.js
├── round2.js
├── round3.js
└── boss.js
```

## Challenges Solved

### Round 1 — Basic Challenges (1 point each)

1. Check whether a number is even or odd.
2. Find the largest number in an array.
3. Reverse a string.
4. Count vowels in a string.
5. Calculate the sum of numbers in an array.

**Round 1 score:** 5 × 1 = 5 points

### Round 2 — Intermediate Challenges (2 points each)

1. Remove duplicate numbers from an array.
2. Check whether a word is a palindrome.
3. Find the second-largest number in an array.

**Round 2 score:** 3 × 2 = 6 points

### Round 3 — Advanced Challenges (3 points each)

1. Count positive numbers in an array.
2. Find the smallest number in an array.

**Round 3 score:** 2 × 3 = 6 points

### Boss Round (5 points each)

1. Calculate the sum of all numbers in an array using a loop.

**Boss Round score:** 1 × 5 = 5 points

## Total Points

| Round | Challenges solved | Points |
|---|---:|---:|
| Round 1 | 5 | 5 |
| Round 2 | 3 | 6 |
| Round 3 | 2 | 6 |
| Boss Round | 1 | 5 |
| **Total** | **11** | **22 points** |

*This is the estimated score based on the examples listed above. Confirm that these are the exact challenges accepted by your instructor and that your code passes the required tests.*

## Concepts Practiced

- Declaring variables with `const` and `let`
- Writing arrow functions
- Using arrays and strings
- Using `for` loops and `if` statements
- Returning values from functions
- Writing pseudocode before solutions
- Testing functions with `console.log()`
- Handling edge cases
- Solving problems without `map()`, `filter()`, or `reduce()`

## Comparing Possible Solutions

### 1. Finding the Smallest Number

A `for` loop checks each number and updates the smallest value when necessary. Sorting the array is another possible approach, but it does extra work when only the smallest value is required.

**Choice:** I used a loop because it is straightforward, readable, and avoids sorting the entire array.

### 2. Calculating the Sum of an Array

A `for` loop adds each number to a running total. The `reduce()` method can also calculate the total in fewer lines, but it may be less familiar to beginners.

**Choice:** I used a `for` loop because the steps are clear and easy to debug. The submitted solution uses a loop, as required by the assignment.

## Most Difficult Bug

**Bug:** The most difficult bug I encountered was understanding how to update a variable inside a loop without losing the correct result.

**How I found and fixed it:** I tested the code using different arrays, including an array with negative numbers and an empty array. I checked each loop iteration and corrected the variable update so that the function returned the expected result.

*Replace this section with the actual bug you found and how you fixed it, if your experience was different.*

## How to Run the Project

Install Node.js, open PowerShell in the project folder, and run each file separately:

```bash
node round1.js
node round2.js
node round3.js
node boss.js
```


