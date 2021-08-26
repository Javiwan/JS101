/*
input: array of numbers
output: new array

Output must return an array with the element sorted based on enghlish word

algorithm

- Create an object with relation numbers - english words
- Change numbers by words
- Alphabetically sort
- Change words by numbers
- Return the new array
*/

let dictionary = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

function alphabeticNumberSort(arr) {
  let dictionaryPairs = Object.entries(dictionary);
  let sortedArr = arr.map(num => dictionary[num]).sort();

  let finalArr = [];
  for (let count = 0; count < sortedArr.length; count += 1) {
    for (let count2 = 0; count2 < dictionaryPairs.length; count2 += 1) {
      if (sortedArr[count] === dictionaryPairs[count2][1]) {
        finalArr.push(Number(dictionaryPairs[count2][0]));
      }
    }
  }
  return finalArr;
}


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

console.log(alphabeticNumberSort(
  [0, 1, 7, 3, 4, 8, 6, 7, 8, 9, 10, 11, 2, 13, 14, 15, 10, 17, 18, 19]));