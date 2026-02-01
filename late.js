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
function drawInter1() {
  // White background
  background(255, 252, 225);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("YOU'RE LATE", width / 2, 300);

  // Instruction text
  textSize(20);
  text("PICK SHOULD YOU DO NEXT", width / 2, 360);

}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function inter1MousePressed() {
  currentScreen = "inter1";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function inter1KeyPressed() {
  if (key === "r" || key === "R") {
  }
}
