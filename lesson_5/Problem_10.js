let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArray = arr.map(innerArr => innerArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  })
);

console.log(newArray);
console.log(arr);
