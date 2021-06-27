function logInBox(string) {
  let bannerLength = string.length + 2;
  let horizontalLine = `+${'-'.repeat(bannerLength)}+`;
  let emptyLine = `|${' '.repeat(bannerLength)}|`;
  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox('hola');
logInBox('Long long time ago.');
logInBox('To boldly go where no one has gone before.');
logInBox('');

//Further exploration

function logInBox2(string, width = (string.length)) {
  let horizontalLine = `+${'-'.repeat(width + 2)}+`;
  let emptyLine = `|${' '.repeat(width + 2)}|`;
  if (width < string.length) {
    string = string.slice(0, width);
  }
  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox2('Long long time ago.', 8);
logInBox2('To boldly go where no one has gone before.', 12);
logInBox2('There is a train');

