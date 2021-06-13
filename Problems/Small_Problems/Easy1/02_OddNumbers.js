// no inputs
// outputs: all the odd number from 1 to 99 inclusive

//Algorith
// -loop all numbers from 1 to 99
//    - If number % 2 === 1 print to console
// -end
/*
for (let i = 1; i <= 99; i +=2){
  console.log(i);
}
*/
//Further exploration
//Inputs: two numbers, the beginner and the end 
//Output: all the odd numbers betwenn the two numbers

//Algorithm
// -Get number1
// -Get number2
// -Loop through all the values between number1 and number2
//   -If number % 2 === 1 print to console.
// -END

//FURTHER EXPLORATION

const readline = require('readline-sync');

function prompt(text){
  console.log(`=> ${text}.`);
}

prompt('Introduce first number:');
let num1 = Number(readline.question());

while (isNaN(num1) === true){
  num1 = Number(readline.question(prompt('Please enter a valid number')));
}

prompt('Introduce second number:');
let num2 = readline.question();

while (num2 < num1 || isNaN(num2) === true){
  num2 = Number(readline.question(prompt(`Please enter a valid number greater than the first number ${num1}`)))
}

for (let i = Number(num1); i <= Number(num2); i += 1){
  
  if(i % 2 === 1){
    console.log(i);
  }
}
