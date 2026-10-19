
/*
Challenge 1: Count positive numbers

Pseudocode:
1. Create a function that receives an array of numbers.
2. Start a counter at 0.
3. Loop through every number.
4. If a number is greater than 0, increase the counter.
5. Return the counter.
*/

const countPositive = (numbers) => {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    return count;
};

// Tests
console.log(countPositive([2, -3, 5, 0, 7])); // 3
console.log(countPositive([1, 2, 3]));        // 3
console.log(countPositive([]));               // 0


/*
Challenge 2: Find the smallest number

Pseudocode:
1. Create a function that receives an array of numbers.
2. If the array is empty, return undefined.
3. Assume the first number is the smallest.
4. Loop through the remaining numbers.
5. If a number is smaller, update the smallest number.
6. Return the smallest number.
*/

const findSmallest = (numbers) => {
    if (numbers.length === 0) {
        return undefined;
    }

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
};

// Tests
console.log(findSmallest([8, 3, 6, 1, 9])); // 1
console.log(findSmallest([-5, -2, -10]));   // -10
console.log(findSmallest([]));              // undefined

/*
Comparison:
Using a loop is readable because we check each number one by one.
Sorting the array is another option, but it does extra work when we
only need the smallest number.
*/
