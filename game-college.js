document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".sample-slide-track");
  // querySelectorAllの結果はNodeListなので、操作しやすい配列(Array)に変換
  let slides = Array.from(document.querySelectorAll(".sample-slide"));
  const prevBtn = document.querySelector(".sample-prev");
  const nextBtn = document.querySelector(".sample-next");

  const frontSection = document.getElementById("game-college-front");
  const backSection = document.getElementById("game-college-back");
  const openBtn = document.getElementById("open-game-college-btn");

  const closeBtn = document.getElementById("close-game-college-btn");

  if (!track || slides.length === 0) return;

  // 自動再生のタイマーID
  let autoPlayInterval;

  // ==========================================
  //  ★ Front / Back 切り替えアニメーション
  // ==========================================

  // 「開く」ボタン（白い丸ボタン）
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // 1. Frontにフェードアウトクラスを付与（拡大して消える）
      frontSection.classList.add("fade-out");

      // 2. アニメーション時間(0.5s)待ってから表示切り替え
      setTimeout(() => {
        frontSection.style.display = "none";

        // Backを表示（まだ透明）
        backSection.style.display = "block";

        // 少しだけ待ってからフェードインクラス付与（transitionを効かせるため）
        requestAnimationFrame(() => {
          backSection.classList.add("fade-in");

          // スライダー位置計算＆再生開始
          updateClasses();
          startAutoPlay();
        });
      }, 500); // CSSのtransition時間と合わせる
    });
  }

  // --- 初期表示のセットアップ ---
  // 左(0)・中央(1)・右(2) という並びを想定し、
  // 配列の[1]番目（2枚目）を常に「中央（active）」として扱います。
  function updateClasses() {
    // 全てのスライドからactiveクラスを外す
    slides.forEach((s) => s.classList.remove("active"));

    // 配列の2番目（インデックス1）を中央とする
    // ※DOMの順番が変わるので、常に[1]が画面中央に来るようにCSS(flex)で制御されます
    if (slides[1]) {
      slides[1].classList.add("active");
    }
  }

  // --- 次へ進む（左へ流れる） ---
  function moveNext() {
    // 先頭の要素を最後尾に移動（DOM操作）
    // これにより、[0, 1, 2, 3, 4] が [1, 2, 3, 4, 0] になる
    // CSSのFlexbox配置により、自動的に左に詰まって表示が変わる
    const firstSlide = slides.shift(); // 配列の先頭を取り出す
    slides.push(firstSlide); // 配列の最後に追加
    track.appendChild(firstSlide); // DOM上でも最後に移動

    updateClasses(); // 中央（active）の更新
  }

  // --- 前へ戻る（右へ流れる） ---
  function movePrev() {
    // 末尾の要素を先頭に移動
    const lastSlide = slides.pop(); // 配列の末尾を取り出す
    slides.unshift(lastSlide); // 配列の先頭に追加
    track.prepend(lastSlide); // DOM上でも先頭に移動

    updateClasses(); // 中央（active）の更新
  }

  // --- 自動再生 ---
  function startAutoPlay() {
    stopAutoPlay(); // 多重起動防止
    autoPlayInterval = setInterval(moveNext, 3000); // 3秒ごとに次へ
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // --- イベントリスナー ---
  nextBtn.addEventListener("click", () => {
    moveNext();
    stopAutoPlay();
    startAutoPlay(); // クリックしたらタイマーリセット
  });

  prevBtn.addEventListener("click", () => {
    movePrev();
    stopAutoPlay();
    startAutoPlay();
  });

  // 「閉じる」ボタン
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      // 1. Backのフェードインクラスを外す（縮小して消える）
      backSection.classList.remove("fade-in");

      // 2. アニメーション時間(0.6s)待ってから表示切り替え
      setTimeout(() => {
        stopAutoPlay();
        backSection.style.display = "none";

        // Frontを再表示
        frontSection.style.display = "flex"; // CSSでflexレイアウトにしているため

        // Frontのフェードアウトクラスを外して元に戻す
        // transitionが効くように少し遅らせる（即時だとパッと出る）
        requestAnimationFrame(() => {
          frontSection.classList.remove("fade-out");
        });
      }, 600);
    });
  }

  // マウスが乗ったら止めるなどの処理はお好みで
  /*
    track.addEventListener("mouseenter", stopAutoPlay);
    track.addEventListener("mouseleave", startAutoPlay);
    */

  // 初期実行
  updateClasses();
  startAutoPlay();
});
