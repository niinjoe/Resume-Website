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

// document.addEventListener("DOMContentLoaded", function() {
//   const toggleButton = document.querySelector(".dark-mode-toggle");
//   const body = document.body;

//   // Check for saved dark mode preference
//   const savedDarkMode = localStorage.getItem('darkMode');
  
//   // Apply saved preference on page load
//   if (savedDarkMode === 'enabled') {
//     body.classList.add("dark-mode");
//     updateToggleIcon(true);
//   }

//   toggleButton.addEventListener("click", () => {
//     // Toggle dark mode
//     body.classList.toggle("dark-mode");
    
//     // Check current dark mode state
//     const isDarkMode = body.classList.contains("dark-mode");
    
//     // Update icon and local storage
//     updateToggleIcon(isDarkMode);
    
//     // Save preference
//     if (isDarkMode) {
//       localStorage.setItem('darkMode', 'enabled');
//     } else {
//       localStorage.removeItem('darkMode');
//     }
//   });

//   // Function to update toggle button icon
//   function updateToggleIcon(isDarkMode) {
//     toggleButton.innerHTML = isDarkMode 
//       ? '<i class="fas fa-sun"></i>' 
//       : '<i class="fas fa-moon"></i>';
//   }
// });

// function scrollToCertificates() {
//   document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
// }