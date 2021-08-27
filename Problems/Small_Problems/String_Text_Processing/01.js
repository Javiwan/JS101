/*
input: string
output: boolean

true is all letters are uppercase, non letter character don't count

algorithm

*/

function isUppercase(str) {
  return str === str.toUpperCase();
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true