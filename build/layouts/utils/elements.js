export const getDiv = () => {
    const div = document.createElement("div");
    return div;
};
export const getParagraph = () => {
    const paragraph = document.createElement("p");
    return paragraph;
};
export const getHeading = (level) => {
    const heading = document.createElement(`h${level}`);
    return heading;
};
