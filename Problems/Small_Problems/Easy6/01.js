function repeater(string) {

  return string.split('').map(letter => letter + letter).join('');

}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""