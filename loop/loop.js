// printing odd numbers between 1 to 15

// for (let i = 1; i<=15; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// even numbers from 2 to 10 
// for (let i = 2; i<=10; i=i+2){
//     console.log(i);
// }

//table of 3 
// for (let i = 1; i<=10; i++){
//     console.log(i*3);
// }

//table of 3
// for (let i =1; i<=10; i++){
//     console.log(i*5);
// }

//asking the user and then printing the table

// let num = prompt("Enter the number:");
// num = parseInt(num);

// console.log(`The table of ${num} is given below:`);
// for (let i = 1; i<=10; i++){
//     console.log(i*num);
// }

//using while loop to print numbers from 0 to 20
// let i = 0;
// while (i<=20) {
//     console.log(i);
//     i++;
// }

//guess the favourite movie

let favourite = "avengers";

let guess = prompt("Guess the favourite movie:");

while ((favourite !== guess) && (guess != "quit")){
    guess = prompt("Wrong guess! you should guess again");
}

if (guess == favourite) {
    console.log("You won! You guessed it right!");
} else {
    console.log("You quit the game!");
}