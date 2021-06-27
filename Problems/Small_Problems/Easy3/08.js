/*
input: three integers
output: string

- Function must determine the mean of the three integers given
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

- Given integers are between 0 and 100
*/

function getGrade(num1, num2, num3) {
  let mean = (num1 + num2 + num3) / 3;

  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'c';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));