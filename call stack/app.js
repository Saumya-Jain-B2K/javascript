function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

setTimeout(function() {
    console.log("Hello World!");
}, 2000);

setTimeout(function() {
    console.log("Welcome to single threaded feature");
}, 4000);

console.log("Welcome!");

// call back hell
let h1 = document.querySelector('h1');

function changeColor(color, delay){
    setTimeout(() => {
        h1.style.color = color;
    }, delay)
    
};
changeColor("red", 1000);
changeColor("orange", 2000);
changeColor("blue", 3000);