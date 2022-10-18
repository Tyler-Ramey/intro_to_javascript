let allMatches = (wordsArray, regex) => {
  let returnArray = []
  for (let word of wordsArray) {
    if (regex.test(word)) {
      returnArray.push(word);
    }
  }
  
  return returnArray;
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));