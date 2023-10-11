const fs = require("fs");

// Function to generate a random string of a specified length
function generateRandomString(minLength, maxLength) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Function to shuffle an array in-place using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
  }
}

// Function to create an array with the specified number of unique and duplicate strings
function createArray() {
  const uniqueCount = 20000;
  const duplicateCount = 100000 - uniqueCount;
  const uniqueStrings = new Set();

  // Generate unique strings
  while (uniqueStrings.size < uniqueCount) {
    const randomString = generateRandomString(10, 20);
    uniqueStrings.add(randomString);
  }

  const resultArray = [];

  // Add unique strings
  uniqueStrings.forEach((str) => {
    resultArray.push(str);
  });

  // Add duplicate strings
  for (let i = 0; i < duplicateCount; i++) {
    const randomIndex = Math.floor(Math.random() * uniqueCount);
    resultArray.push(Array.from(uniqueStrings)[randomIndex]);
  }

  // Shuffle the entire array
  shuffleArray(resultArray);

  return resultArray;
}

// Create the array
const dataArray = createArray();

// Convert the array to a JavaScript module string
const filename = "testData/arrayForFiltering.js";
const dataToWrite = `export const data = ${JSON.stringify(dataArray, null, 2)}`;

// Save the array to a separate file
fs.writeFile(filename, dataToWrite, "utf-8", (err) => {
  if (err) {
    console.error("Error writing to JavaScript module file:", err);
  } else {
    console.log("JavaScript module file written successfully");
  }
});
