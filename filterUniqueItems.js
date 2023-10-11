import { data } from "./testData/arrayForFiltering.js";

function uniqueValuesSet(arr) {
  return [...new Set(arr)];
}

function uniqueValuesFilter(arr) {
  return arr.filter((item, index) => index === arr.indexOf(item));
}

function uniqueValuesForEach(arr) {
  const uniqueValues = [];

  arr.forEach((item) => {
    if (!uniqueValues.includes(item)) {
      uniqueValues.push(item);
    }
  });

  return uniqueValues;
}

function uniqueValuesForEachWithUnshift(arr) {
  const uniqueValues = [];

  arr.forEach((item) => {
    if (!uniqueValues.includes(item)) {
      uniqueValues.unshift(item);
    }
  });

  return uniqueValues;
}

function uniqueValuesReduces(arr) {
  return arr.reduce((res, item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
    return res;
  }, []);
}

function uniqueValuesObj(arr) {
  const obj = {};

  arr.forEach((item) => (obj[item] = item));

  return Object.values(obj);
  // return obj
}

function uniqueValuesMap(arr) {
  const map = new Map();

  arr.forEach((item) => map.set(item, item));

  return Array.from(map.values());
}

function uniqueValuesObjAndReduce(arr) {
  const uniqueObject = {};
  return arr.reduce((uniqueArray, item) => {
    if (!uniqueObject[item]) {
      uniqueObject[item] = true;
      uniqueArray.push(item);
    }
    return uniqueArray;
  }, []);
}

// O(n)
console.time("SET: uniqueValuesSet");
uniqueValuesSet(data);
console.timeEnd("SET: uniqueValuesSet");

// O(n^2)
console.time("FILTER + INDEX OF: uniqueValuesFilter");
uniqueValuesFilter(data);
console.timeEnd("FILTER + INDEX OF: uniqueValuesFilter");

// O(n^2)
console.time("FOR EACH + INCLUDES: uniqueValuesForEach");
uniqueValuesForEach(data);
console.timeEnd("FOR EACH + INCLUDES: uniqueValuesForEach");

// O(n * m)
console.time("FOR EACH + INCLUDES + UNSHIFT: uniqueValuesForEachWithUnshift");
uniqueValuesForEachWithUnshift(data);
console.timeEnd("FOR EACH + INCLUDES + UNSHIFT: uniqueValuesForEachWithUnshift");

// O(n^2)
console.time("REDUCE + INCLUDES: uniqueValuesReduces");
uniqueValuesReduces(data);
console.timeEnd("REDUCE + INCLUDES: uniqueValuesReduces");

// O(n)
console.time("OBJECT: uniqueValuesObj");
uniqueValuesObj(data);
console.timeEnd("OBJECT: uniqueValuesObj");

// O(n)
console.time("MAP: uniqueValuesMap");
uniqueValuesMap(data);
console.timeEnd("MAP: uniqueValuesMap");

// O(n)
console.time("REDUCE + OBJECT: uniqueValuesObjAndReduce");
uniqueValuesObjAndReduce(data);
console.timeEnd("REDUCE + OBJECT: uniqueValuesObjAndReduce");

// console.log(uniqueValuesSet(data));
