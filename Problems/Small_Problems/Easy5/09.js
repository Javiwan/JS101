let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function countOcurrences(arr) {
  let ocurrences = {};
  arr.forEach(element => {
    if (ocurrences[element]) {
      ocurrences[element] += 1;
    } else {
      ocurrences[element] = 1;
    }
  });
  printResults(ocurrences);
}

function printResults(obj) {
  Object.keys(obj).forEach(key => console.log(`${key} => ${obj[key]}`));
}

console.log(countOcurrences(vehicles));