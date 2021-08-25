function wordSizes(string) {
  if (string === '') return {};
  let obj = {};
  let stringArr = string.split(' ');
  let letterNumber = stringArr.map(word => word.length);
  letterNumber.forEach(num => {
    if (Object.keys(obj).includes(String(num))) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  });
  return obj;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));