// ======================
// 🗂 タブ切替機能（カレッジごとに独立）
// ======================

document.addEventListener("DOMContentLoaded", () => {

const tabGroups = document.querySelectorAll(".pa-tabs");

tabGroups.forEach((group) => {
    const tabButtons = group.querySelectorAll(".tab-buttons button");
    const tabContents = group.querySelectorAll(".tab-content");

    if (tabButtons.length === 0 || tabContents.length === 0) return;

    // 初期表示（1番目だけ表示）
    tabContents.forEach((c, i) => {
        c.style.display = i === 0 ? "block" : "none";
    });

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];
            if (!target) return;

            tabContents.forEach((content) => {
                content.style.display = content.id === target ? "block" : "none";
            });
        });
    });
});
});

// ===============================
// ▼ トップへ戻るボタン（フェードイン表示）
// ===============================

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
