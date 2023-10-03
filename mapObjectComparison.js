const objectsArr = [];
const mapsArr = [];

console.time("createObjects");
for (let i = 0; i < 1000000; i++) {
  const obj = {};
  obj.a = "test";
  obj.b = "test 2";
  obj.c = 1;
  obj.d = 2;
  objectsArr.push(obj);
}
console.timeEnd("createObjects");

console.time("createMaps");
for (let i = 0; i < 1000000; i++) {
  const map = new Map();
  map.set("a", "test");
  map.set("b", "test 2");
  map.set("c", 1);
  map.set("d", 2);
  mapsArr.push(map);
}
console.timeEnd("createMaps");

console.time("addInObjects");
objectsArr.forEach((obj) => {
  obj.e = "test 3";
  obj.f = "test 4";
  obj.g = 3;
  obj.h = 4;
});
console.timeEnd("addInObjects");

console.time("addInMaps");
mapsArr.forEach((map) => {
  map.set("e", "test 3");
  map.set("f", "test 4");
  map.set("g", 3);
  map.set("h", 4);
});
console.timeEnd("addInMaps");

console.time("deleteInObjects");
objectsArr.forEach((obj) => {
  delete obj.a;
  delete obj.c;
  delete obj.e;
  delete obj.g;
});
console.timeEnd("deleteInObjects");

console.time("deleteInObjects");
mapsArr.forEach((map) => {
  map.delete("a");
  map.delete("c");
  map.delete("e");
  map.delete("g");
});
console.timeEnd("deleteInObjects");

console.time("deleteAllInObjects");
objectsArr.forEach((obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
});
console.timeEnd("deleteAllInObjects");

console.time("deleteAllInMaps");
mapsArr.forEach((map) => {
  map.clear();
});
console.timeEnd("deleteAllInMaps");
