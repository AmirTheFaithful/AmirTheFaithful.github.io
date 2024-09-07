import { getDiv, getHeading } from "../utils/elements.js";
const buildHeroImage = (parent) => {
    const container = getDiv();
    container.className = "hero-image";
    parent.append(container);
};
const buildHeroText = (parent) => {
    const heading = getHeading();
    heading.className = "hero-text";
    parent.append(heading);
};
function applyHeroImage() {
    buildHeroImage(document.body);
}
