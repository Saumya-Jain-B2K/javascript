//question1
console.log("har\"".length);

//question2
//include it returns true or false by cjecking if the given string is present in the string or not
let a = "Saumya";
console.log(a.includes("a"));
//startswith
console.log(a.startsWith("A"));
//endswith
console.log(a.endsWith("a"));

//question3
console.log(a.toLowerCase());

//question4 
//extracting the amount from the given string
let str = "Please give Rs 1000";
console.log(str.slice(15, 19)); //1000

//question5
//trying to change 4th character of the string
console.log(a[3].replace("m", "M"));