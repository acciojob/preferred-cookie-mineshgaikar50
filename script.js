//your JS code here. If required.
// Function to get a cookie by name
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to apply saved preferences
function applyPreferences() {
  const savedFontSize = getCookie("fontSize");
  const savedFontColor = getCookie("fontColor");

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Event listener for the form submit
document.getElementById("customizeForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save preferences in cookies
  setCookie("fontSize", fontSize, 30);  // Save for 30 days
  setCookie("fontColor", fontColor, 30);  // Save for 30 days

  // Apply the new preferences immediately
  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;

  alert("Preferences saved!");
});

// Apply preferences on page load
applyPreferences();
