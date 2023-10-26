import data from "./data.js";
const recentPosts = document.querySelector(".recent-posts-container");

const renderRecentPosts = () => {
    //assuming the articles are pushed into the array
    //I figured since it's "recent posts" the most recent should be at the
    // top, so it's rendering from the last index to the third last index
    for (let i = data.length - 1; i >= data.length - 3; i--) {
        recentPosts.innerHTML += `
            <article class="card">
                    <img src="../images/${data[i].image}" alt="${data[i].title}"
                         class="article-image">
                    <p class="card-date uppercase">${data[i].date}</p>
                    <h2 class="card-header">${data[i].title}</h2>
                    <p class="card-text">${data[i].text}</p>
            </article>
        `
    }
}

renderRecentPosts();