// lets starts
function dataSave(data){
    //generating a random number between 1 to 10
    let internetSpeed = Math.floor(Math.random() *10) + 1;
    //declaring a promise and using it
    return new Promise((resolve, reject) => {
        if(internetSpeed > 4){
            //using resolve to get successful run
            resolve(data);
            // console.log("Data saved successfully");
        } else {
            //using reject to get any failure
            //note that using reject without then and catch will shown error on the consol when this part will run
            reject("Weak internet connection!");
        }
    })
};

// dataSave("Hello everyone!");
// now we will use then and catch to store these resolve and reject values
dataSave("Hello there!")
.then(success => {
    console.log("data 1 saved", success);
    // calling another data to be saved inside this then
    return dataSave("This is my second data input");
})
.then(data => {
    console.log("data 2 saved successfully", data);
    // now i will call another function inside this then and hence this is called promise chaining
    return dataSave("This is my third data");
})
.then(data => {
    console.log("data 3 saved successfully", data);
})

.catch(error => {
    console.log(error);
})

//note that if we will use return when calling a function inside then and then using the chainig
//then we dont have to make different chatch for each then we can single handedly in the one catch for all the chained thens



