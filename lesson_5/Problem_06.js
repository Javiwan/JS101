let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let name in munsters) {
  console.log(`${name[0].toUpperCase() + name.slice(1)} is a ${munsters[name].age}-year-old ${munsters[name].gender}.`);
}