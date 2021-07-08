/*
input: object
output: array

The output must be an array with the 
  - colors of the fruits capitalized
  - size of vegetables uppercased
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (let element in obj) {
  if (obj[element].type === 'fruit') {
    arr.push(obj[element].colors.map(color => color[0].toUpperCase() + color.slice(1))co);
  } else {
    arr.push(obj[element].size.toUpperCase());
  }
}

console.log(arr);