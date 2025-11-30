let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colleges){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try {
        let output = await axios.get(url + country);
        return output.data;
    } catch (error) {
        console.log("Error :", error);
        return [];
    }
}