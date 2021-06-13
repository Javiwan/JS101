/*
inputs: two strings different lenghts
outputs: concatenatig short, long and short string

Examples:
shortLongShort('abc', 'defgh'); ---> 'abcdefgabc'
shortLongShort('abcde', 'fgh'); ---> 'fghabcdefg'
shortLongShort('', 'xyz'); ---> 'xyz'

Algorithm

- Get both strings
- Get both strings lenght and trim them
- Compare which one is the shorter
- Get a new string
- Add the shorter, add the larger and add the shorter again
- Print that string
*/

function shortLongShort(string1, string2) {
  return (string1.trim().length < string2.trim().length) ?
    string1 + string2 + string1 : string2 + string1 + string2;
}
console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));