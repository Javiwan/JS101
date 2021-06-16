/*
input: A phrase
output: the next to last word of the phrase

examples:
'last word' ==> 'last'
'Launch School is great' ==> 'is'

algorithm
-get the phrase
-put every word, divided by blank space, in an array
-search for next to last array value and return it
*/

function penultimate(string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2];

}

console.log(penultimate('Launch School is great'));
console.log(penultimate('Long long time ago'));
console.log(penultimate('Once upon a time'));

//Further exploration
//Find the middle word of a phrase and take care of all edge cases

function middleWord(string) {
  if (string.trim() !== '') {
    let wordsArray = string.split(' ');

    if (wordsArray.length % 2 === 1) {
      return wordsArray[Math.floor(wordsArray.length / 2)];
    } else {
      return wordsArray[(wordsArray.length / 2) - 1] + ' ' + wordsArray[wordsArray.length / 2];
    }
  } else {
    return 'Error: The string is empty';
  }

}

console.log(middleWord('Launch School is great'));
console.log(middleWord('I like to eat oranges'));
console.log(middleWord('Hello'));
console.log(middleWord(''));
console.log(middleWord(' '));