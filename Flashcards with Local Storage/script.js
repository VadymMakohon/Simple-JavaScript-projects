const flashcards = document.getElementsByClassName("flashcards-container")[0]; // Updated selector to match HTML
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('item') ?
    JSON.parse(localStorage.getItem('item')) : []; // Fixed typo

contentArray.forEach(divMaker);
function divMaker(text) {
    const div = document.createElement("div");
    const h2_question = document.createElement("h2");
    const h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top:1px solid red; padding: 15px; margin-top:30px");

    h2_question.textContent = text.my_question; // Changed to textContent

    h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2_answer.textContent = text.my_answer; // Changed to textContent

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function () {
        if (h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    });

    flashcards.appendChild(div);
}

function addFlashcard() {
    const flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('item', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox() {
    createBox.style.display = "block"; // Fixed style property
}

function hideCreateBox() {
    createBox.style.display = "none"; // Fixed style property
}
