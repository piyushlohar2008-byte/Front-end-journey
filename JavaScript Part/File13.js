// Basic array methods-2 in js 

// delete - 
let deleteArr = ["Piyush", "Aditya", "Aryan", "Raj"];
delete deleteArr[0];
console.log(deleteArr);
console.log(deleteArr.length);

// splice - 
deleteArr.splice(2);
console.log(deleteArr);

// concat -
// mostly used in array used to combine multiple arrays in single array  
let x = [10, 20, 30, 40];
let y = [15, 30, 45, 60];
let z = [20, 40, 60, 80];
let concatArr = x.concat(y, z);
console.log(concatArr);

// sort - 
let p = [2, 5, 1, 4, 7, 8, 6];
p.sort();
console.log(p);

// Note- sort method can be sort element in alphabetical order not ascending to descending order

// This function can sort array element in ascending to descending order 
let compare = (a, b)=> {
    return a - b;
}

let q = [255, 2, 14, 4, 90, 6, 781, 434 ,5];
// This is can't be sort in ascending to descending order this sort in alphabetical order
q.sort()
console.log(q);

// This can sort ascending to descending order easily
q.sort(compare);
console.log(q);