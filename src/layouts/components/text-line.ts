import { getDiv, getParagraph } from "../utils/elements.js";

interface Props {
  color?: string;
  image?: string;
  text: string | string[];
  textColor?: string;
}

/* Main builder function */
const buildLine: Builder = (parent, props: Props) => {
  let line: Div = getDiv();
  line.className = "text-line";

  // If background color or image is provided - apply them,
  if (props.color) {
    line.style.backgroundColor = props.color;
  } else if (props.image) {
    line.classList.add("img-bg");
    line.style.backgroundImage = props.image;
  } else {
    // Otherwise, apply white background as the default
    line.style.backgroundColor = "#fff";
  }

  if (props.textColor) {
    line.style.color = props.textColor;
  }

  // Attach provided text
  buildText(line, props.text);

  parent.append(line);
};

/* Operates on both arrays of text and on the single text lines.    *
 * In the case of arrays, it uses alternative "buildTexts" function */
const buildText: Builder = (parent, props: string | string[]) => {
  let paragraph: Paragraph = getParagraph();

  // If the source text is presented as array of
  // texts - operate it accordingly to array
  if (typeof props === "object") {
    buildTexts(parent, props);
  } else {
    // Otherwise, just apply it and classify it as single text line
    paragraph.innerHTML = props;
    paragraph.className = "single-text";
  }

  parent.append(paragraph);
};

/* Operates on text represented as array of strings */
const buildTexts: Builder = (parent, props: string[]) => {
  let textContainer: Div = getDiv(); // Main element
  let texts: string[] = props; // Strings to be processed

  textContainer.className = "text-group";

  // Process each string and apply to the main element
  texts.map((text: string): void => {
    const paragraph: Paragraph = getParagraph();
    paragraph.innerHTML = text;
    textContainer.append(paragraph);
  });

  parent.append(textContainer);
};

/* Starter function for external use */
export default function applyTextLine(parent: HTMLElement, props: Props): void {
  buildLine(parent, props);
}
