/* Scroll-Arrow */
document.addEventListener("DOMContentLoaded", () => {
    const scrollArrow = document.querySelector(".scroll-arrow");
    if (!scrollArrow)        return;

    const sections = document.querySelectorAll("section");
    const lastSection = sections[sections.length - 1];
    if (!lastSection)        return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollArrow.classList.add("up");
                } else {
                    scrollArrow.classList.remove("up");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(lastSection);

});