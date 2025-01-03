// Helper function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Helper function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === name) return value;
  }
  return null;
}

// Apply preferences stored in cookies
document.addEventListener('DOMContentLoaded', () => {
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');
  
  // Load saved preferences from cookies
  const savedFontSize = getCookie('fontSize');
  const savedFontColor = getCookie('fontColor');

  if (savedFontSize) {
    fontSizeInput.value = savedFontSize;
    document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
  }

  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  }

  // Save preferences on form submission
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save preferences as cookies
    setCookie('fontSize', fontSize, 365); // 1 year expiration
    setCookie('fontColor', fontColor, 365);

    // Apply preferences
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);

    alert('Preferences saved!');
  });
});
