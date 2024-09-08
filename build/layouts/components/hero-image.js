import { getDiv, getHeading } from "../utils/elements.js";
const buildHeroImage = (parent) => {
    const container = getDiv();
    container.className = "hero-image";
    buildHeroText(container);
    parent.append(container);
};
const buildHeroText = (parent) => {
    const captions = [
        { level: 3, text: "вас" },
        { level: 2, text: "вітає" },
        { level: 1, text: "Карамеїв" },
    ];
    const heroText = getDiv();
    heroText.className = "hero-text";
    heroText.classList.add("swing");
    captions.forEach((caption) => {
        const heading = getHeading(caption.level);
        heading.innerHTML = caption.text;
        heroText.append(heading);
    });
    parent.append(heroText);
};
export default function applyHeroImage(parent) {
    buildHeroImage(parent);
}
