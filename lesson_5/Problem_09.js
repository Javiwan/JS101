let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(arr => {
  if (typeof arr[0] === 'number') {
    return arr.slice().sort((a,b) => a - b);
  } else {
    return arr.slice().sort();
  }
})

console.log(newArr);

