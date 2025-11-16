// ques 1

// let inp = document.querySelector("input");

// inp.addEventListener("load", function(e) {
//     console.log("the page is loaded");
//     console.log(e);
// })

// ques 2

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";
// })

// ques 3
let h2 = document.querySelector("h2");

let inp = document.querySelector("input");
inp.addEventListener("input", function() {
    h2.innerText = inp.value;
})
