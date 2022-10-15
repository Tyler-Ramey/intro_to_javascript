const oddLengths = array => {
  let lengthArray = array.map(str => str.length);
  return lengthArray.filter(num => num % 2 !== 0); 
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]