
/*
Boss Challenge: Find a pair of numbers that adds up to a target.
Pseudocode:
1. Receive an array of numbers and a target.
2. Loop through each number.
3. For each number, loop through the numbers after it.
4. If the pair adds up to the target, return the pair.
5. If no pair is found, return null.
*/
function findPair(numbers, target) {
    if (!Array.isArray(numbers) ||
        typeof target !== "number" ||
        !Number.isFinite(target)) {
        return null;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" ||
            !Number.isFinite(numbers[i])) {
            return null;
        }

        for (let j = i + 1; j < numbers.length; j++) {
            if (typeof numbers[j] !== "number" ||
                !Number.isFinite(numbers[j])) {
                return null;
            }

            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }

    return null;
}

console.log(findPair([2, 7, 11, 15], 9)); // [2, 7]
console.log(findPair([1, 3, 5], 20));    // null
console.log(findPair([], 10));            // null
