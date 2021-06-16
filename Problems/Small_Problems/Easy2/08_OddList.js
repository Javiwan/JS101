/*
input: an array with varios element
output: an array with every other element in the first array

algorithm
-get the array of elements
-loop over every element in the array and put element in odd
position in a new array
-return the new array
*/

function oddities(array) {
  let resultArray = [];
  for ( let counter = 0; counter < array.length; counter += 1) {
    if (counter % 2 === 0) {
      resultArray.push(array[counter]);
    }
  }
  return resultArray;
}

function evens(array) {
  let resultArray = [];
  array.forEach((element, index) => {
    if (index % 2 === 1) {
      resultArray.push(element);
    }
  });
  return resultArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evens(["abc", "def"])); // logs ['abc']
console.log(evens([123])); // logs [123]
console.log(evens([])); // logs []