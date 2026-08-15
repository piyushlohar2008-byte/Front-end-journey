// js Practice set 5
// Problem 1 - Create an array of number and take input from the user to add number to the array
let arr1 = [1, 2, 3, 4];
console.log(arr1);
let a = prompt("Enter number");
a = Number.parseInt(a);
arr1.push(a);
console.log(arr1);

// Problem 2 - Keep adding number to the array in 1 until 0 is added to the array
let arr2 = [3, 2, 5, 1, 6];
let a2;
do {
    a2 = prompt("Enter a number");
    a2 = Number.parseInt(a2);
    arr2.push(a2);
} while(0 != arr2);
console.log(arr2);

// Problem 3 - Filter for numbers divisible by 10 from a given array
let arr3 = [10, 25, 23, 44, 50, 720, 18];
let a3 = arr3.filter((x)=> {
    return x % 10 == 0;
})
console.log("Numbers that divisible by 10: ",a3);

// Problem 4 - Create an array of square of given numbers
let arr4 = [5, 7, 2, 19, 52];
let a4 = arr4.map((sqr)=> {
    return sqr * sqr;
})
console.log("Square of array elements: ",a4);

// Problem 5 - Use reduce to calculate factorial of a