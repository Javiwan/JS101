/*
inputs: array with name elements
        object with two keys 'title' and 'occupation' and its values
output: a greeting that uses the person full name and mention the person title

Algorithm
-create function with two arguments: array and object
-create a string with the array names separated by ' '
-make greeting string using string interpolation
*/
let nombres = ['John', 'Q', 'Doe'];

let titulos = {
  title : 'Master',
  occupation: 'Plumber'
};


function greetings(arr, obj) {
  let name = arr.join(' ');
  console.log(`Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

greetings(nombres, titulos);