function getLargestNumber(array) {
 return (Math.max(...array));
  
}

console.log(getLargestNumber([1, 6, 3, 2]));
console.log(getLargestNumber([-1, -6, -3, -2]));
console.log(getLargestNumber([2,2]));