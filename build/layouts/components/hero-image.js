import { getDiv, getHeading } from "../utils/elements.js";
/* Main builder function */
const buildHeroImage = (parent) => {
    const container = getDiv();
    container.className = "hero-image";
    // Attach hero text to the bottom
    // of the following container
    buildHeroText(container);
    parent.append(container);
};
/* Builds and applies hero text component to the hero image */
const buildHeroText = (parent) => {
    // Just a set of the headings
    const captions = [
        { level: 3, text: "вас" },
        { level: 2, text: "вітає" },
        { level: 1, text: "Карамеїв" },
    ];
    // Start building process
    const heroText = getDiv();
    heroText.className = "hero-text";
    heroText.classList.add("swing"); // Enables up and down moving animation
    // Process each of headings text
    captions.forEach((caption) => {
        const heading = getHeading(caption.level);
        heading.innerHTML = caption.text;
        heroText.append(heading);
    });
    parent.append(heroText);
};
/* Starter function for external use */
export default function applyHeroImage(parent) {
    buildHeroImage(parent);
}
