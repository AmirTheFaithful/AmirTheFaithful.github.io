import { getDiv } from "./utils/elements.js";
const buildNavbar = (parent) => {
    let navbar = document.createElement("nav");
    navbar.id = "navbar";
    navbar.className = "nav-non-colored";
    buildLogo(navbar);
    buildLinksContainer(navbar);
    parent.append(navbar);
};
const buildLogo = (parent) => {
    let logo = getDiv();
    let img = document.createElement("img");
    logo.id = "#logo";
    img.src = "../logo.png";
    logo.append(img);
    parent.append(logo);
};
const buildLinksContainer = (parent) => {
    let container = getDiv();
    let links = [
        { title: "додму", url: "index.html" },
        { title: "про сайт", url: "about.html" },
    ];
    links.map((link) => {
        const anchor = document.createElement("a");
        anchor.className = "nav-link";
        anchor.href = link.url;
        anchor.innerHTML = link.title;
        container.append(anchor);
    });
    container.id = "nav-links";
    parent.append(container);
};
function applyNav() {
    buildNavbar(document.body);
    window.addEventListener("scroll", colorizeNav);
}
// Additional functionality
function colorizeNav() {
    let nav = document.getElementById("navbar");
    if (!nav) {
        return;
    }
    if (window.scrollY === 0) {
        nav.classList.remove("nav-colored");
        nav.classList.add("nav-non-colored");
    }
    else {
        nav.classList.remove("nav-non-colored");
        nav.classList.add("nav-colored");
    }
}
applyNav();
