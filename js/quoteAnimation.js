const VISIBILITY_HIDDEN = "visibility-hidden";
function handleMouseOver() {
    author.classList.remove(VISIBILITY_HIDDEN);
}
function handleMouseLeave() {
    author.classList.add(VISIBILITY_HIDDEN);
}
quote.addEventListener("mouseenter", handleMouseOver);
quote.addEventListener("mouseout", handleMouseLeave);
author.addEventListener("mouseout", handleMouseLeave);
author.addEventListener("mouseenter", handleMouseOver);
