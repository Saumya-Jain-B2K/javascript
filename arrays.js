//arrays and objects in javascript
let num = [45, 67, 90, 54, 98];
const fruit = ['apple', 'mango', 'banana', 'orange'];
const mixed = ['apple', 67, 'papaya', 78];
let arr = new Array(34, 67, 89, 234);

//printed all the arrays
console.log(num);
console.log(typeof num);
console.log(fruit);
console.log(mixed);
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

//used a method to chech if the array is true or not
console.log(Array.isArray(arr));

//changing the element in the array
arr[1] = 'Saumya';
console.log(arr);

//using indexOf method to find the index of the array
console.log(num.indexOf(54));

//mutating or modifying array
num.push(77);
console.log(num);

//if adding an element in the front of an array
num.unshift(100);
console.log(num);

//removing the element from the last of an array
num.pop();
console.log(num);

//removing an element from the starting from the array
num.shift();
console.log(num);

//using splice
num.splice(1,2);
console.log(num);

//using reverse
num.reverse();
console.log(num);

//using concat
num = num.concat(arr);
console.log(num); 

//creating of object
let obj = {
    name: 'Saumya',
    gender: 'Female',
    age: '20',
    isStudent: true,
    number: 9876543234,
    hobbies: ['reading', 'writing']
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
console.log(obj.isStudent);
console.log(obj.number);
console.log(obj.hobbies[1]);

//using for loop in array
let a = [1,2,3,4,5,6,7,8];
for (let i = 0; i<a.length; i++){
    console.log(a[i]);
}

//printing square of the number in array using forEach loop
a.forEach((element) => {
    console.log(element*element);
});

//using array.from function
let b = "Saumya";
console.log(Array.from(b));

//using for....of loop
for( let i of a ){
    console.log(i);
}

//using for...in loop
for( let i in num){
    console.log(i);
}