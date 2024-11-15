const apikey = 'f22a10ed8a5a41c1b168829fa6954a65'

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
        const response = await fetch(apiUrl)

    } catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}