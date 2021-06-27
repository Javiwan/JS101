/*
input: 4 string from user. Noun, verb, adverb adn adjective
output: A little story with this words injects in the text

- The input must be string given by the user
- Must collect 4 words from user
- Make strory where this 4 words can be injected
- Stroy must be one line phrase

algorithm

- Import the library to read input from user
- Ask for noun to user and put the user input in a variable called noun
- Ask for a verb to user and put the user input in a varuabla called verb
- Ask for an adjective to the user and put the user input in a variable
  called adjective
- Ask for an adverb to the user and put the user input in a variable
  called adverb
- Create a string where you can injects the words given by the user
- Return that phrase with all the words injected.
*/

const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);