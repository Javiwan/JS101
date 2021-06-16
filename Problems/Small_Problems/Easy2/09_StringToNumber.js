/*
input: a string of digits
output: the number represented by the string

Write a function that gets a string of numbers and returns the numbers
represented by the string, cannot use parseInt() or Number() or String()
*/

function stringToInteger(string) {
  let stringArray = string.split('');
  const conversion = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
    5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10};

  let numbersArray = stringArray.map(num => conversion[num]);
  return numbersArray.reduce((acum, num) => (acum * 10) + num);
}

//Further exploration

function hexadecimalToInteger(string) {
  let stringArray = string.toLowerCase().split('');
  const conversion = {0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5: 5, 6: 6, 7: 7, 
    8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

  let numbersArray = stringArray.map(num => conversion[num]);
  return numbersArray.reduce((acum, num) => (acum * 16) + num);
}

console.log(hexadecimalToInteger('4D9f'));
console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);
console.log(stringToInteger('348734'));