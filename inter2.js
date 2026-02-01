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

const runBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "RUN 2 BUS", // text shown on the button

  // Color 1
  r1: 180,
  g1: 220,
  b1: 225,
  a1: 220,

  // Color 2
  r2: 200,
  g2: 220,
  b2: 255,
  a2: 190,
};

const essBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "GRAB ESSENTIALS", // text shown on the button

  // Color 1
  r1: 180,
  g1: 220,
  b1: 225,
  a1: 220,

  // Color 2
  r2: 200,
  g2: 220,
  b2: 255,
  a2: 190,
};

function drawInter2() {
  // White background
  background(150, 12, 0);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("BEEP BEEP BEEP WAKE UP STINKY", width / 2, 300);

  // Instruction text
  textSize(20);
  text("YOU'RE LATE TO THE 304!!!!! GOOO", width / 2, 360);

  drawButton(runBtn);
  drawButton(essBtn);
}


// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function inter2MousePressed() {
  //currentScreen = "inter1";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function inter2KeyPressed() {
  if (key === "r" || key === "R") {
  }
}
