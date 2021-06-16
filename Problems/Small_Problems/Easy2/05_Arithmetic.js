/*
inputs: two integers given by user
output: addition, subtraction, product, quotient,
remainder and power of the two integers

algorithm
-get number1
-get number2
-make array with operations [+, - , *, /, %, **]
-loop the array making everyone of the operation and printing them
*/

const readline = require('readline-sync');

let num1 = readline.question('Enter the fist number: ');

let num2 = readline.question('Enter the second number');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`
);
