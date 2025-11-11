// ques 1
//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

let arrayAverage = (arr) => {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        //calculate the avg
        avg = sum / arr.length;
    }
    return `The average of the sum of numbers in array is ${avg}`;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayAverage(arr));

// ques2
// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not

let isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(10));

// destructure arrays

let names = ["Saumya", "ashish", "lakhan", "Aman"];
let [winner, runnerup] = names;
console.log(winner, runnerup);

// destructure objects
const student = {
    name: "Kanwar",
    age: 45,
    class: "Hindu",
    marks: [23, 56, 45, 78, 99],
    username: "kanwar@1",
    password: "asckd"
};

let { username: userId, password: secret} = student;