function isRealPalindrome(str) {
  let strArray = str.toLowerCase().split('');
  const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let selectedArray = [];
  strArray.forEach(letter => {
    if (alphaNumeric.includes(letter)) {
      selectedArray.push(letter);
    }
  });
  console.log(selectedArray.join(''));
  console.log(selectedArray.reverse().join(''));
  return selectedArray.join('') === selectedArray.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false