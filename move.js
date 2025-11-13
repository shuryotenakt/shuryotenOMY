    // move.js（ドット自動生成版）

    document.addEventListener("DOMContentLoaded", () => {
    
    const sliderWrappers = document.querySelectorAll(".img-slider-main");

    sliderWrappers.forEach((wrapper) => {
        const track = wrapper.querySelector(".manga-slider-track");
        const slides = wrapper.querySelectorAll(".manga-slide");
        const prevBtn = wrapper.querySelector(".manga-prev");
        const nextBtn = wrapper.querySelector(".manga-next");
        const dotsContainer = wrapper.querySelector(".manga-dots");

        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        /* 🔥 ドット自動生成（ここが追加） */
        dotsContainer.innerHTML = ""; // いったん空にする
        slides.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.classList.add("manga-dot");
            if (i === 0) dot.classList.add("active");
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll(".manga-dot");

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

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                currentIndex = Number(dot.dataset.index);
                updateSlider();
            });
        });

        // 初期表示
        updateSlider();
    });


    // ======================
    // 🗂 タブ切替（現状のまま）
    // ======================
    const tabButtons = document.querySelectorAll(".tab-buttons button");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {
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
