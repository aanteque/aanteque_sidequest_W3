// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const wakeBtn = {
  x: 400/2, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "WAKE UP!", // text shown on the button

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

const sleepBtn = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "sleep in mimimi", // text shown on the button

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

// photo set up
let alarmImg;

function preload() {
  alarmImg = loadImage('assets/photo/AlarmClock.png');
}


// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(0, 0, 0);

  // ---- Title and instructions text ----
  fill(100); // white text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("BzZZzzzzZZZzzzz", width / 2, 160);

  textSize(18);
  text(
    "Your alarm is sounding....",
    width / 2,
    210,
  );

  // For photo, idk why this works but it does
  fill(0,0,0);
  image(alarmImg, 250, 250, 300, 200)

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawButton(wakeBtn);
  drawButton(sleepBtn);


  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  let in1 = isHover(wakeBtn) || isHover(sleepBtn);
  cursor(in1 ? HAND : ARROW);

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
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(wakeBtn)) {
    smartDecision++;
    triggerInter1();
  } else if (isHover(sleepBtn)) {
    dumbDecision++;
    triggerInter2();
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER && isHover(wakeBtn)) {
    smartDecision++;
    triggerInter1();
  } else if (keyCode === ENTER && isHover(sleepBtn)) {
    dumbDecision++;
    triggerInter2();
  }
}

  function triggerInter1() {
    currentScreen = "inter1"
  }

  function triggerInter2() {
    currentScreen = "inter2"
  }

