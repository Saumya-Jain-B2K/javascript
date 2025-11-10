//string concatenation
let me = 'Riddhima';
let greet = 'Good Morning!';
console.log(greet + ' ' + me);
me = me.concat(' ', greet);
console.log(me);

let html;
html = "<h1> This is a headiing</h1>"+
        "<p> This is my paragraph</p>";

html = html.concat('this', 'str2');
console.log(html);        

let html1 = "<h1>hello my name is</h1>";
html1 = html1.concat('Saumya Jain');
console.log(html1);
console.log(html1.length);
console.log(html1.toLowerCase());
console.log(html1.toUpperCase());
console.log(html1[1]);

//using template literals example
let fruit1 = "Orange";
let fruit2 = "mango";
let myHtml = `Hello ${name} 
            <h1> This is heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;

let str1 = 'Saumya';
let str2 = 'Likes Ice Cream';
let str3 = 'and Chocolates';
let myHtml1 = `<h1> Hello readers </h1>
               <p> ${str1} ${str2} ${str3} </p>`;

document.body.innerHTML = myHtml1;

let name1 = "Nikhil";
let name2 = "Pramod";
console.log(name1 + " is a good friend of " + name2);

//tempelate literals using backticks
let name3 = "Nikhil";
let name4 = "Pramod";
let sentence = `${name3} is a good friend of ${name4}`;
console.log(sentence);

//escape sequecnce character
let s = 'It\'s';
console.log(s);

//using trim method
let x = " Saumya ";
// console.log(x.trim());
x = x.trim();
console.log(x);

let a = "Saumya";
for(let i = 0; i<a.length; i++){
        console.log(a[i]);
}