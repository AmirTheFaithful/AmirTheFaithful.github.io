import { getDiv, getParagraph } from "../utils/elements.js";
const buildLine = (parent, props) => {
    let line = getDiv();
    line.className = "text-line";
    if (props.color) {
        line.style.backgroundColor = props.color;
    }
    else if (props.image) {
        line.classList.add("img-bg");
        line.style.backgroundImage = props.image;
    }
    else {
        line.style.backgroundColor = "#fff";
    }
    if (props.textColor) {
        line.style.color = props.textColor;
    }
    buildText(line, props.text);
    parent.append(line);
};
const buildText = (parent, props) => {
    let paragraph = getParagraph();
    paragraph.className = "single-text";
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
    textContainer.className = "text-group";
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
