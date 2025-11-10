//question1
// let obj = {
//     ravi : 45,
//     sneha : 50,
//     vikas : 23,
//     naman : 16,
//     shivam : 30
// }

// for(let i in obj){
//     console.log("marks of " + i + " are as " + obj[i]);
// }

//question2

// for(let i = 0; i<Object.keys(obj).length; i++){
//     console.log("marks of " + Object.keys(obj)[i] + " are as " + Object.values(obj)[i]);
// }

//question3
let cn = 4;
let i;
while(i != cn ){
    i = prompt("enter the correct number : ");
}

console.log("you have entered the correct number");

//question4
//create a function to calculate the mean of five numbers
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}

console.log(mean(1,2,3,4,5)); // 3