import { data } from "./testData/arrayWithNaturalNumbers.js";

function findPairsBruteForce(arr, targetSum) {
  const pairs = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([{ [arr[i]]: i }, { [arr[j]]: j }]);
      }
    }
  }

  return pairs;
}

function findPairsWithHashMap(arr, targetSum) {
  const hashMap = new Map();
  const pairs = [];

  arr.forEach((num, index) => {
    if (!hashMap.has(num)) {
      hashMap.set(num, [index]);
    } else {
      hashMap.get(num).push(index);
    }
  });

  for (const [num, listA] of hashMap) {
    const complement = targetSum - num;

    const listB = hashMap.get(complement);
    if (!listB || num > complement) continue;

    // for the case when targetSum is num + num
    if (num === complement) {
      for (let i = 0; i < listA.length; i++) {
        for (let j = i + 1; j < listA.length; j++) {
          pairs.push([{ [num]: i }, { [complement]: j }]);
        }
      }
    } else {
      for (const i of listA) {
        for (const j of listB) {
          pairs.push([{ [num]: i }, { [complement]: j }]);
        }
      }
    }
  }

  return pairs;
}

function findPairsTwoPointers(arr, targetSum) {
  const a = arr.map((v, i) => ({ v, i })).sort((x, y) => x.v - y.v);
  let l = 0,
    r = a.length - 1;
  const pairs = [];

  while (l < r) {
    const sum = a[l].v + a[r].v;
    if (sum === targetSum) {
      // for the case when targetSum is num + num
      if (a[l].v === a[r].v) {
        // all combinations of pairs from l to r
        for (let x = l; x < r; x++)
          for (let y = x + 1; y <= r; y++)
            pairs.push([{ [a[x].v]: a[x].i }, { [a[y].v]: a[y].i }]);
        break;
      } else {
        // count duplicates for a[l] and a[r]
        let li = l + 1;
        while (li <= r && a[li].v === a[l].v) li++;
        let ri = r - 1;
        while (ri >= l && a[ri].v === a[r].v) ri--;
        for (let x = l; x < li; x++)
          for (let y = ri + 1; y <= r; y++)
            pairs.push([{ [a[x].v]: a[x].i }, { [a[y].v]: a[y].i }]);
        l = li;
        r = ri;
      }
    } else if (sum < targetSum) {
      l++;
    } else {
      r--;
    }
  }

  return pairs;
}

const sumNumber = 520;

// O(n^2)
console.time("Brute Force");
const resultBruteForce = findPairsBruteForce(data, sumNumber);
console.timeEnd("Brute Force");

// O(n)
console.time("Hash Map");
const resultHashMap = findPairsWithHashMap(data, sumNumber);
console.timeEnd("Hash Map");

// O(n log n)
console.time("Pairs Two Pointers");
const resultPairsTwoPointers = findPairsTwoPointers(data, sumNumber);
console.timeEnd("Pairs Two Pointers");

console.log("resultBruteForce", resultBruteForce);
console.log("resultHashMap", resultHashMap);
console.log("resultPairsTwoPointers", resultPairsTwoPointers);
