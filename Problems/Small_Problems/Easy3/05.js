/*
input: positive integer 'n'
output: a right triangle whose sides each have 'n' stars.

-Triangle must have 5 stars in all the sides
-Hypotenuse must start on the bottom left and finish on the right top
-First line has one star and n -1 white spaces
-Last line has 'n' stars
-Every line has one more star and one less space than the line
 before until the line has 'n' stars

algorithm
- Get the number 'n'
- Initialize variable starsNumber = 1
- Initialize variable spacesNumber = n - 1
- Initialize counter = 0
- Loop 'n' times
  - Log in screen spacesNumber spaces and the starsNumber stars
  - starsNumber + 1
  - spacesNumber - 1
  - counter + 1
*/

function triangle(num) {
  let starsNumber = 1;
  let spacesNumber = num - 1;
  let counter = 0;
  while (counter < num) {
    console.log(' '.repeat(spacesNumber) + '*'.repeat(starsNumber));
    starsNumber += 1;
    spacesNumber -= 1;
    counter += 1;
  }
}

triangle(3);
triangle(8);
triangle(20);