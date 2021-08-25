function swap(string) {
  let wordsArray = string.split(' ');

  let swapArray = wordsArray.map(word => {
    if (word.length === 1) return word;

    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    let newWorld = lastLetter + word.slice(1, -1) + firstLetter;

    return newWorld;
  });

  return swapArray.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"