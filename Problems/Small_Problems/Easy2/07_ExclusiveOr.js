/*
input: two arguments
output: return true if exactly one of the arguments is truthy.

The function will receive two arguments, if only one of them is truthy,
it will return true, otherwise, it will return false.

*/

function xor(element1, element2) {
  return !!((element1 && !element2) || (!element1 && element2));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1,1) === false);
console.log(xor(true, true) === false);

// Another one
/*
function xor(a, b) {
  return Boolean(a) !== Boolean(b);
}
*/