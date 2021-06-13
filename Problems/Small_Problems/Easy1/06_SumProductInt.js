/*
inputs: integer
output: sum of all integer between 1 and the integer introduced, both included
        product of all integer between 1 and the integer introduce, both included

algorithm
-ask for a integer greater than 0
-ask if user wants sum of product
-if user ask for sum
  -loop over all the numbers betwen 1 and integer introduced
  -sum all of them
-if the user as for product
  -loop over all the number between 1 and integer introduced
  -multiply all of them
-print the result
*/
/*
const readline = require('readline-sync');

function computeSum (number) {
  let result = 0;
  for (let counter = 1; counter <= number; counter += 1) {
    result += counter;
  }
  console.log (`The sum of the integer between 1 and ${number} is ${result}`);
}

function computeProduct (number) {
  let result = 1;
  for (let counter = 1; counter <= number; counter += 1) {
    result *= counter;
  }
  console.log(`The product of the integer between 1 and ${number} is ${result}`);
}

let value = Number(readline.question('Please enter an integer greater than 0:\n'));

while (Number.isNaN(value) === true || value <= 0) {
  value = Number(readline.question('Please enter a valid number greater than 0:\n'));
}

let userChoise = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n').toLowerCase().trim();

while (!['s' ,'p' ].includes(userChoise)) {
  userChoise = readline.question('Please enter a valid option "s" to compute sum or "p" to comput product:\n').toLowerCase().trim();
}

if (userChoise === 's') {
  computeSum(value);
} else {
  computeProduct(value);
}

*/

const readline = require('readline-sync');

function invalidNumber(num) {
  return Number.isNaN(Number(num)) === true ||
    num.trim() === '' ||
    num <= 0;
}

function invalidArray(arr) {
  return arr.some(invalidNumber);
}


function computeSumArray (accumulator, currentValue) {
  return Number(accumulator) + Number(currentValue);
}


function computeProductArray(accumulator, currentValue) {
  return Number(accumulator) * Number(currentValue);
}

function computeSum (number) {
  let result = 0;
  for (let counter = 1; counter <= number; counter += 1) {
    result += counter;
  }
  console.log (`The sum of the integer between 1 and ${number} is ${result}`);
}

function computeProduct (number) {
  let result = 1;
  for (let counter = 1; counter <= number; counter += 1) {
    result *= counter;
  }
  console.log(`The product of the integer between 1 and ${number} is ${result}`);
}


let value = readline.question('Please enter just one integer or numbers separated by commas:\n');

let splitedValue = value.split(',');

while (invalidArray(splitedValue)) {
  value = readline.question('Something was not correct. Please enter numbers separated by commas:\n');
  splitedValue = value.split(',');
}


let userChoise = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n').toLowerCase().trim();

while (!['s' ,'p' ].includes(userChoise)) {
  userChoise = readline.question('Please enter a valid option "s" to compute sum or "p" to comput product:\n').toLowerCase().trim();
}

if (userChoise === 's') {
  if (splitedValue.length > 1) {
    console.log(`The sum of the integers in the array is ${splitedValue.reduce(computeSumArray)}`);
  } else {
    computeSum(splitedValue);
  }
} else if (splitedValue.length > 1) {
  console.log(`The product of the integers in the array is ${splitedValue.reduce(computeProductArray, 1)}`);
} else {
  computeProduct(splitedValue);
}

