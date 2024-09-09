import { getDiv, getParagraph } from "../utils/elements.js";

interface Props {
  color?: string;
  image?: string;
  text: string | string[];
  textColor?: string;
}

const buildLine: Builder = (parent, props: Props) => {
  let line: Div = getDiv();
  line.className = "text-line";

  if (props.color) {
    line.style.backgroundColor = props.color;
  } else if (props.image) {
    line.classList.add("img-bg");
    line.style.backgroundImage = props.image;
  } else {
    line.style.backgroundColor = "#fff";
  }

  if (props.textColor) {
    line.style.color = props.textColor;
  }

  buildText(line, props.text);

  parent.append(line);
};

const buildText: Builder = (parent, props: string | string[]) => {
  let paragraph: Paragraph = getParagraph();
  paragraph.className = "single-text";

  if (typeof props === "object") {
    buildTexts(parent, props);
  } else {
    paragraph.innerHTML = props;
  }

  parent.append(paragraph);
};

const buildTexts: Builder = (parent, props: string[]) => {
  let textContainer: Div = getDiv();
  let texts: string[] = props;

  textContainer.className = "text-group";

  texts.map((text: string): void => {
    const paragraph: Paragraph = getParagraph();
    paragraph.innerHTML = text;
    textContainer.append(paragraph);
  });

  parent.append(textContainer);
};

export default function applyTextLine(parent: HTMLElement, props: Props): void {
  buildLine(parent, props);
}
