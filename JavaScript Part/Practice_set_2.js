// js Practice set 2

// Problem 1 - Use logical operator to find whether the age is of person lies between 10 and 20?
let age = 25;
if(age >=10 && age <=20) {
    console.log("Age is lies between 10 and 20");
} 
else {
    console.log("Age is not lies between 10 and 20");
}

// Problem 2 - Demonstrate the use of switch  case statement in js 
let day = 2;
day = Number.parseInt(day);
switch(day) {
    case 1:
        console.log("The day is sunday");
        break;
    case 2:
        console.log("The day is monday");
        break;
    case 3:
        console.log("The day is tuesday");
        break;
    case 4:
        console.log("The day is wednesday");
        break;
    case 5:
        console.log("The day is thursday");
        break;
    case 6:
        console.log("The day is friday");
        break;
    case 7:
        console.log("The day is saturday");
        break;
    default:
        console.log("Invalid entered number");
}

// Problem 3 - Write a js program to find whether a number is divisible by 2 and 3 
let no = 12;
if(2 % no == 0 && 3 % no ==0) {
    console.log("Number is divisible by 2 and 3");
}
else {
    console.log("Number is not divisible by 2 and 3");
}

// Problem 4 - print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator 
let Age = 19;
const result = (Age > 18)?"You can drive":"You cannot drive";
console.log(result);