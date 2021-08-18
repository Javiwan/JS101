function interleave(arr1, arr2) {
  let newArr = [];

  return arr1.map((element, index) => {
    return [element, arr2[index]];
  }).flat();

  /*arr1.forEach((element, index) => {
    newArr.push(element, arr2[index]);
  });*/

  /*for (let count = 0; count < arr1.length; count += 1) {
    newArr.push(arr1[count], arr2[count]);
  }*/

  //return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]