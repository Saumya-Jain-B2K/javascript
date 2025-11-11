// ques 1
// Square and sum the array elements using the arrow function and then find the average of the array

let squeareAndSum = (arr) => {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum += arr[i] * arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(squeareAndSum(arr));
let avg = squeareAndSum(arr) / arr.length;
console.log(avg);

// ques 2
// Create a new array using the map function whose each element is equal to the original element plus 5
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1.map((num) => num + 5);
console.log(arr2);

// ques 3
// Create a new array whose elements are in uppercase of words present in the original array
let newArr = ["saumya"];
let newArr1 = newArr.map((word) => word.toUpperCase());
console.log(newArr1);

// ques 4
let doubleAndReturnArgs = (variable, ...args) => {
    let arra = args;
    let var2 = variable * 2;
    return {arra, var2};
}

console.log(doubleAndReturnArgs(3, [1, 2,3 ,4, 5, 5]));

// ques 5
let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));
