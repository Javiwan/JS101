/*
inputs: any year greater than 0
outputs: return true if the year is leap year of false if not

Leap years are divisible by 4 but not by 100 unless divisible by 4, by 400 and by 100

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Algorithm
-Get the year
-Check if its divisible by 4
  - If not, return false
  - If yes, check if its divisible by 100
    -if not, return true
    if yes, check if its divisible by 400
      -if yes return true
      -if not return false
 */
/*
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return console.log(true);
      } else {
        return console.log(false);
      }
    } else {
      return console.log(true);
    }
  } else {
    return console.log(false);
  }
}
*/
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true