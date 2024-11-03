window.onload = function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    loopAdditionalSlides: 1,
    autoplay: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 言語切り替えリンク
  const jpLink = document.getElementById("jp-link");
  const enLink = document.getElementById("en-link");
  const languageLinks = document.querySelectorAll(".language-link");

  jpLink.addEventListener("click", function (event) {
    event.preventDefault();
    toggleContent("jp");
    setActiveLink(jpLink);
  });

  enLink.addEventListener("click", function (event) {
    event.preventDefault();
    toggleContent("en");
    setActiveLink(enLink);
  });

  // コンテンツの表示を切り替える関数
  function toggleContent(language) {
    const jpContents = document.querySelectorAll(".jp-content");
    const enContents = document.querySelectorAll(".en-content");

    jpContents.forEach((element) => {
      element.style.display = language === "jp" ? "block" : "none";
    });

    enContents.forEach((element) => {
      element.style.display = language === "en" ? "block" : "none";
    });
  }

  // 選択されたリンクにスタイルを適用する関数
  function setActiveLink(activeLink) {
    languageLinks.forEach((link) => link.classList.remove("active-link"));
    activeLink.classList.add("active-link");
  }

  toggleContent("jp");
};
