const nav = document.querySelector("nav");
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
        nav.classList.add("scrolled");
        topbar.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        topbar.classList.remove("scrolled");
    }
});