import { data } from "./testData/arrayForSearching.js";

const arrayOfUserObjects = [...data];
const objectOfUsers = {};
arrayOfUserObjects.forEach((user) => {
  objectOfUsers[user.id] = user;
});

// Users will be deleted from memory
let user1 = objectOfUsers["fxlthwbksdbcrwybupvr"];
let user2 = objectOfUsers["knriahjnermfezlvcyxq"];

user1 = null;
user2 = null;

/* Users will not be deleted from memory */
// user1 = objectOfUsers["fxlthwbksdbcrwybupvr"];
// user2 = objectOfUsers["knriahjnermfezlvcyxq"];

// const map = new Map();
// map.set(user1, 4);
// map.set(user2, 9);

// user1 = null;
// user2 = null;

/* Users will be deleted from memory */
// user1 = objectOfUsers["fxlthwbksdbcrwybupvr"];
// user2 = objectOfUsers["knriahjnermfezlvcyxq"];

// const weakMap = new WeakMap();
// weakMap.set(user1, 4);
// weakMap.set(user2, 9);

// console.log(weakMap.get(user1));

// user1 = null;
// user2 = null;
