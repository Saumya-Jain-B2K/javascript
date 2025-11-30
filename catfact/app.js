let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#random");
    p.innerText = fact; 
})

let link = 'https://catfact.ninja/fact';

async function getFacts(){
    try {
        let res = await axios.get(link);
        return res.data.fact;
        
    } catch (error) {
        console.log("Error -", error);
        return "No fact found";
    }
}