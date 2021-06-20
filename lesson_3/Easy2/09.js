//Center the title in a screen of 40 characters long

let title = "Flintstone Family Members";

const WIDTH = 40;

let titleWidth = title.length;

let whiteSpace = 40 - titleWidth;

let leftPadding = Math.floor(whiteSpace / 2);

console.log(title.padStart(leftPadding + title.length));