function reverseWords(str) {
  let strArray = str.split(' ');
  let answerArr = strArray.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      return word.split('').reverse().join('');
    }
  });
  return answerArr.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"