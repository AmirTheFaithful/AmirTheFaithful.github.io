import { getDiv, getParagraph } from "../utils/elements";

interface TextProps {
  text: string | string[];
}

interface MainProps {
  color?: string;
  text: string;
}

const buildLine: Builder = (parent, props: MainProps) => {
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

const buildText: Builder = (parent, props: TextProps) => {
  let paragraph: Paragraph = getParagraph();

  if (typeof props.text === "object") {
    buildTexts(parent, props.text);
  } else {
    paragraph.innerHTML = props.text;
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

export default function applyTextLine(
  parent: Element,
  props: MainProps
): void {}
