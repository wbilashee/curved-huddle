// Links
const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

// Form Validation
const form = document.querySelector(".footer__form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = email.value;
    error.style.visibility = "hidden";
    email.classList.remove("invalid");

    if (value === "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
        error.style.visibility = "visible";
        email.classList.add("invalid");
    } else {
        email.value = "";
    }
});