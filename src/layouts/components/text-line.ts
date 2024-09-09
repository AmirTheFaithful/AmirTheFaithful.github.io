import { getDiv, getParagraph } from "../utils/elements.js";

interface Props {
  color?: string;
  text: string | string[];
}

const buildLine: Builder = (parent, props: Props) => {
  let line: Div = getDiv();
  line.className = "text-line";

  if (props.color) {
    line.style.backgroundColor = props.color;
  } else {
    line.style.backgroundColor = "#fff";
  }

  buildText(line, props.text);

  parent.append(line);
};

const buildText: Builder = (parent, props: string | string[]) => {
  let paragraph: Paragraph = getParagraph();

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
