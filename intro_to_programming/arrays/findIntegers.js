const findIntegers = array => {
  let filteredArray = array.filter(arr => Number.isInteger(arr));
  return filteredArray;
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 