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

setTime()