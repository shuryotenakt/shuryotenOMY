    // move.js（安定版：自動スライドなし、ズレ防止、タブ修正）

    document.addEventListener("DOMContentLoaded", () => {
    // ======================
    // 🎞 スライダー機能
    // ======================
    const track = document.querySelector(".manga-slider-track");
    const slides = document.querySelectorAll(".manga-slide");
    const prevBtn = document.querySelector(".manga-prev");
    const nextBtn = document.querySelector(".manga-next");
    const dots = document.querySelectorAll(".manga-dot");

    if (track && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
        // 現在位置を移動
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        // ドット同期
        dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
        }

        function goToNext() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
        }

        function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
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

        // 初期状態を更新
        updateSlider();
    }

    // ======================
    // 🗂 タブ切替（安定動作）
    // ======================
    const tabButtons = document.querySelectorAll(".tab-buttons button");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {
        // 初期表示：最初のタブのみ表示
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
