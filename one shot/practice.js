// function outer(){
//     console.log("outer started");

const { div, p, input } = require("framer-motion/client");
const { useEffect, useState } = require("react");

//     function inner(){
//         console.log("inner started");
//     }

//     inner();
//     console.log("outer finished");
// }

// console.log("Progress started");
// outer();
// console.log("Program finished");

// function test(){
//     test();
// }
// test();

// var x = 10;

// function test() {
//     console.log(x);
//     var x;
//     //console.log(x);
// }

// test();

// console.log(x);

// var x = 10;

// function test() {
//     console.log(x);
// }

// test();

// var x = 10;

// function test() {
//     var x;
//     console.log(x);
// }

// test();

// var x = 10;

// function test() {
//     if (true) {
//         var x = 20;
//     }

//     console.log(x);
// }

// test();
// console.log(x);

// function test() {
//     return;
//     console.log("Hello");
// }

// const num = [1, 2, 3];
// const result = num.map((a) => {
//     return a *2;
// })

// console.log(result);

// const num = [1, 2, 3];
// const result = num.map(function (a) {
//     return a*a
// })

// console.log(result);

// const numbers = [1, 2, 3, 4];

// const result = myMap(numbers, function (num) {
//     return num * 2;
// });

// console.log(result);

// //reducer functiom
// const result = myReduce([1, 2, 3, 4], (acc, curr) => {return acc+curr}, 0)

// const user = {
//     name: "Saumya",

//     greet: function () {

//         function inner() {
//             console.log(this.name);
//         }

//         inner();
//     }
// };

// user.greet();

// const user = {
//     name: "Saumya",

//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// fn();

// const user1 = {
//     name: "Saumya"
// };

// const user2 = {
//     name: "Alex"
// };

// function greet() {
//     console.log(this.name);
// }

// const fn = greet.bind(user1);

// fn.call(user2);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

//console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");

//     setTimeout(() => {
//         console.log("Timeout 2");
//     }, 0);
// });

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");

//creating promise
// const promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise fulfilled");
//     }
//     else{
//         reject("Rejected");
//     }
// })

// promise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// const p1 = new Promise(reject => {
//     setTimeout(() => reject("First"), 1000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Second"), 2000);
// });

// Promise.race([p1, p2])
//     .then(result => console.log(result));

//props that are passsed from parents to child
//parent
// function App() {
//     return (
//         <Welcome name="Saumya" />
//     )
// }

// //child
// function Welcome(props) {
//     return (
//         <h1>Hello! {props.name}</h1>
//     )
// }

//using states - useState
// import {useState} from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//         <button onClick={() => setCount = (prev => prev + 1)}>+</button>
//         <button onClick={() => setCount = (prev => prev - 1)}>+</button>
//         <p>Count: {count}</p>
//         </div>
//     )
// }

// function ProductList () {
//     const products = [
//     { id: 1, name: "Shirt", price: 999 },
//     { id: 2, name: "Shoes", price: 1999 },
//     { id: 3, name: "Watch", price: 1499 }
// ];

// return (
//     <>
//     <ProductCard products />
//     </>
// )
// }

// function ProductCard({id, name, price}) {

//   return (
//     <div>
//         products.map((prd) => (
//             <p>prd.{id}</p>
//             <p>prd.{name}</p>
//             <p>prd.{price}</p>
//         ))
//     </div>
//   )
// }

// function ShowUsers() {
//     const [load, setLoad] = useState(true);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState([]);

//     useEffect(() => {
//         async function fetchUser(){
//             try {
//                 setLoad(true);
//                 setError(null);
//             const response = await fetch("/api/users");
//             if(!response.ok) {
//                 throw new error("The response doe not get catched");
//             }
//             const data = await response.json();
//             setUser(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoad(false);
//             }
//         }
//         fetchUser();
//     }, [])

//     if(load){
//         return <p>Loading....</p>
//     }

//     if(error){
//         return <p>Error : {error}</p>
//     }

//     return (
//         <div>
//             {user.map(users => (
//                 <p key={user.id}>
//                     {user.name}
//                 </p>
//             ))}
//         </div>
//     )
// const authMiddleware(req, res, next)=> {
//     const authHeader = req.headers.authorization;
//     if(!authHeader){
//         return res.status(401).json({
//             message: "Authentication needed"
//         })
//     }

//     const token = authHeader.split(" ").[1];
//     try {
//         const decode = jwt.verify({
//             token,
//             process.env.JWT_TOKEN
//         })
//         req.user = decode;
//         next();
//     } catch (error) {
//         return res.status(401).json({
//             message: "Invalid"
//         })
//     }
// }

//fetch data using async await
// async function getData() {
//     const response = await fetch("/api/users");
//     if(!response.ok){
//         throw new Error(`${response.status}`);
//     }
//     const data = await response.json;
//     return data;
// }

//Call multiple APIs simultaneously
// const [users, listings, bookings] = await Promise.all([
//     fetch("/api/users").then (res => res.json()),
//     fetch("/api/listings").then (res => res.json()),
//     fetch("/api/bookings").then (res => res.json()),
// ])

//debounce
// function debounce(fn, delay){
//     let timer;

//     return(...agrs) => {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     }
// }

//throttle
// function throttle(fn, delay){
//     let waiting = false;

//     return(...args) => {
//         if(waiting) return;

//         fn(...args);
//         waiting = true;

//         setTimeout(() => {
//             waiting = false;
//         }, delay);
//     }
// }

//react counter
// const [count, setCount] = useState(0);

// <button onClick={()=> setCount(c=> c+1)}>+</button>

//controlled input
// const [name, setName] = useState("");
// <input type="name" value={name} onChange={(e)=> setName(e.target.value)}/>

//form submit
// function handleSubmit(e){
//     e.preventDefault();
// }

//fetch api in react
// useEffect(() => {
//     async function fetchData(){
//         try {
//             const response = await fetch("/api/users");
//             if(!response.ok) {
//                 throw new Error(`${response.json}`);
                
//             }
//             const data = await response.json();
//             setUsers(data);
//         } catch (error) {
//             setError(error);
//             console.log(error);
            
//         }finally{
//             setLoading(false);
//         }
//     }
//     fetchData();
// }, []);

// //render list
// {Users.map(user => (
//     <div key={user.id}>
//         {user.name}
//     </div>
// ))}

//http server creating
// const http = require("http");

// const app = http.createServer((req, res) => {
//     res.write("Hello");
//     res.end();
// })

// app.listen(3000);

// //express server
// const express = require("express");

// const app = express();
// app.listen(3000);

// //for json middleware
// app.use(express.json());
// //should be used before routes

// //get api
// app.get("/api/users", async(req, res) => {
//     res.json({
//         users: []
//     });
// });

// //post api
// const userSchema = new mongoose.Schema()
// app.post("/api/users", async (req, res) => {
//     const {name, email} = req.body;

//     if(!name || ! email){
//         res.status(400).json({
//             message: "error"
//         })
//     }

//     res.status(201).json({
//         name,
//         email,
//         message: "Fields entered successfully"
//     })
// })