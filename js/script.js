const toggleButton = document.getElementById("toggle-mode");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
