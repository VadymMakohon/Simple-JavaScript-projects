const { createNativeStackNavigator } = require("@react-navigation/native-stack");

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