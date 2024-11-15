const apikey = 'f22a10ed8a5a41c1b168829fa6954a65'

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return []
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = ""
    articles.forEach((articles) => {
        const blogcard = document.createElement
            ("div")
        blogcard.classList.add("blog-card")
        const img = documents.createElement("img")
        img.src = article.urlToImage
        img.alt = article.title
        const title = document.createElement("h2")
        title.textContent = article.title
        const description = document.createElement("p")
        description.textContent = article.description
    })
}

async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
};