// Conditional statements in js 
//1. if-
let name = "Piyush";
let Name = "Piyush";
if(name === Name) {
    console.log("Correct name");
} 

//2. if-else-
let age = 18;
if (age > 18) {
    console.log("You can vote");
}
else {
    console.log("You cannt vote");
} 

//2. if-else ladder-
let mark1 = prompt("Enter marks of first subject:");
let mark2 = prompt("Enter marks of second subject:");
let mark3 = prompt("Enter marks of third subject:");
let mark4 = prompt("Enter marks of fourth subject:");

mark1 = Number.parseFloat(mark1);
mark2 = Number.parseFloat(mark2);
mark3 = Number.parseFloat(mark3);
mark4 = Number.parseFloat(mark4);
let total = mark1 + mark2 + mark3 + mark4;
let per = total / 4;
if (per >= 80 && per <= 100) {
    console.log("First Class");
}
else if (per >= 60 && per < 80) {
    console.log("Second Class");
}
else if (per >= 50 && per < 60) {
    console.log("Third Class");
}
else if (per >= 40 && per < 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

// Switch case statement-
let a = 49;
let b = 7;

console.log("1. Addition");
console.log("2. Substration");
console.log("3. Division");
console.log("4. Multiplication");

let c = 0;
let switch_var = prompt("Enter your choice:");
switch_var = Number.parseInt(switch_var);

switch(switch_var) {
    case 1:
        c = a + b;
        console.log(c);
        break;
    case 2:
        c = a - b;
        console.log(c);
        break;
    case 3:
        c = a / b;
        console.log(c);
        break;
    case 4:
        c = a * b;
        console.log(c);
        break;
    default: 
        console.log("Invalid entered number");
};