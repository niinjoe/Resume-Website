document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector(".dark-mode-toggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleButton.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
});

function scrollToCertificates() {
  document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
}
