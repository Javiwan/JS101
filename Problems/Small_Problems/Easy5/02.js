function union(...args) {
  let unionArr = [];
  args.forEach(arr => {
    arr.forEach(num => {
      if (!unionArr.includes(num)) {
        unionArr.push(num);
      }
    });
  });
  return unionArr;
}

console.log(union([1,3,5],[3,6,9],[6,9,8,2]));