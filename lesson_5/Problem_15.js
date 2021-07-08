/*
input: array with object
output: new array with objects that only contains even elements


*/


let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
  { g: [4, 8, 6], h: [4, 6] },
];


let selection = arr.filter(obj => {
  return Object.values(obj).every(arr => {
    return arr.every(num => num % 2 === 0);
  });
});

console.log(selection);

