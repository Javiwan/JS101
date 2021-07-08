let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
/*
arr.sort((a,b) => {
    let arr1 = a.reduce((accu, num) => {
      if (num % 2 === 1) {
        return accu + num;
      } else {
        return accu;
      }
    }, 0);
    let arr2 = b.reduce((accu, num) => {
      if (num % 2 === 1) {
        return accu + num;
      } else {
        return accu;
      } 
    }, 0);
    
    return arr1 - arr2;

  })
*/

arr.sort((a,b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((acc, num) => acc + num);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((acc, num) => acc + num);

  return oddSumA - oddSumB;
})


console.log(arr);