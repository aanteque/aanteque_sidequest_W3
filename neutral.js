// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.


const bus1Btn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "304", // text shown on the button

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

const bus2Btn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "306", // text shown on the button

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


// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawNeutral() {
  // White background
  background(255, 252, 225);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("WHICH BUS SHALL YOU ENTER?", width / 2, 300);

  // Instruction text
  textSize(20);
  text("Don't forget you have to head to the 304 bus soon so get ready!", width / 2, 360);

  drawButton(bus1Btn);
  drawButton(bus2Btn);
}