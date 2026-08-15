// js Practice set 3

// Problem 1 - Write a program to print try again until user enter correct number
let correct_number = 45;
let no;
while (no != correct_number) {
    console.log("Try again");
    no = prompt("Enter number");
}
console.log("Correct Number");

// Problem 2 - Write a function to find mean of 5 numbers 
const mean = (a, b, c, d, e)=> {
    return (a + b + c + d + e) / 4;
}

let result = mean(4, 5, 6, 7, 8);
console.log("Mean of 5 numbers:",result);

// Problem 3 - Write a program to display keys in object using for in loop 
let obj = {
    village: "Mauje Vadgaon",
    city: "Kolhapur",
    state: "Maharashtra",
    country: "india"
}

for (let i in obj) {
    console.log(i);
}