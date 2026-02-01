// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawNeutral() {
  // White background
  background(181, 181, 181);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Common Ending", width / 2, 300);

  // Instruction text
  textSize(20);
  text("You managed to survive congrats! Press R to reset", width / 2, 360);
}

function neutralMousePressed() {
}

function neutralKeyPressed() {
  if (key === "r" || key === "R") {
    reset();
  }
}
