let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];


let start = false;
let level = 0;

let h2 = document.querySelector('h2');

let h3 = document.querySelector('h3');

let highestScore = 0;

// the game only starts when any key is pressed on the whole page
document.addEventListener('keypress', function(){
    if (start == false){
        console.log("game started");
        start = true;

        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add('flash');

    setTimeout(function(){
        btn.classList.remove('flash');
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button flash
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomIndex);
    console.log(randomColor);
    console.log(randomBtn);
    
    // pushing the games value into the array
    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randomBtn);
}

function checkAns(index) {
    console.log("current level: ", level);
    // checking the level with the indices of the user and game sequence

    // let currIndex = level - 1
    if(userseq[index] === gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        const finalScore = level;
        highScore(finalScore);

        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function highScore(score) {
    // let score = 0;
    // let highestScore = level;
    if(score > highestScore) {
        highestScore = score;
        console.log(highestScore);
        h3.innerText = `Your Highest Score is : ${highestScore}`;
    }
}

function btnPress() {
    let btn = this;
    console.log(btn);

    btnFlash(btn);

    userColor = btn.getAttribute('id');
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    start = false;
    // console.log(`Your highest score is: ${highScore}`)
    gameseq = [];
    userseq = [];
    level = 0;
}