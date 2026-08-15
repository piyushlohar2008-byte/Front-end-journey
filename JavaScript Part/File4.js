// Primitive datatypes in JavaScript 

// Null -
let a = null;
// Number -
let b = 1234;
// String -
let c = "Hello";
// Symbol -
let d = Symbol("Hello World");
// Boolean -
let e = true;
// BigInt -
let f = BigInt("123") + BigInt("321");
// undefined-
let g = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// typeof operator is used to check the datatype of a variable
console.log("type of variable d is : "+typeof d);
console.log("type of variable g is : "+typeof g);

// Objects in JavaScript 
// Object is used to store multiple related values as key-value pair

let obj = {
    name: "Piyush",
    age: 18,
    branch: "Computer Science",
    city: "Kolhapur"
};
// Printing all keys and values in objects
console.log(obj)

// We also can access specific value 
console.log(obj.name);
console.log(obj.age);

// Array -
let arr = ["Mumbai","Kolhapur", "Pune", "bengalore"];
console.log(arr[0]);