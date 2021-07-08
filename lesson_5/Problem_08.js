let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let values = Object.values(obj);
let vocals = [];
values.forEach(arr => arr.forEach(word => word.split('').forEach(letter => {
  if ('aeiou'.includes(letter)) {
    vocals.push(letter);
  }
})));

console.log(vocals.join(''));