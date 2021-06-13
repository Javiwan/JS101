//PEDAC
// inputs: one integer positive, negative or zero
// outputs: true if numbers absolute value is odd

/*Examples
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

Algorithm
- Find absolute value of number
- If number = 0, return false
- Make number % 2
  -If equals 1 return true
  -If equals 0 return false
*/

function isOdd(num){
  num = Math.abs(num);
  
  if (num % 2 === 1){
    return true;
  }else{
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/* Much better solution
function isOdd(num){
  return Math.abs(num) % 2 === 1;
}
*/