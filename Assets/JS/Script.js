var timeEL = document.querySelector(".time");

var secondsLeft=60

var setTime = function() {
    var timerInterval = setInterval(function(){
        secondsLeft --;
        timeEL.textContent = "time left" + secondsLeft;

        if(secondsLeft===0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage(){
    timeEL.textContent="timeup";
}

setTime();

var question1 = document.querySelector(".question1");
var yes = document.querySelector(".yes");
var no = document.querySelector(".no");

question1.addEventListener("click", function(){
    if(yes.addEventListener("click"))
})