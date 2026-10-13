
/* 1. Handle Button Clicks */

// Change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Reset the background color to white
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}


/* 2. Capture Keyboard Input */

// Display the key pressed by the user
function displayKeyPress(event) {
    const keyDisplay = document.getElementById("key-display");

    if (keyDisplay) {
        keyDisplay.textContent = `You pressed: ${event.key}`;
    }
}

// Listen for keyboard presses
document.addEventListener("keydown", displayKeyPress);


/* 3. Process Text Input */

// Display real-time text input
function displayUserInput() {
    const textInput = document.getElementById("text-input");
    const inputDisplay = document.getElementById("input-display");

    if (textInput && inputDisplay) {
        inputDisplay.textContent = `Your input: ${textInput.value}`;
    }
}


/* 4. Combine Multiple Events */

// Get the buttons
const colorButton = document.getElementById("color-button");
const resetButton = document.getElementById("reset-button");
const textInput = document.getElementById("text-input");

// Attach click event listeners
if (colorButton) {
    colorButton.addEventListener("click", changeBackgroundColor);
}

if (resetButton) {
    resetButton.addEventListener("dblclick", resetBackgroundColor);
}

// Attach input event listener
if (textInput) {
    textInput.addEventListener("input", displayUserInput);
}


/* 5. BONUS: Additional Features */

// Change the input field's appearance on hover
if (textInput) {
    textInput.addEventListener("mouseover", () => {
        textInput.style.border = "2px solid blue";
    });

    textInput.addEventListener("mouseout", () => {
        textInput.style.border = "";
    });
}

// Display a message when the page is clicked
document.addEventListener("click", (event) => {
    const clickDisplay = document.getElementById("click-display");

    if (clickDisplay) {
        clickDisplay.textContent =
            `You clicked on: ${event.target.tagName}`;
    }
});

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}