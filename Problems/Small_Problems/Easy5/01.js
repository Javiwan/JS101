function dms(num) {
  let deg = Math.floor(num);
  let count = num;
  let min;
  let sec;
  if (num % 1 === 0) {
    min = 0;
    sec = 0;
  } else {
    count = (num - deg) * 60;
    min = Math.floor(count);
    (count % 1 === 0) ? sec = 0 : sec = Math.floor((count - min) * 60); 
  }

  return `${deg}°${numbersToString(min)}'${numbersToString(sec)}"`;
}

function numbersToString(num) {
  if (Math.floor(num / 10) === 0) {
    return '0' + String(num);
  } else {
    return String(num);
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"