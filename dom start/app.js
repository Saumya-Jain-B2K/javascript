// add a p tag with red color that says hey i am red
let p = document.createElement('p');
p.textContent = 'Hey I am red!';
document.querySelector('body').append(p);
p.classList.add('red');

// adding h3 with text saying something in a blue color
let h = document.createElement('h3');
h.innerText = "I am a blue color h3!";
document.querySelector('body').append(h);
h.classList.add('blue');

// ques 3
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');
document.querySelector('body').append(div);
h1.innerText = "I'm a h1";
para.innerText = "I'm a paragraph";

div.append(h1, para);

div.classList.add('box');
