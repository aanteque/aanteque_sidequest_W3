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
function drawBad() {
  // White background
  background(150, 12, 0);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Bad Ending", width / 2, 300);

  // Instruction text
  textSize(20);
  text("You finish your shopping late,,, so late in fact that you can't see the black ice in front of you and you slip...", width / 2, 360);

  textSize(20);
  text("Next time be more diligent,,, Press R to restart", width / 2, 400);
}

reset();