import { getDiv } from "./utils/elements.js";

const buildNavbar: Builder = (parent) => {
  let navbar: HTMLElement = document.createElement("nav");
  navbar.id = "navbar";
  navbar.className = "nav-non-colored";

  buildLogo(navbar);
  buildLinksContainer(navbar);

  parent.append(navbar);
};

const buildLogo: Builder = (parent) => {
  let logo: Div = getDiv();
  let img: HTMLImageElement = document.createElement("img");

  logo.id = "#logo";
  img.src = "../logo.png";

  logo.append(img);
  parent.append(logo);
};

const buildLinksContainer: Builder = (parent) => {
  interface NavLink {
    title: string;
    url: string;
  }

  let container: Div = getDiv();
  let links: NavLink[] = [
    { title: "додму", url: "index.html" },
    { title: "про сайт", url: "about.html" },
  ];

  links.map((link: NavLink): void => {
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.className = "nav-link";
    anchor.href = link.url;
    anchor.innerHTML = link.title;

    container.append(anchor);
  });

  container.id = "nav-links";
  parent.append(container);
};

function applyNav(): void {
  buildNavbar(document.body);
  window.addEventListener("scroll", colorizeNav);
}

// Additional functionality

function colorizeNav(): void {
  let nav: HTMLElement | null = document.getElementById("navbar");

  if (!nav) {
    return;
  }

  if (window.scrollY === 0) {
    nav.classList.remove("nav-colored");
    nav.classList.add("nav-non-colored");
  } else {
    nav.classList.remove("nav-non-colored");
    nav.classList.add("nav-colored");
  }
}

applyNav();
