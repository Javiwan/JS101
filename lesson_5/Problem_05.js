let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersKeys = Object.keys(munsters);
let ageSum = 0;
munstersKeys.forEach(key => {
  if (munsters[key].gender === 'male') {
    ageSum += munsters[key].age;
  }
});

console.log(ageSum);