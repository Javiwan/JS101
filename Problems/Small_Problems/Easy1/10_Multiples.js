/*
inputs: an integer greater than 1
outputs: the sum of al number multiple of 3 and 5 between 0 and the integer inclusive.

Examples
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Algorithm
-Get the integer
-Create variable result
-For every number from 1 to the integer if its divisible by 3 or 5 add it tu result
-Return result
*/

function multisum(num) {
  let sum = 0;
  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
    }
  }
  return console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
