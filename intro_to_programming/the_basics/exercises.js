// Exercise 1 - String concat
console.log('Tyler ' + 'Ramey');

//Exercise 2 - Arithmetic
let number = 4936;
let ones = number % 10;
console.log(ones);

number = (number - ones) / 10;

let tens = number % 10;

console.log(tens);

number = (number - tens) / 10;

let hundred = number % 10;

console.log(hundred);

let thousands = (number - hundred) / 10;

console.log(thousands);

//Exercise 3 - Identify types
console.log(typeof 'true');
console.log(typeof false);
console.log(typeof 1.5);
console.log(typeof 2);
console.log(typeof undefined);
// console.log(typeof {foo: 'bar'}; Object Type

//Exercise 4 - Why does code log '510' instead of 15
console.log('5' + 10); //changes 10 to type String implicitly

//Exercise 5 - Refractor code to explicit coercion so it shows 15
console.log(Number('5') + 10);

//Exercise 6 - Template Literal 
console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

//Exercise 7 - Access index of array that has no value
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      //Results in undefined

//Exercise 8 - Array

const names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
  ];
  
  //Exercise 9 - Create and object
  const pets = {
    asta: 'dog',
    butterscotch: 'cat',
    pudding: 'cat',
    neptune: 'fish',
    darwin: 'lizard',
  }
  
  //Exercise 10 
  // 'foo' === 'Foo' // evals to false
  
  //Exercise 11
  // parseInt('3.1415') // evals to 3. parseInt stops at first non-integer value
  
  //Exercise 12 
  // '12' < '9' // returns true due to them being strings