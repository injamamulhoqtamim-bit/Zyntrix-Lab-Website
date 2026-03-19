// ===== CONTACT FORM =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").classList.remove("hidden");
  this.reset();
});

// ===== HERO VIDEO =====
const heroVideo = document.getElementById("heroVideo");

const videoList = [
  "./assets/hero background - Trim.mp4",
  "./assets/hero3 - Trim.mp4",
  "./assets/hero4 - Trim.mp4"
];

let currentVideo = 0;

heroVideo.src = videoList[currentVideo];

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
revealOnScroll();

// ===== PROJECT SLIDER =====
const slider = document.getElementById("projectSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let slideIndex = 0;

nextBtn.addEventListener("click", () => {
  if (slideIndex < slider.children.length - 1) {
    slideIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const width = slider.children[0].offsetWidth + 32;
  slider.style.transform = `translateX(-${slideIndex * width}px)`;
}

// ===== TYPING EFFECT =====
const text = "Zyntrix Lab";
const typingElement = document.getElementById("typing-text");

let typingIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return; // safety

  if (!isDeleting) {
    typingElement.textContent = text.substring(0, typingIndex++);
  } else {
    typingElement.textContent = text.substring(0, typingIndex--);
  }

  if (typingIndex === text.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (typingIndex === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ===== LIVE CHAT BUTTON =====
const liveChatBtn = document.getElementById("liveChatBtn");

liveChatBtn.addEventListener("click", () => {
  if (typeof Tawk_API !== "undefined") {
    Tawk_API.maximize(); // open chat widget
  }
});