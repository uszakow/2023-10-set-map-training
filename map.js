const map = new Map();

const someObject = {
  a: "test",
  b: 1,
};

map.set("1", "string");
map.set("1", "another string");
map.set(1, "number");
map.set(true, "boolean");
map.set(someObject, "object");

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));
console.log(map.get(someObject));
console.log(map.get("unexisting key"));
console.log(map.size);
console.log(map);

// the order of the elements is equal to the order of insertion
console.group('Order of items')
map.forEach((item) => console.log(item));
console.groupEnd()

const objectFromMap = Object.fromEntries(map);
console.log(objectFromMap);

const mapFromObject = new Map(Object.entries(objectFromMap));
console.log(mapFromObject);
