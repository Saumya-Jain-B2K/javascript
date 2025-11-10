//type conversion and type coercion
console.log("welcome to the type conversion");
let myVar;
myVar = String (34);
console.log(typeof myVar);

//variable
let isVar = String(34);
console.log(isVar, typeof isVar);

//boolean
let isBool = String(true);
console.log(isBool, typeof isBool);

//to find the date 
let date = String(new Date());
console.log(date, typeof date);

//array
let arr1 = String([1,2,3,4,5]);
console.log(arr1, typeof arr1);

//to convert to number
let boolVar = Number(true);
console.log(boolVar, typeof boolVar);

//number to string
let i = 45;
console.log(i.toString());

let srti = Number("34334");
stri = Number(false);
stri1 = Number([1,2,3,4,5,6]);
console.log(stri1);


let number = parseFloat('34.098');
console.log(number.toFixed(2), typeof number);
