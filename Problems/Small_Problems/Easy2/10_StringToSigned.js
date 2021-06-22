function stringToInteger(string) {
  let stringArray = string.split('');
  const conversion = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
    5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10};

  let numbersArray = stringArray.map(num => conversion[num]);
  return numbersArray.reduce((acum, num) => (acum * 10) + num);
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));

    case '+':
      return stringToInteger(string.slice(1));

    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);