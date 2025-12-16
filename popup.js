    // ===== 要素取得 =====
    const popupOverlay = document.getElementById("popupOverlay");
    const popupClose = document.getElementById("popupClose");
    const mainImage = document.querySelector(".section2-png img");
    const popupPenName = document.querySelector(".popup-pen-name");

    // ===== メイン画像タップ → ポップアップ表示 =====
    if (mainImage) {
    mainImage.addEventListener("click", () => {
        popupOverlay.style.display = "flex";

        // ▼ ペンネームを少し遅れて表示
        if (popupPenName) {
        popupPenName.classList.remove("show"); // 念のためリセット
        setTimeout(() => {
            popupPenName.classList.add("show");
        }, 300);
        }
    });
    }


    // ===== ×ボタンで閉じる =====
    if (popupClose) {
    popupClose.addEventListener("click", () => {
        popupOverlay.style.display = "none";
        if (popupPenName) popupPenName.classList.remove("show");
    });
    }

    // ===== 背景クリックでも閉じる（安全処理込み） =====
    if (popupOverlay) {
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
        if (popupPenName) popupPenName.classList.remove("show");
        }
    });
    }
