document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-name");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-level");
    const mediumProgressCircle = document.querySelector(".medium-level");
    const hardProgressCircle = document.querySelector(".hard-level");
    const easyLabel = document.getElementById("easy");
    const mediumLabel = document.getElementById("medium");
    const hardLabel = document.getElementById("hard");
    const cardStatsContainer = document.querySelector(".stats-cards")


    //function to validate username based on regex
    function validateUsername(username) {
        if(username.trim() === ""){
            alert("username field should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("invalid username");
        }
        return isMatching;
    }

    async function fetchUsername(username){
        const url = `https://alfa-leetcode-api.onrender.com/:${username}` ;
        try{
            searchBtn.textContent = "Searching data...";
            searchBtn.disabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch user details");
            }
            const data = await response.json();
            console.log("Logging data", data);
        }
        catch(err){}
        finally{}
    }

    searchBtn.addEventListener("click", function () {
        const username = usernameInput.value;
        console.log("loggin user: ", username);
        if(validateUsername(username)){
            fetchUsername(username);
        }
    })
})