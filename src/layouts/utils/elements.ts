export const getDiv = (): Div => {
  const div: Div = document.createElement("div");
  return div;
};

export const getParagraph = (): Paragraph => {
  const paragraph: Paragraph = document.createElement("p");
  return paragraph;
};

export const getHeading = (level: 1 | 2 | 3 | 4 | 5 | 6): Heading => {
  const heading: Heading = document.createElement(`h${level}`);
  return heading;
};
