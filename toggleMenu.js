const openBtn = document.querySelector(".nav-btn-open");
const navMobileContainer = document.querySelector(".nav-mobile-container");
const closeBtn = document.querySelector((".nav-btn-close"));
const navLink = document.querySelectorAll("nav ul a");

openBtn.addEventListener("click", () => {
    navMobileContainer.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
    navMobileContainer.classList.toggle("active");
})

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navMobileContainer.classList.toggle("active");
    })
})

