/*
Create an array for the object given that contains only two
 elements, Barney's name and number
 */

 let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

 let newArray = Object.entries(flintstones)[2];

 console.log(newArray);