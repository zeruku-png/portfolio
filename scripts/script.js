document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".sep-img");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "filter 1s ease";
                entry.target.style.filter = "blur(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(img);
});
