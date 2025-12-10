    document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("videoPopup");
    const popupImg = document.getElementById("videoPopupImg");
    const popupClose = document.getElementById("videoPopupClose");

    const thumbs = document.querySelectorAll(".video-popup-target");

    thumbs.forEach(img => {
        img.addEventListener("click", () => {
        popupImg.src = img.src;
        popup.style.display = "flex";
        });
    });

    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });

    });
