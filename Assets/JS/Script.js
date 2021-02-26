var timeEL = document.querySelector(".time");
var secondsLeft=60
var setTime = function(event) {
        var timerInterval = setInterval(function(){
        secondsLeft --;
        timeEL.textContent = "Time Left:" + secondsLeft;

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
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var question4 = document.querySelector(".question4");
var yes = document.querySelector(".yes");
var no = document.querySelector(".no");

question1.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target
    if (element.dataset.value="yes") {
        sendMessage();
        function sendMessage() {
        question1.textContent = "Correct!";}
    } else { if(element.dataset.value="no") {
        sendMessage();
        function sendMessage() {
        question1.textContent = "Incorrect";}
    }}
})

question2.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.dataset.value="yes") {
        sendMessage();
        function sendMessage() {
        question2.textContent = "Correct!";}
    } else { if(element.dataset.value="no") {
        sendMessage();
        function sendMessage() {
        question2.textContent = "Incorrect";}
    }}
})

question3.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.dataset.value="yes") {
        sendMessage();
        function sendMessage() {
        question3.textContent = "Correct!";}
    } else { if(element.dataset.value="no") {
        sendMessage();
        function sendMessage() {
        question3.textContent = "Incorrect";}
    }}
})

question4.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.dataset.value="yes") {
        sendMessage();
        function sendMessage() {
        question4.textContent = "Correct!";}
    } else { if(element.dataset.value="no") {
        sendMessage();
        function sendMessage() {
        question4.textContent = "Incorrect";}
    }}
})
