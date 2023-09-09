// Strings -->
console.log("String operations -->")

// Length
let sentence = "I am exploring different programming languages";
let sentenceLength = sentence.length;
console.log(sentenceLength);

// Extracting a substring
let phrase = "JavaScript, Python, Java, C++";
let extracted = phrase.slice(0, 10);
console.log(extracted);

// Replacing a word
let sentenceToUpdate = "Please, bring some coffee.";
let updatedSentence = sentenceToUpdate.replace("coffee", "tea");
console.log(updatedSentence);

// Converting to uppercase
let textToConvert = "This should be in uppercase";
let upperCaseText = textToConvert.toUpperCase();
console.log(upperCaseText);

// Trimming whitespace from the start
let stringWithWhitespace = "     This needs trimming     ";
let trimmedString = stringWithWhitespace.trimStart();
console.log(trimmedString);

// Numbers -->
console.log("Number operations -->")

let sum = 0.1 + 0.2;
let preciseSum = (0.2 * 10 + 0.1 * 10) / 10;
console.log(sum, preciseSum);

let numberA = 75;
let numberB = 25;
let sumAB = numberA + numberB;
console.log(sumAB);

let num1 = 150;
let num2AsString = "150";
console.log(num1, num2AsString);

let resultNaN = 100 / "not_a_number";
console.log(resultNaN);

let positiveInfinity = 1 / 0;
let negativeInfinity = -100 / 0;
console.log(positiveInfinity, negativeInfinity);

// Arrays -->
console.log("Array operations -->")

const diverseArray = ["apple", 3, "banana", 7, "cherry", 5];

// 1. Push: Adding an element to the end of the array
diverseArray.push("date");

// 2. Pop: Removing and returning the last element of the array
const removedElement = diverseArray.pop();

// 3. Shift: Removing and returning the first element of the array
const shiftedElement = diverseArray.shift();

// 4. Unshift: Adding elements to the beginning of the array
diverseArray.unshift("avocado", 2);

// 5. Join: Converting the array elements into a single string with a separator
const arrayAsString = diverseArray.join(", ");

console.log("Updated Array:", diverseArray);
console.log("Removed Element:", removedElement);
console.log("Shifted Element:", shiftedElement);
console.log("Array as a String:", arrayAsString);

// Date Methods -->
console.log("Date operations -->")

const currentDateObject = new Date();

// 1. Get Current Date and Time
const currentDateTimeString = currentDateObject.toLocaleString();

// 2. Get Current Year
const currentYearNumber = currentDateObject.getFullYear();

// 3. Get Current Month
const currentMonthIndex = currentDateObject.getMonth();

// 4. Get Current Day of the Week
const daysOfWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeekString = daysOfWeekArray[currentDateObject.getDay()];

// 5. Get Current Time
const currentTimeString = currentDateObject.toLocaleTimeString();

console.log("Current Date and Time:", currentDateTimeString);
console.log("Current Year:", currentYearNumber);
console.log("Current Month:", currentMonthIndex);
console.log("Current Day of the Week:", currentDayOfWeekString);
console.log("Current Time:", currentTimeString);

// Function Methods -->
console.log("Function operations -->")

function sayGreeting(userName) {
    console.log(`Hello, ${userName}!`);
}
sayGreeting("John");

const addNumbers = function(number1, number2) {
    return number1 + number2;
};
const resultOfAddition = addNumbers(5, 3);

console.log(resultOfAddition);
