//Creates a new string with all letters lowercase except the fist one

let munsterDescription = 'the Munsters are CREEPY and Spooky.';

let finalString = munsterDescription[0].toUpperCase() + munsterDescription.slice(1).toLowerCase();

console.log(finalString);