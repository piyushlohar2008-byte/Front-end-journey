// String methods in js 
// Mostly used string methods in js - 

// 1. length -
// Display length of string 
let sub = "JavaScript";
console.log(sub.length);

// length also calculate extra space in string 
let extraSpace = "    ExtraSpace "
console.log(extraSpace.length);

// 2. CharAt -
// Display perticuler character at index 4
console.log(sub.charAt(4));

// 3. indexOf -
// Display index of perticuler character v
console.log(sub.indexOf('v'));

// 4. toUpperCase -
// Convert string into upper case 
console.log(sub.toUpperCase());

// 5. toLowerCase -
// Convert string into lower case 
console.log(sub.toLowerCase());

let trimVar = "     Veena "
// 6. trim -
// Remove extra space of string
console.log(trimVar.trim());

let sub2 = " is best launguage";
// 7. concat -
// Used to add two strings and also add coustom content/string (concat) 
console.log(sub.concat(sub2, " (coustom contect)"));

// 8. slice -
// Display perticuler index to index character in string and also display perticuler index of character to last character
console.log(sub2.slice(1, 9));
console.log(sub2.slice(4));

// 9. replace-
// Replace string  
console.log(sub.replace("JavaScript", "Java"));

// 10. repeat -
// Repeat string in n of times 
console.log(sub.repeat(3));