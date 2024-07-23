// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const modeToggle = document.querySelector('.mode-toggle');
  const lightModeIcon = document.querySelector('.light-mode-icon');
  const nightModeIcon = document.querySelector('.night-mode-icon');

  // Load saved mode from localStorage
  const currentMode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(currentMode + '-mode');

  // Toggle mode function
  modeToggle.addEventListener('click', () => {
    const isNightMode = document.body.classList.contains('night-mode');
    
    if (isNightMode) {
      document.body.classList.remove('night-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('mode', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('night-mode');
      localStorage.setItem('mode', 'night');
    }
  });
});
