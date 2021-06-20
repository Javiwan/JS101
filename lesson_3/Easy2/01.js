/* 
Replace every occurrende of the word important with urgent.
input: a phrase with one or more occurrences of the word 'important'
output: the same phrase with every occurrence of the word 'important' changed with 'urgent'

algorithm
-Make an array with all the word of the phrase
-Loop over the array looking for 'important'
  -For every coincidence, change the word 'important' with 'urgent'
-Convert the array to a string

*/
let advice = "Few things in life are as important as house training your pet dinosaur.";
let advice2 = 'important life is as important as the important life'

function importantToUrgent(phrase) {
  let wordsArray = phrase.split(' ');

  wordsArray.forEach((word, index) => {
    if (word === 'important') {
    wordsArray[index] = 'urgent';
    } 
  });
  return wordsArray.join(' ');
}

console.log(importantToUrgent(advice));
console.log(importantToUrgent(advice2));