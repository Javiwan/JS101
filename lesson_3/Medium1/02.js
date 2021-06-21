/*
algorithm
- Get the phrase length
- Loop over all the letters on the phrase
  -If the letter is UpperCase convert to LowerCase
  -If the letter is LowerCase convert to UpperCase
*/
let munsterDescription = 'The Munsters are creepy and spooky.';

let phraseLength = munsterDescription.length;

let newString = '';

for( let counter = 0; counter < phraseLength; counter += 1) {
  munsterDescription[counter] === munsterDescription[counter].toUpperCase() ? 
    newString += munsterDescription[counter].toLowerCase() : newString += munsterDescription[counter].toUpperCase();
}

console.log(newString);

//Other way

console.log(
  munsterDescription.split('').map(letter => {
    if(letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  }).join('')
);