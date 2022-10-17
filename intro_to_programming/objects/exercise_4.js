let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let upperObjKeys = objKeys.map(str => str.toUpperCase());
console.log(upperObjKeys);
console.log(obj);