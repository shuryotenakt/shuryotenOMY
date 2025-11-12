    // move.js

    (function() {
    const track = document.querySelector('.manga-slider-track');
    const slides = document.querySelectorAll('.manga-slide');
    const prevBtn = document.querySelector('.manga-prev');
    const nextBtn = document.querySelector('.manga-next');
    const dots = document.querySelectorAll('.manga-dot');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // スライダー幅を調整（親に対してスライドを100%×枚数分確保）
    track.style.width = `${100 * totalSlides}%`;
    slides.forEach(slide => (slide.style.width = `${100 / totalSlides}%`));

    function updateSlider() {
        // CSSのwidthに合わせて正確に移動
        track.style.transform = `translateX(-${(100 / totalSlides) * currentIndex}%)`;
        dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    nextBtn?.addEventListener('click', goToNext);
    prevBtn?.addEventListener('click', goToPrev);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
        currentIndex = idx;
        updateSlider();
        });
    });

    // 初期表示を同期
    updateSlider();
    })();
