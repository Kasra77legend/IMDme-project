// js/backToTop.js

export function setupBackToTop() {
    const backToTopButton = document.querySelector(".to-the-top");
    const scrollTriggerPosition = 2000;

    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollTriggerPosition) {
            backToTopButton.classList.add("Apear-toTheTop");
        } else {
            backToTopButton.classList.remove("Apear-toTheTop");
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}