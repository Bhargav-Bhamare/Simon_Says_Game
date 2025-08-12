let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");

//Starting the Game
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game Started!");
    started = true;

    levelUp();
    }
})

//Game is Flashing some button
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },200);
}

//User clicked and thus button flashed
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randBtn);
}

//Function to check the Answer
function checkAns(idx){

    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp,200);
        }
    }else{
        h2.innerHTML = `Game Over! <b>Your Score:${level}</b> <br> Press any key to restart !!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
  
function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}