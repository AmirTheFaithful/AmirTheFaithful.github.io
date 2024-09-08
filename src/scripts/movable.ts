type Observer = IntersectionObserver;
type Entry = IntersectionObserverEntry;

const observer: Observer = new IntersectionObserver(
  (entries: Entry[]): void => {
    entries.forEach((entry: Entry): void => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");

        return;
      }

      if (entry.target.classList.contains("infinite")) {
        entry.target.classList.remove("animated");
      }
    });
  }
);

const observeElements = (elements: Element[]): void => {
  elements.map((element: Element): void => observer.observe(element));
};

export default function enableMovables(): void {
  let leftMovables: Element[] = Array.from(
    document.getElementsByClassName("movable-left")
  );
  let rightMovables: Element[] = Array.from(
    document.getElementsByClassName("movable-right")
  );

  observeElements(leftMovables);
  observeElements(rightMovables);
}
