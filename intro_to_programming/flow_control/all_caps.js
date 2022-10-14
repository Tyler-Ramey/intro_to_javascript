function capitalize10CharOrMore(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capitalize10CharOrMore('Hello world!'));
console.log(capitalize10CharOrMore('Hello!'));