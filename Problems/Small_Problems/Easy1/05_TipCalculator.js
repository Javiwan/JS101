/*
inputs: bill amount, tip rate
outputs: tip, total amount

algorithm
- ask for the bill
- ask for the tip rate
- compute tip
- add tip to bill
- print tip and tip + bill
*/

const readline = require('readline-sync');


let bill = parseFloat(readline.question('What is the bill?:\n'));

let tipRate = parseFloat(readline.question('What is the tip precentage?:\n'));

let tip = (bill * tipRate) / 100;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);