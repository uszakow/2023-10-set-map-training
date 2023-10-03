const arr = [5, 3, 6, 5, 1, 2, 1, 5];

const set = new Set(arr);

set.add(10);
set.add(1);

console.log(set);
console.log(set.has(5));
console.log(set.has(100));
console.log(set.size);
