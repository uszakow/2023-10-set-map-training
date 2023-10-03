const fs = require("fs");

// Function to generate a random string of specified length
function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Function to generate a random integer between min and max (inclusive)
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create an array of objects
function createArrayOfObjects() {
  const dataArray = [];
  const uniqueIds = new Set();

  for (let i = 0; i < 100000; i++) {
    // Generate a unique id
    let id;
    do {
      id = generateRandomString(20);
    } while (uniqueIds.has(id));
    uniqueIds.add(id);

    // Example data
    const names = ["John", "Jane", "Alice", "Bob", "Eva"];
    const surnames = ["Smith", "Johnson", "Doe", "Brown", "Taylor"];
    const age = generateRandomInt(1, 95);
    const emails = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];

    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const email = `${name.toLowerCase()}_${surname.toLowerCase()}@${
      emails[Math.floor(Math.random() * emails.length)]
    }`;

    // Create an object and add it to the array
    const obj = {
      id,
      name,
      surname,
      age,
      email,
    };
    dataArray.push(obj);
  }

  return dataArray;
}

// Create the array of objects
const dataArray = createArrayOfObjects();

// Save the array to a separate file (arrayForSearching.js)
const filename = "testData/arrayForSearching.js";
const dataToWrite = `export const data = ${JSON.stringify(dataArray, null, 2)}`;

fs.writeFile(filename, dataToWrite, "utf8", (err) => {
  if (err) {
    console.error(`Error writing to ${filename}: ${err}`);
  } else {
    console.log(`Array of ${dataArray.length} objects saved to ${filename}`);
  }
});
