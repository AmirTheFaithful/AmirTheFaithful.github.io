import applyHeroImage from "../components/hero-image.js";
import applyTextLine from "../components/text-line.js";
import { getParagraph } from "../utils/elements.js";
// Fill the home page with the following contents
applyHeroImage(document.body);
applyTextLine(document.body, {
    text: "Місто вічного літа",
    image: "linear-gradient(to right, green, blue)",
});
for (let i = 0; i < 101; i++) {
    const paragraph = getParagraph();
    paragraph.innerHTML = "Hello, World!";
    document.body.append(paragraph);
}
