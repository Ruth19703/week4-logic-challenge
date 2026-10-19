
/*
Challenge 1: Remove duplicate values from an array.
Pseudocode:
1. Create an empty result array.
2. Loop through the input array.
3. Check whether each value already exists in the result.
4. If it does not exist, add it.
5. Return the result.
*/
function removeDuplicates(numbers) {
    if (!Array.isArray(numbers)) {
        return [];
    }

    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (numbers[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
console.log(removeDuplicates([5, 5, 5]));       // [5]
console.log(removeDuplicates([]));              // []

/*
Challenge 2: Check whether a word is a palindrome.
Pseudocode:
1. Convert the word to lowercase.
2. Reverse the word using a loop.
3. Compare the reversed word with the original.
4. Return true if they match.
*/
function isPalindrome(word) {
    if (typeof word !== "string") {
        return false;
    }

    const original = word.toLowerCase();
    let reversed = "";

    for (let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }

    return original === reversed;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome(""));      // true

/*
Challenge 3: Find the second-largest distinct number.
Pseudocode:
1. Start with no largest or second-largest number.
2. Loop through every number.
3. Update the largest and second-largest values.
4. Ignore duplicates of the largest number.
5. Return the second-largest number, or null if unavailable.
*/
function secondLargest(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    let largest = null;
    let second = null;

    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i];

        if (typeof value !== "number" || !Number.isFinite(value)) {
            return null;
        }

        if (largest === null || value > largest) {
            if (value !== largest) {
                second = largest;
                largest = value;
            }
        } else if (value < largest &&
                   (second === null || value > second)) {
            second = value;
        }
    }

    return second;
}

console.log(secondLargest([4, 9, 2, 7])); // 7
console.log(secondLargest([5, 5, 3]));    // 3
console.log(secondLargest([8]));          // null

// Comparison: Sorting an array can make this problem easier to read,
// but tracking the two largest values in a loop avoids sorting the
// whole array and demonstrates the required loop-based logic.
