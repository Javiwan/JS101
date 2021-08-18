function multiplyList(arr1, arr2) {
  let resultArray = [];
  for (let count = 0; count < arr1.length; count += 1) {
    resultArray.push(arr1[count] * arr2[count]);
  }
  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));


function multiplyList2(arr1, arr2) {
  return arr1.reduce((acc, _, index) => {
    acc.push(arr1[index] * arr2[index]);
    return acc;
  }, []);
}

console.log(multiplyList2([3, 5, 7], [9, 10, 11]));