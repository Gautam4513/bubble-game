var timer=60;
var hit=0;
var score=0;
var startTime=3;
var bottom = document.querySelector(".bottom");
var highScore=0;
function generateBubble(){
    var bubbles="";
    for(i=1;i<=180;i++){
        var rn=Math.floor(Math.random()*10)+1
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bottom").innerHTML=bubbles;
}
function runtimer(){
    var timeint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timeint);
            reset();
        }
    },1000)
}
function newHit(){
    hit=Math.floor(Math.random()*10)+1;
    document.querySelector("#hit").textContent=hit;
}
function scoreUp(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
function playGame(){
    generateBubble();
    runtimer();
    newHit();
    bottom.addEventListener("click",function(event){
        var bub=Number(event.target.textContent);
        if(bub === hit){
            scoreUp();
            newHit();
            generateBubble();
        }
    })
}
function reset(){
    if(score>highScore){
        highScore=score;
    }
    document.querySelector(".bottom").innerHTML=` <div class="reset">
    <h2>Game over</h2>
    <h2>Yore Score is ${score} </h2>
    <h2>High Score is ${highScore}</h2>
    <button id="start">start the game</button>
    <button id="tutorial">tutorial</button>
</div>`
    timer=60;
    score=0;
    startTime=3;
    document.querySelector("#score").textContent=score;
}
function startingGame(){
    let i = setInterval(function(){
        if(startTime>0){
            document.querySelector(".bottom").innerHTML=` <div class="reset">
            <h1>${startTime}</h1>
            </div>`
            startTime--;
        }
        else{
            clearInterval(i);
            playGame();
        }
    },1000);
}
function tutorialView(){
    document.querySelector(".tutorialView").classList.toggle("zIndex0");
}
bottom.addEventListener("click",function(event){
    if(event.target.id === "start"){
        startingGame();
    }
    if(event.target.id === "tutorial"){
        tutorialView();
    }
})
document.querySelector("svg").addEventListener("click",function(){
    tutorialView();
})
