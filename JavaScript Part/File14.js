// Using loops in array in js 

// 1. For loop -
let arr1 = ["Samarth", "Piyush", "Aniket", "Chintu"];
for(let i = 0; i < arr1.length; i++) {
    console.log(i);
}

// for-of loop -
// It is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
// It returns the value of the elements one by one
for (let iterator of arr1) {
    console.log(iterator);
}

// for-in loop - 
// It is used to iterate over the properties (keys/index) of an object/array
let array = [10, 40, 30, 20, 50];
for (let key in array) {
    console.log(array[key]);
}

// forEach loop - 
// It is used to execute a function once for each element in an array 
let arr2 = [1, 2, 4, 7, 3];
arr2.forEach((num)=> {
    console.log(num * num);
})