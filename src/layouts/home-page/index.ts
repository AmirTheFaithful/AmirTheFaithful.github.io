import applyHeroImage from "../components/hero-image.js";
import applyTextLine from "../components/text-line.js";

import { getParagraph } from "../utils/elements.js";

// Fill the home page with the following contents
applyHeroImage(document.body);
applyTextLine(document.body, {
  text: "Місто вічного літа",
});

for (let i: number = 0; i < 101; i++) {
  const paragraph: Paragraph = getParagraph();
  paragraph.innerHTML = "Hello, World!";

  document.body.append(paragraph);
}
