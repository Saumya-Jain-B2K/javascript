// ques 1,2 & 3 combined
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'username');
document.querySelector('body').append(input);

let button = document.createElement('button');
button.innerText = "Click Me";
button.setAttribute('id', 'btn');
// button.classList.add('btn')
document.querySelector('body').append(button);


//ques 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
h1.classList.add('h1');
document.querySelector('body').append(h1);

// ques 5
let para = document.createElement('p');
para.innerHTML = "Apna college <b>delta</b> practice";
document.querySelector('body').append(para);
