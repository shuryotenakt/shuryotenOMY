    // move.js（複数スライダー対応・空白スライド防止・自動なし）

    document.addEventListener("DOMContentLoaded", () => {
    // ======================
    // 🎞 スライダー機能（複数スライダー対応）
    // ======================

    const sliderWrappers = document.querySelectorAll(".img-slider-main");

    sliderWrappers.forEach((wrapper) => {
        const track = wrapper.querySelector(".manga-slider-track");
        const slides = wrapper.querySelectorAll(".manga-slide");
        const prevBtn = wrapper.querySelector(".manga-prev");
        const nextBtn = wrapper.querySelector(".manga-next");
        const dots = wrapper.querySelectorAll(".manga-dot");

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
        }

        function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
        }

        function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
        }

        nextBtn?.addEventListener("click", goToNext);
        prevBtn?.addEventListener("click", goToPrev);

        dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
        });
        });

        // 初期表示
        updateSlider();
    });

    // ======================
    // 🗂 タブ切替機能
    // ======================

    const tabButtons = document.querySelectorAll(".tab-buttons button");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {
        // 初期状態：最初のタブだけ表示
        tabContents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));

        tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];
            if (!target) return;

            tabContents.forEach((content) => {
            content.style.display = content.id === target ? "block" : "none";
            });
        });
        });
    }
    });
