import data from './data.js';
const articles = document.getElementById("articles");
const articlesBtn = document.getElementById("articles-btn");
const articlesLoadMore = 3;
const articlesFirstRender = 6;
let loadedArticles = 0;

const renderArticles = (numberOfArticles) => {
    for (let i = loadedArticles; i < loadedArticles + numberOfArticles; i++) {
        articles.innerHTML += `
            <article class="card">
                    <img src="./images/${data[i].image}" alt="${data[i].title}"
                         class="article-image">
                    <p class="card-date uppercase">${data[i].date}</p>
                    <h2 class="card-header">${data[i].title}</h2>
                    <p class="card-text">${data[i].text}</p>
            </article>
        `
    }
    loadedArticles += numberOfArticles;
    if (loadedArticles >= data.length) {
        articlesBtn.style.display = "none";
    }
}

renderArticles(articlesFirstRender);

articlesBtn.addEventListener("click", () => {
    renderArticles(articlesLoadMore);
})


