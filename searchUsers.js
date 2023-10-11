import { data } from "./testData/arrayForSearching.js";

const arrayOfUserObjects = [...data];

/**
 * 'qwer': {
 *    id: 'qwer',
 *    name: 'Name',
 *    surname: 'Surname',
 *    age: 50,
 *    email: 'my_email@google.com'
 * }
 */
const objectOfUsers = {};
const mapOfUsers = new Map();

data.forEach((user) => {
  objectOfUsers[user.id] = user;
  mapOfUsers.set(user.id, user);
});

// 1 user
console.group('1 user')
console.time("1 user find in array");
arrayOfUserObjects.find((user) => user.id === "nwwdrtrhndlafrefprqu");
console.timeEnd("1 user find in array");

console.time("1 user find in object");
objectOfUsers["nwwdrtrhndlafrefprqu"];
console.timeEnd("1 user find in object");

console.time("1 user find in map");
mapOfUsers.get("nwwdrtrhndlafrefprqu");
console.timeEnd("1 user find in map");
console.groupEnd();

// 2 user
console.group('2 user')
console.time("2 user find in array");
arrayOfUserObjects.find((user) => user.id === "fxlthwbksdbcrwybupvr");
console.timeEnd("2 user find in array");

console.time("2 user find in object");
objectOfUsers["fxlthwbksdbcrwybupvr"];
console.timeEnd("2 user find in object");

console.time("2 user find in map");
mapOfUsers.get("fxlthwbksdbcrwybupvr");
console.timeEnd("2 user find in map");
console.groupEnd();

// 3 user
console.group('3 user')
console.time("3 user find in array");
arrayOfUserObjects.find((user) => user.id === "ksjelahrrsvnjgryggoq");
console.timeEnd("3 user find in array");

console.time("3 user find in object");
objectOfUsers["ksjelahrrsvnjgryggoq"];
console.timeEnd("3 user find in object");

console.time("3 user find in map");
mapOfUsers.get("ksjelahrrsvnjgryggoq");
console.timeEnd("3 user find in map");
console.groupEnd();

// 4 user
console.group('4 user')
console.time("4 user find in array");
arrayOfUserObjects.find((user) => user.id === "knriahjnermfezlvcyxq");
console.timeEnd("4 user find in array");

console.time("4 user find in object");
objectOfUsers["knriahjnermfezlvcyxq"];
console.timeEnd("4 user find in object");

console.time("4 user find in map");
mapOfUsers.get("knriahjnermfezlvcyxq");
console.timeEnd("4 user find in map");
console.groupEnd();

// 5 user
console.group('5 user')
console.time("5 user find in array");
arrayOfUserObjects.find((user) => user.id === "tbzdiibingxpjeohwajp");
console.timeEnd("5 user find in array");

console.time("5 user find in object");
objectOfUsers["tbzdiibingxpjeohwajp"];
console.timeEnd("5 user find in object");

console.time("5 user find in map");
mapOfUsers.get("tbzdiibingxpjeohwajp");
console.timeEnd("5 user find in map");
console.groupEnd();
