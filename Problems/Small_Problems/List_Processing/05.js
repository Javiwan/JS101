function substrings(str) {
  return (str.split('').map((_, index) => leadingSubstrings(str.slice(index, str.length + 2)))).flat();
}

function leadingSubstrings(str) {
  let stringConstruction = '';
  return str.split('').map(letter => {
    return stringConstruction += letter;

  });
}

console.log(substrings('abcd'));