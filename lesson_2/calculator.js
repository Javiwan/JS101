//Ask the user for the first number.
//Ask the user for the second number.
//Ask the user for an operation to perform.
//Perform the operation on the two numbers.
//Print the result to the terminal.

const readline = require('readline-sync');

function promp(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

promp('Welcome to Calculator!');

let repeat = true;

while (repeat) {

  promp("What's is the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    promp("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  promp("What's is the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    promp("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  promp('What operation would you like to perform?\n1) Add 2) Substract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    promp('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  promp(`The result is ${output}`);

  promp('Do you want to make another operation? "y" yes or "n" no');
  let answer = readline.question();

  while (!['y', 'n'].includes(answer)) {
    answer = readline.question(promp("Didn't understand you, push \"y\" for yes or \"n\" for no"));
  }

  if (answer === 'n') {
    repeat = false;
  }
}

promp('Bye bye!');

