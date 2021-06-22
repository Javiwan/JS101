function integerToString(number) {
  let numbersArray = [];
  if (number === 0) {
    return '0';
  }
  while (number) {
    numbersArray.unshift(number % 10);
    number = (number - (number % 10)) / 10;
  }
  return numbersArray.join('');
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case 1:
      return '+' + integerToString(number);

    case -1:
      return '-' + integerToString(-number);

    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");