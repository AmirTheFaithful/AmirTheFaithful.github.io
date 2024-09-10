import { getDiv, getParagraph } from "../utils/elements.js";
/* Main builder function */
const buildLine = (parent, props) => {
    let line = getDiv();
    line.className = "text-line";
    // If background color or image is provided - apply them,
    if (props.color) {
        line.style.backgroundColor = props.color;
    }
    else if (props.image) {
        line.classList.add("img-bg");
        line.style.backgroundImage = props.image;
    }
    else {
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
const buildText = (parent, props) => {
    let paragraph = getParagraph();
    // If the source text is presented as array of
    // texts - operate it accordingly to array
    if (typeof props === "object") {
        buildTexts(parent, props);
    }
    else {
        // Otherwise, just apply it and classify it as single text line
        paragraph.innerHTML = props;
        paragraph.className = "single-text";
    }
    parent.append(paragraph);
};
/* Operates on text represented as array of strings */
const buildTexts = (parent, props) => {
    let textContainer = getDiv(); // Main element
    let texts = props; // Strings to be processed
    textContainer.className = "text-group";
    // Process each string and apply to the main element
    texts.map((text) => {
        const paragraph = getParagraph();
        paragraph.innerHTML = text;
        textContainer.append(paragraph);
    });
    parent.append(textContainer);
};
/* Starter function for external use */
export default function applyTextLine(parent, props) {
    buildLine(parent, props);
}
