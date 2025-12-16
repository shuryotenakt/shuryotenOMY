document.addEventListener("DOMContentLoaded", () => {

  const frontSection = document.getElementById("video-front");
  const backSection = document.getElementById("video-back");
  const openBtn = document.getElementById("open-video-btn");
  const closeBtn = document.getElementById("close-video-btn");

  // ==========================================
  //  ★ Front / Back 切り替えアニメーション
  // ==========================================

  // 「開く」ボタン
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // Front をフェードアウト
      frontSection.classList.add("fade-out");

      // アニメ時間後に Back を見せる
      setTimeout(() => {
        frontSection.style.display = "none";
        backSection.style.display = "block";

        // フェードインを遅延で適用
        requestAnimationFrame(() => {
          backSection.classList.add("fade-in");
        });
      }, 500); // CSSと合わせる
    });
  }

  // 「閉じる」ボタン
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      // Back フェードアウト
      backSection.classList.remove("fade-in");

      setTimeout(() => {
        backSection.style.display = "none";

        // Front を再表示
        frontSection.style.display = "flex";

        requestAnimationFrame(() => {
          frontSection.classList.remove("fade-out");
        });
      }, 600);

      
       document.getElementById("video-college").scrollIntoView({
        behavior: "smooth" 
       }); 
    });
  }

});
