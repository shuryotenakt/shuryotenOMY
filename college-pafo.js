pafo.js;

document.addEventListener("DOMContentLoaded", () => {
  // pafo- に変更して取得
  const track = document.querySelector(".pafo-slide-track");
  let slides = Array.from(document.querySelectorAll(".pafo-slide"));
  const prevBtn = document.querySelector(".pafo-prev");
  const nextBtn = document.querySelector(".pafo-next");

  // pafo用の取得
  const frontSection = document.getElementById("pafo-front");
  const backSection = document.getElementById("pafo-back");
  const openBtn = document.getElementById("open-pafo-btn");
  const closeBtn = document.getElementById("close-pafo-btn");

  if (!track || slides.length === 0) return;

  let autoPlayInterval;

  // --- Front / Back 切り替え ---
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      frontSection.classList.add("fade-out");
      setTimeout(() => {
        frontSection.style.display = "none";
        backSection.style.display = "block";
        requestAnimationFrame(() => {
          backSection.classList.add("fade-in");
          updateClasses();
          startAutoPlay();
        });
      }, 500);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      backSection.classList.remove("fade-in");
      setTimeout(() => {
        stopAutoPlay();
        backSection.style.display = "none";
        frontSection.style.display = "flex"; // CSSに合わせて調整
        requestAnimationFrame(() => {
          frontSection.classList.remove("fade-out");
        });
      }, 600);
    });
  }

  // --- スライダー制御 ---
  function updateClasses() {
    slides.forEach((s) => s.classList.remove("active"));
    // 配列の[1]番目（2枚目）を常に中央（active）とする
    if (slides[1]) {
      slides[1].classList.add("active");
    }
  }

  function moveNext() {
    const firstSlide = slides.shift();
    slides.push(firstSlide);
    track.appendChild(firstSlide);
    updateClasses();
  }

  function movePrev() {
    const lastSlide = slides.pop();
    slides.unshift(lastSlide);
    track.prepend(lastSlide);
    updateClasses();
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(moveNext, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // --- イベント ---
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      moveNext();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      movePrev();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  // 初期実行
  updateClasses();
});
