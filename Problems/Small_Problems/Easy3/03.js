/*
input: a positive integer
output: a string of alternating '1' and '0' with the length given by the integer

algorithm
-Initialize string with empty string
-loop the number of times given by the integer
  -If number is odd add '1' to the string
  -If number is even add '0'
*/

function stringy(num) {
  let binaryString = '';
  for (let count = 0; count < num; count += 1) {
    binaryString += (count % 2 === 0) ? '1' : '0';
  }
  return binaryString;
}

console.log(stringy(8));
console.log(stringy(12));
console.log(stringy(6));
console.log(stringy(7));