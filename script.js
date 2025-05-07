// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
});

// Toggle dark mode and save preference
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}