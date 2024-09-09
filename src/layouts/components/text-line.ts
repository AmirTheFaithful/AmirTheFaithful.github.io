import { getDiv, getParagraph } from "../utils/elements";

interface ContainerProps {
  color?: string;
}

interface TextProps {
  text: string;
}

interface MainProps {
  color?: string;
  text: string;
}

const buildContainer: Builder = (parent, props: ContainerProps) => {
  let container = getDiv();
  container.className = "text-line";
};

const buildText: Builder = (parent, props: TextProps) => {
  let paragraph: Paragraph = getParagraph();
};

export default function applyTextLine(
  parent: Element,
  props: MainProps
): void {}
