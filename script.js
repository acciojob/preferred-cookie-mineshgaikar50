document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
  
    // Load saved preferences from localStorage
    const savedFontSize = localStorage.getItem("fontSize");
    const savedFontColor = localStorage.getItem("fontColor");
  
    if (savedFontSize) {
      fontSizeInput.value = savedFontSize;
      document.body.style.fontSize = `${savedFontSize}px`;
    }
  
    if (savedFontColor) {
      fontColorInput.value = savedFontColor;
      document.body.style.color = savedFontColor;
    }
  
    // Save preferences on form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const fontSize = fontSizeInput.value;
      const fontColor = fontColorInput.value;
  
      // Save preferences to localStorage
      localStorage.setItem("fontSize", fontSize);
      localStorage.setItem("fontColor", fontColor);
  
      // Apply preferences to the page
      document.body.style.fontSize = `${fontSize}px`;
      document.body.style.color = fontColor;
  
      alert("Preferences saved!");
    });
  });
  