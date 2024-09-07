export const getDiv = (): Div => {
  const div: Div = document.createElement("div");
  return div;
};

export const getParagraph = (): Paragraph => {
  const paragraph: Paragraph = document.createElement("p");
  return paragraph;
};

export const getHeading = (): Heading => {
  const heading: Heading = document.createElement("h1");
  return heading;
};
