//question 1
/*
let age = prompt("enter your age :");
age = Number.parseInt(age);
if (age >10 && age<20) {
    alert("Your age lies between 10 and 20");
}
else{
    alert("Your age does not lie between 10 and 20");
}
*/    

//question 2
/*
let num = prompt("Enter a number :");
num = Number.parseInt(num);
if (num%2==0 && num%3==0) {
    alert("The number is divisible by both two and three");
}
else{
    alert("The number is not divisible by both two and three");
}
*/    

//question 3
/*
let num1 = prompt("Enter a number :");
num1 = Number.parseInt(num1);
if (num1%2==0 || num1%3==0) {
    alert("The number is divisible");
}
else{
    alert("The number is not divisible");
}
*/

//question 4
let age = prompt("Enter your age");
age = Number.parseInt(age);
alert(age<18? "You cannot drive" : "You can drive");