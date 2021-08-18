function halvsies(arr) {
  if (arr.length % 2 === 0) {
    return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
  } else {
    return [arr.slice(0, (arr.length / 2) + 1),
      arr.slice((arr.length / 2) + 1)];
  }
}

console.log(halvsies([1,2,3,4]));
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]