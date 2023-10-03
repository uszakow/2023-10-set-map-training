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
console.time("uniqueValuesSet");
uniqueValuesSet(data);
console.timeEnd("uniqueValuesSet");

// O(n^2)
console.time("uniqueValuesFilter");
uniqueValuesFilter(data);
console.timeEnd("uniqueValuesFilter");

// O(n^2)
console.time("uniqueValuesForEach");
uniqueValuesForEach(data);
console.timeEnd("uniqueValuesForEach");

// O(n * m)
console.time("uniqueValuesForEachWithUnshift");
uniqueValuesForEachWithUnshift(data);
console.timeEnd("uniqueValuesForEachWithUnshift");

// O(n^2)
console.time("uniqueValuesReduces");
uniqueValuesReduces(data);
console.timeEnd("uniqueValuesReduces");

// O(n)
console.time("uniqueValuesObj");
uniqueValuesObj(data);
console.timeEnd("uniqueValuesObj");

// O(n)
console.time("uniqueValuesMap");
uniqueValuesMap(data);
console.timeEnd("uniqueValuesMap");

// O(n)
console.time("uniqueValuesObjAndReduce");
uniqueValuesObjAndReduce(data);
console.timeEnd("uniqueValuesObjAndReduce");

// console.log(uniqueValuesSet(data));
