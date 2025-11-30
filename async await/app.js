// normal fucntion using promises

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function fetchData(){
    console.log("Fetching .....");

    let result = await getData(); // this will execute after 2 secs
    console.log(result); // this will only execute once the await has been completed

    console.log("Done");// and this too
};

fetchData();