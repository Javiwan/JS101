/*
inputs: user's name
output: greeting to user

algorithm
-get user name
-if user name have '!'
  -yells back to the user
-if not
 -normal greeting
*/

const readline = require('readline-sync');

let name = readline.question('What is your name?\n').trim();

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.toUpperCase().slice(0, name.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name[0].toUpperCase() + name.slice(1)}.`);
}