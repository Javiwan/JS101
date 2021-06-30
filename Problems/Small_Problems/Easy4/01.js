function randomNumberBetween(max, min) {
  return Math.floor( Math.random() * (max - min + 1) + min);
}
let teddyAge = randomNumberBetween(120, 20);
console.log(`Teddy is ${teddyAge} years old!`);