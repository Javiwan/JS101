/*
input array
output number

iterate over the array
 -first iteration add first number
 -second iteration add first and second number
 -third iteration add first, second and third number
 -until array lenght + 1
 return the result
*/

function sumOfSums(arr) {
  return arr
    .map((_, idx) =>
      arr.slice(0, idx + 1)).flat().reduce((acc, num) => acc + num);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35