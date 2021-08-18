/*
input: positive or negative number indicating minutes
output: string with the hour in 24 mode

We start to count in 00:00
If number is positive, we add hours and minutes to 00:00
If number is negative, we substract from 23:60
If number is bigger or smaller than 24 hours we divide by 24

*/
/*
function timeOfDay(num) {
  let hours = Math.floor(Math.abs(num) / 60);
  let minutes = ((Math.abs(num) / 60) - hours) * 60;

  if (hours > 24) {
    hours = (Math.floor(hours / 24) - (hours / 24)) * 24;
  }

  if (num < 0) {
    hours = 23 - Math.floor(hours);
    minutes = 60 - minutes;
  }
  console.log( hours, minutes);
}
*/


function timeOfDay(num) {
  let hours;
  let minutes;
  if (num > 0) {
    hours = num / 60;
    if (Math.floor(hours) === 0) {
      hours = 0;
      minutes = num;
    } else {
      hours = Math.floor(hours);
      minutes = ((num / 60) - hours) * 60;
    }
  }
  console.log(hours, minutes);
}
timeOfDay(0);
timeOfDay(-3);
timeOfDay(35);
timeOfDay(-1437);
timeOfDay(3000);
timeOfDay(800);
timeOfDay(-4231);