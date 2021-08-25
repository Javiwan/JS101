
function centerOf(str) {
  let strLength = str.length;
  if (strLength === 1) return str;
  if (strLength % 2 === 0) {
    return str[(strLength / 2) - 1] + str[(strLength / 2)];
  } else {
    return str[Math.ceil(strLength / 2) - 1];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"