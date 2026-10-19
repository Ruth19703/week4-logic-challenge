
/*
Challenge 1: Find the most frequent value.
Pseudocode:
1. Return null if the array is empty.
2. For each value, count how often it appears using loops.
3. Keep the value with the highest count.
4. Return that value.
*/
function mostFrequent(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let answer = numbers[0];
    let highestCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        let count = 0;

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++;
            }
        }

        if (count > highestCount) {
            highestCount = count;
            answer = numbers[i];
        }
    }

    return answer;
}

console.log(mostFrequent([1, 2, 2, 3])); // 2
console.log(mostFrequent([4, 4, 5, 5])); // 4 (first tied value)
console.log(mostFrequent([]));           // null

/*
Challenge 2: Check whether two strings are anagrams.
Pseudocode:
1. Convert both strings to lowercase and remove spaces.
2. If their lengths differ, return false.
3. For each character in the first string, count its occurrences
   in both strings using loops.
4. If any character counts differ, return false.
5. Otherwise, return true.
*/
function areAnagrams(first, second) {
    if (typeof first !== "string" ||
        typeof second !== "string") {
        return false;
    }

    first = first.toLowerCase().replace(/\s/g, "");
    second = second.toLowerCase().replace(/\s/g, "");

    if (first.length !== second.length) {
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        let firstCount = 0;
        let secondCount = 0;

        for (let j = 0; j < first.length; j++) {
            if (first[i] === first[j]) firstCount++;
            if (first[i] === second[j]) secondCount++;
        }

        if (firstCount !== secondCount) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("", ""));             // true

// Comparison: Sorting both strings is a compact approach.
// Counting characters with loops makes the logic visible and
// follows the workshop's restriction on array methods.
