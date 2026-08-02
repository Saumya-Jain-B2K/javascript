// console.log("hello everyone");

//variable
//var
// var a = 10;
// console.log(a);
//global scoped
// function num(){
//     console.log(a);
// }

//function scoped
// function num(){
//     var a = 10;
//     console.log(a);
// }

// num();
//console.log(a);

//let 
// let a = 10;
// console.log(a);
//it is only block scoped
//hence
// {
//     let a = 20;
//     console.log(a);

// }
// console.log(a);

//re-assign
// a = 20;
// console.log(a);

//const
// const b = 10;
// console.log(a);

//no re-declaration and re-assignment is possible

// b =20;
// console.log(b);

// function name(){
//     const b = 10;
//     console.log(b)
// }
// name();
//only availabe for scopes in which defined
// console.log(b)

// let naa = null;
// console.log(naa);
// console.log(typeof(naa));

//airthmentic binary operators
// let a = 10;
// let b = 20;
// //addition
// console.log(a+b);
// //substraction
// console.log(a-b);
// //multiplication
// console.log(a*b);
// //division
// console.log(b/a);
// //modulous
// console.log(b%a);
// //power
// console.log(3**2);

//unary airthmetic operators

//pre & post increment & decrement
// console.log(++a);
// console.log(a++)
// console.log(a)
// console.log(--a)
// console.log(a--)
// console.log(a)

//assignment operators =, +=, -=, *=, /=, %=
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a%=b);

//strict and loose equality
// console.log("5" != 5);

//using ternary operator
// let age = 20;
// console.log(age > 18 ? "Eligible to drive" : "Not Eligible to drive");

//logical operators [&&, ||, !]

//bitwise operators [&, |, ~, <<, >>, ^]

//for loop
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//reverse counting
// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

//string
// let fName = "Jhon";
// let lName = "Doe";
// console.log(fName);
// console.log(fName + " " + lName);
// console.log(fName+2);

// //using template literals
// console.log(`Hello! My name is: ${fName} ${lName}`)

//using string methods
// console.log(fName.length);
// console.log(fName.toUpperCase());
// console.log(fName.toLowerCase());
// console.log(fName.substring(1,2));

// let sen = "Hello everyone myself Jhon Doe";
// console.log(sen.split(" "));
// //in this way we can add intverted commas in writing the string
// let sen1 = "Hello everyone myself \"Jhon Doe\"";
// console.log(sen1);

//creating a function
// function add(a, b){
//     console.log(a+b);
// }

// add(2, 4);
// for(let i =1; i<5; i++){
//     add(i, i);
// }

// function tableOfNum(num){
//     for(let i = 1; i <= 10; i++){
//         // console.log("Table of " + num + " is: ");
//         console.log(`${num}` + "*" + `${i}` + "=" + `${num*i}`);
//     }
// }

// tableOfNum(16);

//using return function
// function mult(a, b){
//     return a*b;
// }

// let ans = mult(2, 3);
// console.log("Multiplication: " + ans);

//function as a variable
// const add = function(a, b){
//     return a+b;
// }

// console.log(add(2,3));

// const squareOfNum = function(num){
//     return num*num;
// }

// console.log(squareOfNum(4));

//arrow function
// const sq = (num) => {
//     return num**2;
// }

// console.log(sq(8));

//object creation
// let obj = {
//     a : "Hello",
//     age : 10,
// };

// console.log(obj.a);

// //array creation
// let arr = [1, 2, 3, 4];
// console.log(arr[3]);
// console.log(typeof(arr))
// console.log(arr.length);

// //array constructor
// let brr = new Array(1, 2, 3);
// console.log(brr);
// console.log(brr.length)

// //push, pop. shift, unshift
// brr.push(10);
// console.log(brr)
// brr.pop();
// console.log(brr)
// brr.shift();
// console.log(brr);
// brr.unshift(1);
// console.log(brr);
// brr.push(4, 5, 6);
// console.log(brr);

// //slice it runs from start index to n-1 index
// console.log(brr.slice(2,4));
// console.log(brr)
// //splice method
// console.log(brr.splice(1, 0, 10));
// console.log(brr)

//using map function
// let arr = [10, 20, 30, 34
//     , 79, 65, 90, 13
// ];
// let newArr = arr.map((num) => {
//     return num*num;
// })
// console.log(newArr);

// let arr1 = arr.map((num) => {
//     console.log(num);
// })
// console.log(arr1);

// let ans = arr.filter((num) => {
//     if(num%2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(ans);

// let srr = [1, "Hello", 2, "yoo", "lovely", 3, 6, 7];
// let ans1 = srr.filter((num) => {
//     if(typeof(num) === "string"){
//         return num;
//     }
// })
// console.log(ans1);

//using reduce function
// let arr = [10, 20, 30, 40, 50];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(ans);

//using sort method
//ascending order
// let arr = [3, 2, 8, 3, 6, 90, 45, 234];
// let ans = arr.sort((a, b) => a-b);
// console.log(ans);

//indexof
// console.log(arr.indexOf(2));

//descending order
// let arr1 = [3, 2, 8, 3, 6, 90, 45, 234];
// let ans1 = arr.sort((a, b) => b-a);
// console.log(ans1);

//find method
// console.log(arr);
// let ans = arr.find((num) => {
//     return num > 5;
// })
// console.log(ans);

//for each loop
// let arr = [1, 2, 3, 4, 5];
// let ans = arr.forEach((num, ind) => {
//     console.log(`Index: ${ind} and Value: ${num}`);
// })
// console.log(ans);

//for in loop
// let obj = {
//     name: 'Jhon',
//     age: 19,
//     city: 'New York',
//     greet: function() {
//         console.log("Hello");
//     },
// };

// for(let key in obj){
//     console.log(key + " " + obj[key]);
// }

// //for of loop
// let arr = [1, 2, 3, 4, 5];
// for(let val of arr){
//     console.log(val);
// }

// let str = "Hello";
// for(let val of str){
//     console.log(val);
// }

// //function for array
// function sum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let i = 0; i<len; i++){
//         sum += arr[i];
//     }
//     // console.log(sum);
//     return sum;
// }

// let ans = sum(arr);
// console.log(ans);

//another function
function greetMe(greet, fullName){
    console.log("Hello my name is: ", fullName);
    greet();
}

greetMe(greet, "Jhon Doe");

//function can be assigned to variables
// let greet = function() {
//     console.log("Hello! greetings from the editor");
// }
// greet();

// function greet() {
//     console.log("Hello! greetings from the editor");
// }

// //function use as a return function
// function square(number) {
//     return function (number) {
//         return number*number;
//     }
// }

// let ans = square();
// let fAns = ans(10);
// console.log(fAns);

// //function using in array element
// let arr = [
//     function (a,b) {
//         return a+b;
//     },
//     function (a,b) {
//         return a-b;
//     },
//     function (a,b) {
//         return a*b;
//     },
//     function (a,b) {
//         return a/b;
//     }

// ];

// let a1 = arr[0];
// let ans1 = a1(2,3);
// console.log(ans1);

// //using 2nd index element from the array
// let a2 = arr[1];
// let ans2 = a2(2,3);
// console.log(ans2);
// let a3 = arr[2];
// let ans3 = a3(2,3);
// console.log(ans3);
// let a4 = arr[3];
// let ans4 = a4(2,3);
// console.log(ans4);





