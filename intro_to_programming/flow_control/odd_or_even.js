const oddOrEven = (number) => {
 if (Number.isInteger(number)) {
   let result = number % 2;
   if (result === 0) {
     return 'even';
   } else {
     return 'odd';
   }
 } else {
   return 'Not a valid argument';
 }
};

console.log(oddOrEven('5'));