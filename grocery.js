// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.


const yeastBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "YEASTABLES", // text shown on the button

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

const foodBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Groceries", // text shown on the button

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
function drawGrocery() {
  // White background
  background(100, 168, 147);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Hmmmm should I get food or some candy", width / 2, 300);

  // Instruction text
  textSize(20);
  text("decisions, decisions....", width / 2, 360);

  if (bool306Bus === true) {
    textSize(20);
    text("we arrived 30 minutes LATE hurry it up princess", width / 2, 400);
  }


  drawButton(foodBtn);
  drawButton(yeastBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  let in2 = isHover(foodBtn) || isHover(yeastBtn);
  cursor(in2 ? HAND : ARROW);
}


// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function groceryMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(foodBtn)) {
    triggerEnd();
  } else if (isHover(yeastBtn)) {
    triggerYeast();
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function groceryKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER && isHover(foodBtn)) {
    triggerEnd();
  } else if (keyCode === ENTER && isHover(yeastBtn)) {
    triggerYeast();
  }
}

  function triggerEnd() {
    if (dumbDecision === 2) {
      currentScreen = "bad";
    } else if (smartDecision == 2) {
      currentScreen = "good";
    } else {
      currentScreen = "neutral";
    }

  }

  function triggerYeast() {
    currentScreen = "yeast";
  }


