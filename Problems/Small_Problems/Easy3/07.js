/*
input: integer
output: the integer multiplied by 2. If the integer given is double,
       just return the integer

- A number is double if it has an even-length number and
  left-side digit are the same than right-side digits
- If a number es odd-lenght, is not double
- input is always an integer
- no empty entrie allowed

algorithm

- Get the integer 'n'
- Check if the length of n is even
  -If length is odd, return n multiplied by 2
  -If length is even
    -Divide the length of n / 2
    -The first part of number will be from first digit to n/2 digit
    -The second part of number will be from n/2 + 1 digit to the las digit
    -If they are equal, return 'n'
    -If not, return n multiplied by 2


*/

function twice (num) {
  let numString = num.toString();
  let compareArr = [];
  if (numString.length % 2 === 0) {
    let halfLength = numString.length / 2;
    compareArr.push(numString.slice(0, halfLength));
    compareArr.push(numString.slice(halfLength));
    if (compareArr[0] === compareArr[1]) {
      return num;
    } else {
      return num * 2;
    }

  } else {
    return num * 2;
  }
}

console.log(twice(234));
console.log(twice(1212));
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676