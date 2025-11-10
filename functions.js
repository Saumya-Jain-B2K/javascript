//function to greet a name that user gives
// function greetName(name){
//     console.log(`Hello ${name}`);
// }

// let name = prompt("Enter the name:");
// greetName(name);

//create a functions that prints a poem
function poem(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

poem();

//function tp roll a dice
function rollDice(){
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(`The dice shows number as ${dice}`);
}

rollDice();

//functions that gives average of three numbers
function avg(a,b,c) {
    console.log((a+b+c)/3);
}

avg(2,4,6);

//table of any number
// function table(num){
//     for (let i = 1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }

// let number = prompt("Enter the number:");
// table(number);

//fnctiona that returns sum of numbers from 1 to n
function sum(n){
    let sum = 0;
    for (let i = 1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sum(20));

//function that returns of all strings in it
function str(name){
    let concat = "";
    for (let i = 0; i<name.length; i++){
        concat = concat + " " + name[i];
    }
    return concat;
}

let string = ["Hello", "my", "name", "is", "Saumya"];
console.log(str(string));