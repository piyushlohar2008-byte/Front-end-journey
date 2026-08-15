// loops in js 
// for loop -

// Printing 1 to 10 numbers using for loop 
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
// Printing even numbers between 0 to 20 
for (let even = 0; even <= 20; even+=2) {
    console.log(even);
}

// for in loop 
let marks = {
    piyush: 77.41,
    Aditya: 82.21,
    Aryan: 75.56
}
for(let mark in marks) {
    console.log(mark);
}

// While loop -
let num = 0;
while (num < 9) {
    console.log(num);
    num++;
}
// Printing reverse numbers  
let reverse = 10;
while (reverse >= 0) {
    console.log(reverse);
    reverse--;
}