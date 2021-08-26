/*
input 2 dimensional array
output arra with fruits repited

-iterate over 2 dimensional array, we can use map
- return arr[0], arr[1] times
*/

function buyFruit(arr) {
  return arr.map(arr => {
    let newArr = [];
    for (let count = 0; count < arr[1]; count += 1) {
      newArr.push(arr[0]);
    }
    return newArr;
  }).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]