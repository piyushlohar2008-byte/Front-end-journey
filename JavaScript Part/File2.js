// Datatypes in JavaScript

// var is used to declare a function-scoped varible that can be reassigned
var num = 45;
var str = "Welcome to coding journey";
{
    // We can update variable
    str = "Hello World"
    console.log(str);
}
console.log(str);

// let is used to declare a block-scoped variable whose value can be changed
let a = 45;
let b = "Piyush";
console.log(a);
console.log(b);

// Simple block-scoped example -
let name = "Aditya";
{
    console.log(name);
    name = "Aryan";
}
console.log(name);


// const is used to declare a variable whose value cannot be changed
const PI = 3.1415;
console.log("Value of PI : "+PI);