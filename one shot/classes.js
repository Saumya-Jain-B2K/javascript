// class Human {
//     //properties
//     age = 10; //public
//     #weight = 20; //to mark any property in class as private we use "#"
//     height = 165;

//     //constructor
//     constructor (newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.height = newHeight;
//         //setting a private field to be edited
//         this.#weight = newWeight;
//     }

//     //behaviour and functions
//     running() {
//         console.log("I am running", this.#weight); //here this refers to current object value weight that is priate but still can be accessed
//     }

//     walking() {
//         console.log("I am walking");
//     }

//     //to use private properties ouside the class eaisly we use getter and setter functions
//     get getWeight() {
//         return this.#weight;
//     }

//     set setWeight(wt) {
//         this.#weight = wt;
//     }
// }

// //creating an object
// //the consgtructor values are passed when the object is defined itself
// let obj = new Human(34, 152, 80);
// console.log(obj.age);
// //console.log(obj.#weight);  //private
// console.log(obj.height);
// console.log(obj.getWeight);
// console.log(obj.walking());
// console.log(obj.running());
// console.log(obj.getWeight);
// obj.setWeight = 45;
// console.log(obj.getWeight);

//default parameters
// function greet(name = "Jhon Doe"){
//     console.log("My name is: ", name);
// }

// greet("Ruchika");

// function greetFull(fName = "Jhon", lName = "Doe"){
//     console.log("The name is: ", fName + " " + lName);
// }
// greetFull("Ruchika", "Rathore");

// //when null and undefined is paddes as the parameter in the function
// function greet(value = 10) {
//     console.log("Hello ->", value);
// }

// // greet(null);
// greet(undefined);

// //function used as default parameter in other function
// function one(){
//     return 200;
// }

// function two(name = "Jhon", age = one(30)){
//     console.log(name, age);
// }

// two();