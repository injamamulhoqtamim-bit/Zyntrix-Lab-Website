document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("successMsg").classList.remove("hidden");

  this.reset();
});