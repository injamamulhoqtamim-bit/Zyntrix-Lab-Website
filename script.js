document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("successMsg").classList.remove("hidden");

  this.reset();
});

// ===== HERO VIDEO PLAYLIST =====

const heroVideo = document.getElementById("heroVideo");

// 🔥 Video list (assets folder এ রাখবে)
const videoList = [
  "./assets/hero background - Trim.mp4",
  "./assets/hero3 - Trim.mp4",
  "./assets/hero4 - Trim.mp4"
];

let currentVideo = 0;

// First video load
heroVideo.src = videoList[currentVideo];

// When video ends → play next
heroVideo.addEventListener("ended", () => {
  currentVideo = (currentVideo + 1) % videoList.length;
  heroVideo.src = videoList[currentVideo];
  heroVideo.play();
});