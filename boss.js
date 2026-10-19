
/*
Pseudocode:
1. Create a function that receives an array of numbers.
2. Start the sum at 0.
3. Use a loop to visit each number.
4. Add each number to the sum.
5. Return the final sum.
*/

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

// Test 1: Normal array
console.log(sumNumbers([2, 3, 4])); // 9

// Test 2: Array with one number
console.log(sumNumbers([5])); // 5

// Test 3: Edge case — empty array
console.log(sumNumbers([])); // 0
