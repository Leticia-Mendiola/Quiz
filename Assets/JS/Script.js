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
    timeEL.textContent="TIME UP!";
}

setTime();

var question1 = document.querySelector(".question1");
var yes = document.querySelector(".yes");
var no = document.querySelector(".no");

yes.addEventListener("click", function() {
    sendMessage();
    function sendMessage() {
    question1.textContent = "Correct!";
    };
})

no.addEventListener("click", function() {
    sendMessage();
    function sendMessage() {
    question1.textContent = "Incorrect";
    };
})