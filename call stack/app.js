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