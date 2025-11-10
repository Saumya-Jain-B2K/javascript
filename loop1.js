//mainly for usinf for with array and object

let arr = [1,23,4, 5];
for (let num of arr){
    console.log(num);
}

let oo = {
    "name" : "Saumya",
    "age" : 21,
};
for (let key in oo){
    console.log(key);
    console.log(key, oo[key]);
    
}