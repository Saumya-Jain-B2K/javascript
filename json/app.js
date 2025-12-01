let jsonData = '{"name" : "Saumya", "age" : 20}';
//demonstration of using JSON.parse
let obj = JSON.parse(jsonData);
console.log(obj.name);

let obj1 = {
    name: "Saumya",
    age: 20
};
//how to use stringify for json
let json = JSON.stringify(obj1);
console.log(json);