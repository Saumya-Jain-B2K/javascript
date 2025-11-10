let max  = prompt("enter the max number:");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("guess the random number:");

while(true){
    if (guess == "quit"){
        console.log("The user quitted the game!");
        break;
    }

    if(guess == random){
        console.log("You guessed the correct random number");
        break;
    } else if(guess < random) {
        guess = prompt("The number is smaller then random number");
    } else{
        guess = prompt("The number is bigger than random number");
    }
}