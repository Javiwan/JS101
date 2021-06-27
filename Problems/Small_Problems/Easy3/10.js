/*
PROBLEM:

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

P - Understand the problem

input: integer
output: string

- Must take a year and return the century in a string
- The return string must start with the number of the year and finish with 'st', 'nd', 'rd', 'th'
- New centuries begins with '01' years
- If year finish in:
    1 => st
    2 => nd
    3 => rd
    rest => th

E - Examples

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

D - Data structure

input: integer
if statements
output: string

A - Algorithm

- Get the integer
- Declare and initialize resultString = ''
- Divide the integer by 100
  -If division has no rest, century is the same than the result of division, 
   add it to resultString
  -If division has a rest, century is the result of division + 1, 
   add it to resultString
- Check the last number of integer
  -If 1, add st to resultString
  -If 2, add nd to retultString
  -If 3, add rd to resultString
  -If other add th to resultString

- Return restulString

C - Coding
*/

function century(number) {
  let resultString = '';
  let division = Math.floor(number / 100);
  let rest = number % 100;

  if (rest === 0) {
    resultString = division.toString();
  } else {
    resultString = (division + 1).toString();
  }
  return endOfCentury(resultString);
}

function endOfCentury(resultString) {
  if (resultString[resultString.length - 2] !== '1') {
    switch (resultString[resultString.length - 1]) {
      case '1':
        return resultString + 'st';
      case '2':
        return resultString + 'nd';
      case '3':
        return resultString + 'rd';
      default:
        return resultString + 'th';
    }
  } else {
    return resultString + 'th';
  }

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"