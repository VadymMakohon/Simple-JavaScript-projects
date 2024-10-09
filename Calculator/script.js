const userInput = document.getElementById("userInput");
var expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}

function erace() {
    expression = '';
    userInput.value = expression;
}