// =============================================
//  HEADER LOADER
//  Venter på siden er klar, henter header.html
// =============================================

window.addEventListener("load", function () {
  fetch("../html/header.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.body.insertAdjacentHTML("afterbegin", html);

      // Tjekker om vi er på forsiden (index.html)
      if (
        window.location.href.includes("index.html") ||
        window.location.pathname.endsWith("/")
      ) {
        document.querySelector("#logo img").src = "../image/HRvideologo.svg";
      }

      // Starter burger-menuen EFTER headeren er sat ind i siden
      initBurgerMenu();
    });
});

// =============================================
//  BURGER MENU
//  Ligger i en funktion så den først køres
//  når headeren er hentet og sat ind i siden
// =============================================

function initBurgerMenu() {
  // Henter elementerne — de findes nu fordi headeren er indsat
  var burgerMenu = document.getElementById("burger-menu");
  var overlay = document.getElementById("menu");

  function toggleMenu() {
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
  }

  burgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      toggleMenu();
    }
  });
}

// =============================================
//  VIDEO PLAY BUTTON - how-work.html
// =============================================

var playBtn = document.querySelector(".play-btn");
var processVideo = document.querySelector(".process-video");

if (playBtn && processVideo) {
  playBtn.addEventListener("click", function () {
    if (processVideo.paused) {
      processVideo.play();
      this.setAttribute("aria-label", "Pause video");
      this.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      processVideo.pause();
      this.setAttribute("aria-label", "Afspil video");
      this.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });

  processVideo.addEventListener("ended", function () {
    playBtn.setAttribute("aria-label", "Afspil video");
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  });
}
