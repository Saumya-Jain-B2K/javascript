// ques 1
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = prompt("enter the element: ");
// num = parseInt(num);

// for (let i = 0; i < arr.length; i++){
//     if (num == arr[i]){
//         arr.splice(i, 1);
//         console.log(arr);
//     }
// }
// console.log(`The final array is ${arr}`);

// ques 2
// let num1 = prompt("enter the number : ");
// console.log(num1.length);

// ques 3
// let num = 123456;
// let sum = 0;
// let rev = num;

// while (rev > 0) {
//     let n = rev % 10;
//     sum = sum + n;
//     rev = rev/10;
// }

// console.log(sum);

//ques 4
//factorial of a given number
// let num = 5;
// let fact = 1;

// for (let i = num; i>=1; i--){
//     fact = fact * i;
// }

// console.log(`The factorial of ${num} is ${fact}`);


// ques 5 
//printing the largest positive number from an array

let arr = [1, 45, 56, 2, 32, 9];
let largest = 0;

for (let i = 0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(`The largest number in the ${arr} is ${largest}`);