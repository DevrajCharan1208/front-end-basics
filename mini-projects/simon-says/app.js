let gameSeq=[];
let userSeq=[];
let highScore = 0;
let btns = ['yellow','red','blue','green'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let highScr = document.querySelector(".highscore");

document.addEventListener("keypress", function(){
    if (started == false){
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userSeq = []
    level++;

    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*4);
    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx){
    if (userSeq[idx]==gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        let score = level*10
        if (score>highScore){
            highScore = score
            highScr.innerHTML = `<u>HighScore - ${score}</u>`
            h2.innerHTML = `Game Over!Your New Highscore is - <b>${score}</b> <br> Press any key to start.`;
        }else{
            h2.innerHTML = `Game Over!Your score was - <b>${score}</b> <br> Press any key to start.`;
        }


        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}