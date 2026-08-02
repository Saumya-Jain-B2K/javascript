class Human {
    //properties
    age = 10; //public
    #weight = 20; //to mark any property in class as private we use "#"
    height = 165;

    //behaviour and functions
    running() {
        console.log("I am running", this.#weight); //here this refers to current object value weight that is priate but still can be accessed
    }

    walking() {
        console.log("I am walking");
    }

    //to use private properties ouside the class eaisly we use getter and setter functions
    get getWeight() {
        return this.#weight;
    }

    set setWeight(wt) {
        this.#weight = wt;
    }
}

//creating an object
let obj = new Human();
console.log(obj.age);
//console.log(obj.#weight);  //private
console.log(obj.height);
console.log(obj.walking());
console.log(obj.running());
console.log(obj.getWeight);
obj.setWeight = 45;
console.log(obj.getWeight);