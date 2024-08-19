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

document.addEventListener('DOMContentLoaded', () => {
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});
});

document.querySelector('.mode-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
