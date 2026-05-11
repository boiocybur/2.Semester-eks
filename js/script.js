// =============================================
//  BURGER MENU - JavaScript
//  Håndterer åbning/lukning af mobilmenuen
// =============================================

// Henter elementerne fra HTML'en via deres ID
var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");

// Funktion der toggler (slår til/fra) menuen
function toggleMenu() {
  // Tilføjer/fjerner klassen "close" på burger-ikonet (så det bliver til et kryds)
  burgerMenu.classList.toggle("close");

  // Tilføjer/fjerner klassen "overlay" på menuen (åbner/lukker menuen)
  overlay.classList.toggle("overlay");
}

// =============================================
//  Event Listeners
// =============================================

// Når brugeren klikker på burger-menuen
burgerMenu.addEventListener("click", function (event) {
  // stopPropagation forhindrer, at klikket også rammer menuen nedenunder
  event.stopPropagation();

  // Kalder funktionen der åbner/lukker menuen
  toggleMenu();
});

// Når brugeren klikker et sted på siden (på overlay/menuen)
overlay.addEventListener("click", function (event) {
  // Tjekker om brugeren klikkede direkte på selve overlayet (ikke på et link inde i menuen)
  // Dette gør, at menuen lukker når man klikker udenfor indholdet
  if (event.target === overlay) {
    toggleMenu();
  }
});

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
