import { data } from "./testData/arrayForSearching.js";

const arrayOfUserObjects = [...data];
const objectOfUsers = {};
arrayOfUserObjects.forEach((user) => {
  objectOfUsers[user.id] = user;
});

let user1 = objectOfUsers["fxlthwbksdbcrwybupvr"];
let user2 = objectOfUsers["knriahjnermfezlvcyxq"];

/**
 * USING ARRAY
 */
/* Keep logged user in array */
const loggedUsers = [];

/* Add to array if was not added */
if (!loggedUsers.includes(user1)) {
  loggedUsers.push(user1);
}

if (!loggedUsers.includes(user2)) {
  loggedUsers.push(user2);
}

console.log(loggedUsers);

// /* Delete from array when log out */
// const idx1 = loggedUsers.indexOf(user1);
// if (idx1 !== -1) {
//   loggedUsers.splice(idx1, 1);
// }
// console.log(loggedUsers);

// const idx2 = loggedUsers.indexOf(user2);
// if (idx2 !== -1) {
//   loggedUsers.splice(idx2, 1);
// }
// console.log(loggedUsers);
// user1 = null
// user2 = null

/**
 * USING SET
 */
// const loggedUsersSet = new Set();

// /* Add to set */
// loggedUsersSet.add(user1);
// loggedUsersSet.add(user2);
// console.log(loggedUsersSet);

// /* Delete from set */
// loggedUsersSet.delete(user1);
// loggedUsersSet.delete(user2);
// console.log(loggedUsersSet);
// user1 = null
// user2 = null


/**
 * USING WEAKSET
 */
// const loggedUsersWeakSet = new WeakSet()

// /* Add to set */
// loggedUsersWeakSet.add(user1);
// loggedUsersWeakSet.add(user2);

// user1 = null
// user2 = null
// console.log(loggedUsersWeakSet);