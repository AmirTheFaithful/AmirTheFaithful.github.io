const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            return;
        }
        if (entry.target.classList.contains("infinite")) {
            entry.target.classList.remove("animated");
        }
    });
});
const observeElements = (elements) => {
    elements.map((element) => observer.observe(element));
};
export default function enableMovables() {
    let leftMovables = Array.from(document.getElementsByClassName("movable-left"));
    let rightMovables = Array.from(document.getElementsByClassName("movable-right"));
    observeElements(leftMovables);
    observeElements(rightMovables);
}
