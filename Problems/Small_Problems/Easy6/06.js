/*function sequence(num) {
  let sequenceArray = [];
  for (let count = 1; count <= num; count += 1) {
    sequenceArray.push(count);
  }
  return sequenceArray;
}*/

function sequence(num) {
  let sequenceArray = [];
  sequenceArray.length = num;
  return [...sequenceArray].map((_ , index) => index + 1);

}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]