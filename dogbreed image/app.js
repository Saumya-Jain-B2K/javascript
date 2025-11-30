let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let image = await getImages();
    console.log(image);
    let img = document.querySelector("#random");
    img.setAttribute("src", image)
})

let link = 'https://dog.ceo/api/breeds/image/random';

async function getImages(){
    try {
        let res = await axios.get(link);
        return res.data.message;
        
    } catch (error) {
        console.log("Error -", error);
        return "No image found";
    }
}