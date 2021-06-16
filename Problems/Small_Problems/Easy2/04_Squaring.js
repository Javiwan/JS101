let multiply = (num1, num2) => num1 * num2;

let square = (num) => multiply(num, num);

console.log(square(5) === 25);
console.log(square(-8) === 64);

//Further exploration solution

let power = (num, pow) => (
  pow === 1 ? num : multiply(num, power(num, pow - 1)));

console.log(power(2, 4));
console.log(power(5, 3));
console.log(power(2, 5));
