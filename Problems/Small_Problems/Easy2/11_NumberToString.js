/*
input: an integer
output: a string that represent that integer

algorithm

-Get the integer
-Divide the integer in units, tens, hundreds... and push them to an array
-Use an object to change integers to strings
-Join all together

*/

function integerToString(number) {
  let numbersArray = [];
  if (number === 0) {
    return '0';
  }
  while (number) {
    numbersArray.unshift(number % 10);
    number = (number - (number % 10)) / 10;
  }
  return numbersArray.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"