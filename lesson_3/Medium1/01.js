const phrase = 'The Flintstones Rock!';

for (let counter = 0; counter < 10; counter += 1) {
  console.log(phrase.padStart(counter + phrase.length));
}