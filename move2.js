document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".sample-slide-track");
    const slides = Array.from(document.querySelectorAll(".sample-slide"));
    const prev = document.querySelector(".sample-prev");
    const next = document.querySelector(".sample-next");

    let index = 0;

    // 中央に合わせる正しい関数
    function updateSlider() {
        const active = slides[index];

        // 中央スライドの中央位置を取得
        const slideCenter =
            active.offsetLeft + active.offsetWidth / 2;

        // 画面中央との差分
        const offset = slideCenter - (window.innerWidth / 2);

        // トラックを逆方向に動かす
        track.style.transform = `translateX(${-offset}px)`;

        slides.forEach((s, i) => {
            s.classList.toggle("active", i === index);
        });
    }

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    // 初期位置合わせ
    updateSlider();
});
