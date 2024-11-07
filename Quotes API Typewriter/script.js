var quoteArray = [];
var index = 0;
var textPosition = 0;
var flag = true;
var destination = document.getElementById("typedtext");

function loadQuote() {
    const url = "https://api.quotable.io/random";

    fetch(url)

        .then(response => {
            if (response.ok)
                return response.json();
            else
                console.log(response.status);
        })

        .then(data => {

        })
}