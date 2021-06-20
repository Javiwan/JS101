let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers);

let reversedNumbers2 = [...numbers].sort((num1, num2) => num2 - num1);

console.log(reversedNumbers2);

let sortedArray = [];
numbers.forEach((num, index) => {
  sortedArray.push(numbers[(numbers.length - 1) - index]);
});

console.log(sortedArray);

//Better way
let newArray = [];
numbers.forEach(num => newArray.unshift(num));

console.log(newArray);

console.log(numbers);