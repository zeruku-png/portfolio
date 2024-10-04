const header = document.querySelector(".header");
let lastScrollY = window.scrollY;
let isVisible = true;
let hideTimeout;

function handleScroll() {
    if (window.scrollY > lastScrollY) {
        // スクロールダウン
        if (isVisible) {
            clearTimeout(hideTimeout);
            header.style.transition =
                "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
            header.style.transform = "translateY(-10px)";
            header.style.opacity = "0";

            hideTimeout = setTimeout(() => {
                header.style.transform = "translateY(-100%)";
            }, 300);

            isVisible = false;
        }
    } else {
        // スクロールアップ
        if (!isVisible) {
            clearTimeout(hideTimeout);
            header.style.transition =
                "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
            header.style.transform = "translateY(0)";
            header.style.opacity = "0.8";
            isVisible = true;
        }
    }
    lastScrollY = window.scrollY;
}

window.addEventListener("scroll", handleScroll);
