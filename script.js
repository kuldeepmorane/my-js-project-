let gameSeq = [];
let userSeq = [];
let highScr = 0;
let btns = ["c1", "c2", "c3", "c4"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if (started == false) {
        // console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout(function() {
        btn.classList.remove("Flash");
    }, 100);

};

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 100);

};
// check vlue 
function checkAns(idx) {
    // console.log("current level : ", level);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 500);
        }

    } else {
        if (level > highScr) {
            highScr = level
            h2.innerText = `highest score is :${highScr}`;
        }
        h3.innerHTML = `Game over!Your score was <b>${level}<b> <br> press any key to start game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "antiquewhite";
        }, 100);
        reset();
    }

}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtns = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq)
    gameFlash(randBtns);
};

function btnPress() {
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    let userCol = btn.getAttribute("id");
    userSeq.push(userCol)
    console.log(userSeq);
    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}