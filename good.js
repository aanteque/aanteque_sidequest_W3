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
function drawGood() {
  // White background
  background(205, 255, 162);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Good End", width / 2, 300);

  // Instruction text
  textSize(20);
  text("You made it home with plenty of time to spare! Press R to reset", width / 2, 360);
}

reset();