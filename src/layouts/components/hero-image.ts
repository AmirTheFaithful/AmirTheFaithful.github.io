import { getDiv, getHeading } from "../utils/elements.js";

const buildHeroImage: Builder = (parent) => {
  const container: Div = getDiv();
  container.className = "hero-image";

  buildHeroText(container);

  parent.append(container);
};

const buildHeroText: Builder = (parent) => {
  interface Caption {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  }

  const captions: Caption[] = [
    { level: 3, text: "вас" },
    { level: 2, text: "вітає" },
    { level: 1, text: "Карамеїв" },
  ] as const;

  const heroText: Div = getDiv();
  heroText.className = "hero-text";

  captions.forEach((caption: Caption): void => {
    const heading: Heading = getHeading(caption.level);
    heading.innerHTML = caption.text;
    heroText.append(heading);
  });

  parent.append(heroText);
};

export default function applyHeroImage(parent: HTMLElement): void {
  buildHeroImage(parent);
}
