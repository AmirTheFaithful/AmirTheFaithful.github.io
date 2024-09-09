declare module "*.css";

type Div = HTMLDivElement;
type Heading = HTMLHeadingElement;
type Paragraph = HTMLParagraphElement;

type Builder = (parent: HTMLElement, props: any) => void;
