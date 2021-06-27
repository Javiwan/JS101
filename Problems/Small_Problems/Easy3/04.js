/*
input: a biginteger
output: a biginteger the first fibonacci number with the given number of digits

algorithm
-Start calculating fibonacci series
  Initialize array fibonacciNumber with [1n,1n]
  Initialize variable sum = 0
  While fibonacciNumbers last elemen digits are less than the number given
    sum = fibonacciNumber[0] + fibonacciNumber[1]
    Quit first element in fibonacciNumber
    Add sum as last number of fibonacciNumber

  -if number has the number of digit specified by the argument of the function
    -return that number
  -if not, calculate next fibonnacci number
*/

function findFibonacciIndexByLength(number) {
  let fibonacciArray = [1n, 1n];
  let sum = 0;
  let count = 2n;
  sum = fibonacciArray[0] + fibonacciArray[1];

  while (notRightNumberOfDigits(fibonacciArray[1], number)) {
    sum = fibonacciArray[0] + fibonacciArray[1];
    fibonacciArray.shift();
    fibonacciArray.push(sum);
    count += 1n;
  }

  return console.log(count);
}

function notRightNumberOfDigits(fibonacciNumber, number) {
  return (fibonacciNumber.toString().length < number);
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
