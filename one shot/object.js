let obj = {
    age: 10,
    wt: 34,
    ht: 152
}

console.log(obj);
obj.color = "Yellow";
console.log(obj);

let clone = {...obj};
console.log("New cloned Object is: ", clone);

//cloning using assign operator
let obj2 = Object.assign({}, obj);
console.log(obj2);
