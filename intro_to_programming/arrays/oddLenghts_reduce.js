function oddLengths(strings) {
  return strings.reduce((oddArray, currentStr) => {
    let strLen = currentStr.length;
    if (strLen % 2 !== 0) {
      oddArray.push(strLen);
    }
    
    return oddArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]