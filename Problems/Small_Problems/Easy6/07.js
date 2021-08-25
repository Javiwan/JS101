function swapName(str) {
  let strArray = str.split(' ');
  let name = strArray.pop();
  return `${name}, ${strArray.join(' ')}`;
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"