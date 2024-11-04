dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour < 19) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

window.addEventListener('load', dayNightTheme);

document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
        apiRequest();
});