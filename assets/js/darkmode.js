---
---
// Toggle light and dark mode

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  document.body.classList.remove('lightmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'lightmode');
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
if (darkMode === 'lightmode') {
  disableDarkMode();
}
