function generate() {
    var quotes = {
        "- Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "- C.S Lewis": '"I was not born to be free—I was born to adore and obey."',
        "- Jenny Valentine": '"Even when you\'d lost everything you thought there was to lose, somebody came along and gave you something for free."'
    };

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}