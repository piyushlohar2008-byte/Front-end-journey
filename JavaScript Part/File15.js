// Map, filter and reduce methods in array in js 

// Map method - 
// It is used to create a new array by applying a function to each element of an array
let arr1 = [3, 2, 1, 5, 4];
let a1 = arr1.map((value, index, Array)=> {
    console.log(value, index, Array);
})

// Filter method - 
// It is used to create a new array containing only the elements that satisfy a condition
let arr2 = [6, 7, 10, 2, 1, 5, 3, 4, 13];
let a2 = arr2.filter((a)=> {
    return a <= 7;
})
console.log(a2);

// Also written as:
let filterVar = (fill)=> {
    return fill > 5;
}
console.log(arr2.filter(filterVar));

// Reduce method - 
// It is used to reduce all array element into a single value by applying a function
let arr3 = [2, 2, 3, 7, 4, 6]
let a3 = (x, y)=> {
    return x + y;
}
console.log(arr3.reduce(a3));