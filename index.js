// quering everything we need from the Html

const menuBtn = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelector(".links-container");
const mobileOnly = document.querySelectorAll(".mobile-only");
const languages = document.querySelector(".language-container");

//On smaller screens (Mobiles and Tablets), on press of the menu button, we get the navigation links as a drop down menu
menuBtn.addEventListener("click", ()=> {
    mobileOnly.forEach((link) => {
        link.classList.toggle("displayed");
    });
    mobileLinks.classList.toggle("toggled");
});

//Displaying the options to change language in a pop-up menu
languages.addEventListener("click", () => {
    languagePopUp();
})

//the specific function that does so by toggling the "show" class.
function languagePopUp() {
    let popup = document.querySelector(".popup-container");
    popup.classList.toggle("show");
}