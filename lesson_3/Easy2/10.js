// Count the number or 't' in a phrase (one line expression code)


let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let number = statement1.split('').filter(letter => letter === 't').length;
let number2 = statement2.split('').filter(letter => letter === 't').length;
console.log(number);
console.log(number2);