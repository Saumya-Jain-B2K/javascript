//question1
//array and add elements from the user to enter in this array
// let arr  = [1,2,3,4,5,6,7,8];
// let a = prompt("enter a number :");
// let b = Number.parseInt(a);
// arr.push(b);
// console.log(arr);

//question2
// let arr  = [1,2,3,4,5,6,7,8];
// let a;
// let b;
// while(b!= 0){
//     a = prompt("enter a number :");
//     b = Number.parseInt(a);
//     arr.push(b);
//     console.log(arr);

// }

//question3
// let arr1 = [12,56,34,90,75,100,50,45,10];
// let n = arr1.filter((x) => {
//     return (x%10 == 0);
// })
// console.log(n);

//question4
// arr2 = [1,2,3,4,5];
// let w = arr2.map((v) => {
//     return v*v;
// })
// console.log("square of array is : ",w);

//question5
arr2 = [1,2,3,4,5];
let w = arr2.reduce((v1, v2) => {
    return v1*v2;
})
console.log("factorial of the given n numbers is : ",w);

//important practice question
//generating a random number
// let rdnum = Math.random()* 100;
// rdnum = Math.floor(rdnum);
// let score = 0;

// //taking a number from user

// for (let i = 0; i<100 ; i++){
//     let usenum = prompt("take a number between 1 to 100 :");
//     let c = Number.parseInt(usenum);

//     if( c == rdnum){
//         console.log("you guessed the number correct :", rdnum);
//         score++;
//     }

//     else if (c > rdnum){
//         console.log("your number is greater than the random number :", c);
//         score++;
//     }

//     else if (c < rdnum){
//         console.log("Your number is less than random number :", c);
//         score++;
//     }

//     else{
//         console.log("enter a valid nnumber")

//     }  
// }
//  let res = (100-score);
//  console.log("your score is :", res);
