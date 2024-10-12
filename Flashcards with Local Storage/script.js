const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('item') ?
    JSON.prase(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text) {
    var div = document.createElement("div");
    var h2_question = document.createElement()
};

function addFlashcard() {
    var flashcard_info = {
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
    createBox.computedStyleMap.display = "block";
}

function hideCreateBox() {
    createBox.computedStyleMap.display = "none";
}