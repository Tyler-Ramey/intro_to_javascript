const oddOrEven = (number) => {
 let result = number % 2;
 if (result === 0) {
   return 'even';
 } else {
   return 'odd';
 }
};

console.log(oddOrEven(5));