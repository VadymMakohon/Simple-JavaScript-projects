var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function () {
    typeNote();
})

checkIcon.addEventListener("click", function () {
    createNote();
})

function typeNote() {

}

function createNote() {

}

function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.)]
}

function rotate() {

}

function color() {

}