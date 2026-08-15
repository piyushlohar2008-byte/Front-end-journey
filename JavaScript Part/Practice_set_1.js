// js Practice set 1 

// Question 1 - Create a variable of type string and try to add a number to it
let a = "Harry";
let b = 45;
console.log("a + b = ", a+b);

// Question 2 - Use typeof operator to find the string in last question 
console.log(typeof (a+b));

// Question 3 - Create a const object in js can you change it to hold a number later 
const obj = {
    person: "Vikas",
    age: 36,
    salary: 55000
};

// We can update object value using there key
obj.person = "Param";
console.log(obj.person);

// Question 4 - Write a program to create a word-meaning dictionary of 3 words and print it

// Creating dictionary using const and object 
const dict = {
    fav_movie: "Avengers Doomsday",
    fav_superhero: "Iron man",
    fav_actor: "Robert Dawney junior"
};

// Printing dictonary 
console.log(dict);