const fs = require("fs");

const SIZE = 20000;
const MAX_VALUE = 50000;
const SEED = 123456;

// RNG seeding (xorshift32) to have repeatable results
function makeRNG(seed = 123456) {
  let x = seed >>> 0;
  return function () {
    x ^= x << 13;
    x >>>= 0;
    x ^= x >>> 17;
    x >>>= 0;
    x ^= x << 5;
    x >>>= 0;
    // divide by 2^32 so result is in [0,1)
    return (x >>> 0) / 0x100000000;
  };
}

const rng = makeRNG(SEED);

// Generate array with SIZE random numbers from 0 to MAX_VALUE
function createArrayWithRandomNumbers(size, maxValue, rngFunc) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(rngFunc() * (maxValue + 1)));
  }
  return arr;
}

// Generate the array
const dataArray = createArrayWithRandomNumbers(SIZE, MAX_VALUE, rng);

// Create the export string with each number on a new line
const filename = "testData/arrayWithNaturalNumbers.js";
const dataToWrite = `export const data = ${JSON.stringify(dataArray, null, 2)}`;

// Save the array to a separate file
fs.writeFile(filename, dataToWrite, "utf-8", (err) => {
  if (err) {
    console.error("Error writing to JavaScript module file:", err);
  } else {
    console.log("JavaScript module file written successfully");
  }
});
