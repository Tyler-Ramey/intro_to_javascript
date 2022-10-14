function factorial(num) {
  let result = 1;
  for (num; num > 0; num -= 1) {
    result *= num;
  }
  
  return result;
}

function factorialRecursion(num) {
  
}
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));