const menuBtn = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelector(".links-container");
const mobileOnly = document.querySelectorAll(".mobile-only");
const languages = document.querySelector(".language-container");

menuBtn.addEventListener("click", ()=> {
    mobileOnly.forEach((link) => {
        link.classList.toggle("displayed");
    });
    mobileLinks.classList.toggle("toggled");
});


languages.addEventListener("click", () => {
    languagePopUp();
})

function languagePopUp() {
    let popup = document.querySelector(".popup-container");
    popup.classList.toggle("show");
}