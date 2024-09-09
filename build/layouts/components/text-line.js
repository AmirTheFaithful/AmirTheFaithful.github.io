import { getDiv, getParagraph } from "../utils/elements.js";
const buildLine = (parent, props) => {
    let line = getDiv();
    line.className = "text-line";
    if (props.color) {
        line.style.backgroundColor = props.color;
    }
    else {
        line.style.backgroundColor = "#fff";
    }
    buildText(line, props.text);
    parent.append(line);
};
const buildText = (parent, props) => {
    let paragraph = getParagraph();
    if (typeof props === "object") {
        buildTexts(parent, props);
    }
    else {
        paragraph.innerHTML = props;
    }
    parent.append(paragraph);
};
const buildTexts = (parent, props) => {
    let textContainer = getDiv();
    let texts = props;
    texts.map((text) => {
        const paragraph = getParagraph();
        paragraph.innerHTML = text;
        textContainer.append(paragraph);
    });
    parent.append(textContainer);
};
export default function applyTextLine(parent, props) {
    buildLine(parent, props);
}
