/*
input: string
output: string

rules:
  -all consecutive duplicatd characters must be collapsed into single character
  -empty string should return empty string

algorithm
  -Declare a result variable and initialize to an empty array
  -Make an array with all letters in the string
  -Loop over the array
    - If the array element is different to the last array element
      - Unshift the array element to the result array.
  -Join the resul array to a string and return it
*/

function crunch(string) {
  let result = [];
  let lettersArray = string.split('');
  for (let counter = 0; counter < lettersArray.length; counter += 1) {
    if (lettersArray[counter] !== lettersArray[counter + 1]) {
      result.push(lettersArray[counter]);
    }
  }
  return result.join('');

}

console.log(crunch('ddia'));
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""