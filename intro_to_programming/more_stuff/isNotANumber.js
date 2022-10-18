const isNotANumber = arg => {
  if (arg !== arg) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotANumber(NaN));
console.log(isNotANumber('foo'));
console.log(isNotANumber(12));

console.log()