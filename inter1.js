// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.


const contBtn = {
  x: 400, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "continue...", // text shown on the button

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
function drawInter1() {
  // White background
  background(255, 252, 225);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Congrats on waking up!", width / 2, 300);

  // Instruction text
  textSize(20);
  text("Don't forget you have to head to the 304 bus soon so get ready!", width / 2, 360);

  drawButton(contBtn);
  cursor(isHover(contBtn) ? HAND : ARROW);

}


function inter1MousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(contBtn)) {
    triggerBus();
  }
  }

  
  function inter1KeyPressed() {
    // ENTER key triggers the same behaviour as clicking the button
    if (keyCode === ENTER && isHover(contBtn)) {
      triggerBus();
      
    }
  }
  function triggerBus() {
    currentScreen = "bus"
  }
  

