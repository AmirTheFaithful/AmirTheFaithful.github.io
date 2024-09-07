import { getDiv, getHeading } from "../utils/elements.js";

const buildHeroImage: Builder = (parent) => {
  const container: Div = getDiv();
  container.className = "hero-image";

  parent.append(container);
};

const buildHeroText: Builder = (parent) => {
  const heading: Heading = getHeading();
  heading.className = "hero-text";

  parent.append(heading);
};

export default function applyHeroImage(parent: HTMLElement): void {
  buildHeroImage(parent);
}
