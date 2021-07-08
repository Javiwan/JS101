/*
let hexa = { 0: '0', 1: '1', 2: '2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'a', 11:'b', 12:'c', 13:'d', 14:'e', 15:'f'};

function getUUIDSection(numbers) {
  let UUIDSection = '';
  for(let count = 0; count < numbers; count += 1){
    UUIDSection += getHexadecimal();
  } 
  return UUIDSection 
}

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}

function getHexadecimal() {
  return hexa[getRandomNumber()];
}

function getUUIDNumber(){
  return getUUIDSection(8) + '-' + getUUIDSection(4) + '-' + 
          getUUIDSection(4) + '-' + getUUIDSection(4) + '-' + 
          getUUIDSection(4) + '-' + getUUIDSection(12);
}

console.log(getUUIDNumber());

*/

function getUUID () {

  let char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let pattern = [8, 4, 4, 4, 12];

  let UUIDNumber = '';
  pattern.forEach((num, index) => {
    for (let count = 0; count < num; count += 1) {
      UUIDNumber += char[Math.floor(Math.random() * 16)];
    }
    if (index < pattern.length - 1) {
      UUIDNumber += '-';
    }
  })
  return UUIDNumber;

}

console.log(getUUID());
console.log(getUUID());
console.log(getUUID());
console.log(getUUID());