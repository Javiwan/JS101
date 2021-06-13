/*
inputs: height and width
outputs: Area in square, Area in square feet

Algorithm
- get height
- get width
- solve area in meters
- solve area in feets
- print both values
*/
const FEET_IN_SQUARE_METERS = 10.7639;
let areaInFeets;
let areaInMeters;

const readline = require('readline-sync');

function validInputSelection(string){
  return Number.isNaN(Number(string)) ||
    Number(string) < 0 ||
    Number(string) > 2 ||
    string.trim() === '';
}

console.log('Would you like to work in 1) Meters or 2) Feets. (Chose a number)');
let selection = readline.question();

while(validInputSelection(selection)){
  selection = readline.question('Please introduce a number between 1 and 2:\n');
}

let length = Number(readline.question('Enter the length of the room:\n'));

while (Number.isNaN(length)){
  length = parseInt(readline.question('Plese introduce a valid number:\n'),10);
}

let width = Number(readline.question('Enter the width of the room:\n'));

while (Number.isNaN(width)){
  width = parseInt(readline.question('Plese introduce a valid number:\n'),10);
}

switch (selection){
  case '1':
    areaInMeters = length * width;
    areaInFeets = areaInMeters * FEET_IN_SQUARE_METERS;
    console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeets.toFixed(2)} square feet)`);
    break;
  
  case '2':
    areaInFeets = length * width;
    areaInMeters = areaInFeets / FEET_IN_SQUARE_METERS;
    console.log(`The area of the room is ${areaInFeets.toFixed(2)} square feets (${areaInMeters.toFixed(2)} square meters)`);
    break;
}



