// Functions in js 
// A js function is a block of code that designed to perform a perticuler task 
// There are two ways to create function in js 

// first way 
// in js function created using function keyword like this - 
function displayNum() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Calling the function 
displayNum();

// second way 
const print = ()=> {
    return "Hello World";
}

let getFun = print();
console.log(getFun);

// function with parameters 
const natural = (num)=> {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let no = 10;
let sum_of_natural = natural(no);
console.log("Sum of natural number: ",sum_of_natural);

// function with default parameters 
const default_parameter = (name = "Piyush", rollno = 30, age = 19)=> {
    console.log(name);
    console.log(rollno);
    console.log(age);
}

default_parameter();