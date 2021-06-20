
let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['BamBam', 'Pebbles']);

//Write code that get the nested array from above and make
//a new array in an un-nested format

// First way

let unNested1 = flintstones.flat();
console.log(unNested1);

// Second way

let unNested2 = [];
unNested2 = unNested2.concat(...flintstones);
console.log(unNested2);


// Third way
let unNested3 = [];
flintstones.forEach(element => unNested3 = unNested3.concat(element));
console.log(unNested3);


// Forth way

unNested4 = flintstones.reduce((acc, elem) => {
  return acc.concat(elem);
}, []);
console.log(unNested4);