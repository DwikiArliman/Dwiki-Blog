const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");
const body = document.querySelector("body");
const toggle = document.getElementById("toggledark");
const button = document.querySelector("button")

function toggleDarkMode() {
toggle.classList.toggle("bi-brightness-high-fill");
toggle.classList.toggle("bi-moon");

if (toggle.classList.contains("bi-brightness-high-fill")) {
    body.style.background = "#FAEBD7";
    body.style.color = "#663300";
    body.style.transition = "1s";
    button.style.backgroundColor = "#663300"
    button.style.color = "orange"
} else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
    button.style.backgroundColor ="white"
    button.style.color = "black"
}


const isDarkModeEnabled = toggle.classList.contains("bi-moon");
localStorage.setItem("darkModeEnabled", isDarkModeEnabled.toString());
}

if (isDarkModeEnabled === "false") {
    toggle.classList.toggle("bi-brightness-high-fill");
    body.style.background = "#FAEBD7";
    body.style.color = "#663300";
    button.style.backgroundColor = "#663300"
    button.style.color = "orange"
}else {
    toggle.classList.toggle("bi-moon");
    body.style.background = "black";
    body.style.color = "white";
    button.style.backgroundColor ="white"
    button.style.color = "black"
}


toggle.addEventListener("click", toggleDarkMode);
