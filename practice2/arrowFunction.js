// arrow function

const sum = (a, b) => {
    return a+b;
}

const sum1 = (a, b) => a+b;

const sum2 = (a, b) => (
    a+b
);

// print hello world by setInterval function for just 5 times

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Program ended");
}, 10000)