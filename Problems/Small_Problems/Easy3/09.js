/*
input: string
output: the same string

- The inputs is a string with words and non-alphabetic characters
- Non-alphabetic character must be replaced by spaces.
- If there is more than one non-alphabetic character in a row, they will be replaced by just one space
- The result string must never have more than one consecutive space
- Alphabetic character are considerer form a to z


algorithm
-declare and initialize an array with all the alphabetic characters 
-delclare empty array newArray
-create empty string actualString
-loop over the characters of the string and check if the character is included in the alphabetic array
  -if character is not includes and actulaString is empty, go to the next
  -if character is not included and actualString is not empty, add actualString content to newArray and continue iteration
  -if character is included, add it to actualString
-join the new array with spaces and put it in the initial string
-return that string

*/

function cleanUp(string) {
  const newArray = [];
  let actualString = '';

  for (let counter = 0; counter < string.length; counter += 1) {
    if (!isAlphabet(string[counter]) && actualString === '') {
      continue;
    } else if (!isAlphabet(string[counter]) && actualString !== '') {
      newArray.push(actualString);
      actualString = '';
    } else {
      actualString += string[counter];
    }
  }
  return newArray.join(' ');
}

function isAlphabet(letter) {
  const alphabeticString = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabeticArray = alphabeticString.split('');
  return alphabeticArray.includes(letter);
}

console.log(cleanUp("---what's my +*& line?"));
console.log(cleanUp('Hello  +`98my+--friend-.-.'));