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

// ===== SCROLL ANIMATION =====

const cards = document.querySelectorAll(".service-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Page load এও check করবে
revealOnScroll();

// ===== PROJECT SLIDER =====

const slider = document.getElementById("projectSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < slider.children.length - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

function updateSlider() {
  const width = slider.children[0].offsetWidth + 32; // gap included
  slider.style.transform = `translateX(-${index * width}px)`;
}

