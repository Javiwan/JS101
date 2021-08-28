function swapCas(str) {
  let strArr = str.split('');
  return strArr.map(letter => {
    if (letter.toUpperCase() === letter) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  }).join('');
}

const swapCase = (str) => [...str].map(letter => {
  return /[a-z]/g.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
}).join('');


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"