console.log("Operators in JS");

// Arithmetic operator -
let a = 49;
let b = 7;
console.log("a + b:",a+b);
console.log("a - b:",a-b);
console.log("a / b:",a/b);
console.log("a * b:",a*b);
console.log("a % b:",a%b);
console.log("a ** b:",a**b);

// Increment, Decrement operator -
let x = 10;
console.log(++x);
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);

// Relational operator -
const p = 5;
const q = "5";
console.log(p == q); 
console.log(p != q); 
console.log(p === q); 
console.log(p !== q); 

// Conditional/Ternary operator -
let age = 18;
let result = (age >= 18)? 'You can vote':'You cannot vote';
// here, result = (condition) if condition true then print ('You can vote') else false then print ('You cannot vote')
console.log(result);

// Logical operator -
let num = 10;
console.log(num > 5 && num < 7); //if two condition is met then return true else one condition false then return false
console.log(num > 5 || num < 8); // if only one condition is met then return true else both condition is not met then return false
console.log(!true); // !true = false and !false = true

// Assignment operator -
let ass = 10;

console.log(ass += 10);
console.log(ass -= 10);
console.log(ass /= 10);
console.log(ass *= 10);