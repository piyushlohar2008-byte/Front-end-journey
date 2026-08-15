// Basic array methods-1 in js 

let arr = [10, 20, 30, 40, 50];
// toString method -
// convert array object into string 
let arr2 = arr.toString();
console.log(arr2, typeof arr2);

// join - 
let arr3 = arr.join(" and ");
console.log(arr3);

// push - 
// add element to the last position of list
let num = [1, 2, 3, 4, 5];
num.push(6);
console.log(num);

// pop - 
// delete last element of an array list
num.pop();
console.log(num);

// shift -
let a = [5, 15, 10, 45, 20, 30];
let b = a.shift(40);
console.log(b);

// unshift
// return length  
let c = a.unshift(10);
console.log(c);