function leadingSubstrings(str) {
  let stringConstruction = '';
  return str.split('').map((letter) => {
    return stringConstruction += letter;

  });
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]