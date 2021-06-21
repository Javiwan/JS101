function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}




function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if ( dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  
    return true;
  } else {
    return false;
  }
  
}

console.log(isDotSeparatedIpAddress('123.02.34.123'));
console.log(isDotSeparatedIpAddress('10.4.5.11'));
console.log(isDotSeparatedIpAddress('23.2.4'));
console.log(isDotSeparatedIpAddress('300.123.34.2'));