
/*
Challenge 1: Check whether a number is even or odd.
Pseudocode:
1. Receive a number.
2. If the number divided by 2 has remainder 0, return "Even".
3. Otherwise, return "Odd".
*/
function evenOrOdd(number) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
        return "Invalid number";
    }

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("Challenge 1:");
console.log(evenOrOdd(8));       // Even
console.log(evenOrOdd(7));       // Odd
console.log(evenOrOdd(0));       // Even

/*
Challenge 2: Find the largest number in an array.
Pseudocode:
1. If the array is empty, return null.
2. Assume the first number is the largest.
3. Loop through the remaining numbers.
4. Update the largest number when a bigger one is found.
5. Return the largest number.
*/
function findLargest(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" ||
            !Number.isFinite(numbers[i])) {
            return null;
        }

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log("\nChallenge 2:");
console.log(findLargest([3, 9, 2, 7])); // 9
console.log(findLargest([-5, -2, -8])); // -2
console.log(findLargest([]));           // null

/*
Challenge 3: Reverse a string using a loop.
Pseudocode:
1. Create an empty string.
2. Start at the last character.
3. Loop backwards and add each character.
4. Return the reversed string.
*/
function reverseString(text) {
    if (typeof text !== "string") {
        return "Invalid input";
    }

    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

console.log("\nChallenge 3:");
console.log(reverseString("hello")); // olleh
console.log(reverseString("Rwanda")); // ad nawR without the space: ad nawR? Check output
console.log(reverseString("")); // empty string

/*
Challenge 4: Count vowels in a string.
Pseudocode:
1. Convert the string to lowercase.
2. Set the vowel count to zero.
3. Loop through each character.
4. Increase the count when the character is a vowel.
5. Return the count.
*/
function countVowels(text) {
    if (typeof text !== "string") {
        return 0;
    }

    let count = 0;
    const vowels = "aeiou";
    const lowerText = text.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
        if (vowels.includes(lowerText[i])) {
            count++;
        }
    }

    return count;
}

console.log("\nChallenge 4:");
console.log(countVowels("hello")); // 2
console.log(countVowels("RWANDA")); // 2
console.log(countVowels("")); // 0

/*
Challenge 5: Calculate the sum of an array.
Pseudocode:
1. Set total to zero.
2. Loop through each number.
3. Add each number to total.
4. Return total.
*/
function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number" ||
            !Number.isFinite(numbers[i])) {
            return null;
        }

        total += numbers[i];
    }

    return total;
}

console.log("\nChallenge 5:");
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-2, 2]));      // 0
console.log(sumArray([]));           // 0

// Readability comparison:
// A normal for loop is easy for beginners to follow.
// Array.reduce() is shorter for summing values, but this workshop
// requires loops, so the for loop is the correct choice.
