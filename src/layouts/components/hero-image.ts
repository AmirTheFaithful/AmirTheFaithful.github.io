import { getDiv, getHeading } from "../utils/elements.js";

/* Main builder function */
const buildHeroImage: Builder = (parent) => {
  const container: Div = getDiv();
  container.className = "hero-image";

  // Attach hero text to the bottom
  // of the following container
  buildHeroText(container);

  parent.append(container);
};

/* Builds and applies hero text component to the hero image */
const buildHeroText: Builder = (parent) => {
  // As h1, h2, h3.. tags
  interface Caption {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  }

  // Just a set of the headings
  const captions: Caption[] = [
    { level: 3, text: "вас" },
    { level: 2, text: "вітає" },
    { level: 1, text: "Карамеїв" },
  ] as const;

  // Start building process
  const heroText: Div = getDiv();
  heroText.className = "hero-text";
  heroText.classList.add("swing"); // Enables up and down moving animation

  // Process each of headings text
  captions.forEach((caption: Caption): void => {
    const heading: Heading = getHeading(caption.level);
    heading.innerHTML = caption.text;
    heroText.append(heading);
  });

  parent.append(heroText);
};

/* Starter function for external use */
export default function applyHeroImage(parent: HTMLElement): void {
  buildHeroImage(parent);
}
