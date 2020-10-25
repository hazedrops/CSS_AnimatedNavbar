// intersection observer

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right top, #f12711, #f5af19)",
  "linear-gradient(to right top, #2193b0, #6dd5ed)",
  "linear-gradient(to right top, #dce35b, #45b649)"
];

const options = {
  threshold: 0.7  // Needed to activate when the page is scrolled down about 70%
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(
      `[data-page=${className}]`
    ); /* Get to know which class is active */
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect(); // Can access to the height, width, etc.
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});
