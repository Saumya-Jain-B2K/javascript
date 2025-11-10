// ques 1
let num = 570;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//ques 2
let name  = prompt("Enter your name :");
let age = prompt("Enter your age :");

alert(`${name} is ${age} years old`);

// ques 3- switch statement to print months in quarter
let quarter = 1;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid quarter entered");
}

//ques 4
let str  = "apple";

if (str[0] === 'A' || str[0] === 'a' && (str.length > 5)) {
    console.log("Golden");
} else {
    console.log("Not Golden");
}

// ques 5 - program to find the largest of three numbers
let a = 10;
let b = 20;
let c = 30;

if (a>b && a>c) {
    console.log(`${a} is the largest number`);
} else if (b>a && b>c) {
    console.log(`${b} is the largest number`);
} else {
    console.log(`${c} is the largest number`);
}

// ques 6 - check if the two given numbers have the same last digit

let num1 = 123;
let num2 = 453;

if((num1%10) === (num2%10)){
    console.log("Both numbers have the same last digit");
} else {
    console.log("Both numbers do not have the same last digit");
}