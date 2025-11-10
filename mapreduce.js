//map function
const a = [1,2,3,4,5,6];
a.map ((x) => {
    console.log(x*x);
})

a.map ((value, index, array) => {
    console.log(value, array, index);
});

//filter function
const b = [1,2,3,4,5,6,7];
let z = b.filter((value) => {
    return (value < 4);
})
console.log(z);

//reduce function
let c = [1,2,3,4,5,6];
let d = c.reduce((h1, h2) => {
    return(h1 + h1);
})
console.log(d);