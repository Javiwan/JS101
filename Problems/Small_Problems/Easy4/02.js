const readline = require('readline-sync');

function print(str) {
  console.log(`Enter the ${str} number: `);
}

const userNumbers = [];

userNumbers.push(Number(readline.question(print('1st'))));

userNumbers.push(Number(readline.question(print('2nd'))));

userNumbers.push(Number(readline.question(print('3rd'))));

userNumbers.push(Number(readline.question(print('4th'))));

userNumbers.push(Number(readline.question(print('5th'))));

let lastOption = (Number(readline.question(console.log('Enter the last number:'))));

if (userNumbers.includes(lastOption)) {
  console.log(`The number ${lastOption} appears in ${userNumbers}.`);
} else {
  console.log(`The number ${lastOption} does not appear in ${userNumbers}.`);
}

//Further exploration

function isIncluded(arr, val) {
  return arr.some(num => num > val);
}

console.log(isIncluded(userNumbers, lastOption));