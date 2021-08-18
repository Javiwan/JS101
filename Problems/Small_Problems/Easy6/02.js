/*
input: string
output: string

output must double every consonant only !(aeiou)
*/


function doubleConsonants(string) {
  let doubledConsonants = [...string].map(letter => {
    if ((letter > 'A' && letter <= 'Z') || (letter > 'a' && letter <= 'z')) {
      if (!('aeiouAEIOU').includes(letter)) {
        return letter + letter;
      } else {
        return letter;
      }
    } else {
      return letter;
    }
  });
  return doubledConsonants.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""