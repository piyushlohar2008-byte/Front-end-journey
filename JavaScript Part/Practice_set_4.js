// js Practice set 4 

// Problem 1 - What will the following print in js console.log("harry\"".length)
let Name = "harry\"";
console.log(Name.length);

// Problem 2 - Explore the includes, startsWith and endsWith function for a string
let str = "JavaScript is best programming launguage";
console.log(str.includes("best"));
console.log(str.startsWith("JavaScript"));
console.log(str.endsWith("lang"));

// Problem 3 - Write a program to convert string into uppercase
let str2 = "Python";
console.log(str2.toUpperCase());

// Problem 4 - Extract the amount out of this string "Please give rs 10000"
let str3 = "Please give rs 10000";
let amount = Number.parseInt(str3.slice(15));
console.log(amount);

// Problem 5 - Try to change 4th character of a given string 
let str4 = "JavaScript";
console.log(str4.replace("Java", "Type"));