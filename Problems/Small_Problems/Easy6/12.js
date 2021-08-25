function isBalanced(str) {
  let openBracketCount = 0;
  let closeBracketCount = 0;

  for (let count = 0; count < str.length; count += 1) {
    if (str[count] === '(') {
      openBracketCount += 1;
    } else if (str[count] === ')') {
      if (openBracketCount > closeBracketCount) {
        closeBracketCount += 1;
      } else {
        return false;
      }
    }
  }
  return openBracketCount === closeBracketCount;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);