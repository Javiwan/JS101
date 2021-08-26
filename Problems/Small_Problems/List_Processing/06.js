function palindromes(str) {
  let subStrings = substrings(str);

  return subStrings.filter(str => {
    if (str.length > 1) {
      return str === str.split('').reverse().join('');
    } else {
      return false;
    }
  });
}

function substrings(str) {
  return (str.split('').map((_, index) => leadingSubstrings(str.slice(index, str.length + 2)))).flat();
}

function leadingSubstrings(str) {
  let stringConstruction = '';
  return str.split('').map(letter => {
    return stringConstruction += letter;

  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]