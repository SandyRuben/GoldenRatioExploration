//declare global variables
let point, lineColor, lineMode;

let astralSound, doomSound, trippySound;

function preload() {
  // astralSound = loadSound("assets/astralSound");
  // doomSound = loadSound("assets/doomSound");
  // trippySound = loadSound("assets/trippySound")

  // Prevent top level gesture scrolling/zooming
  // This if iOS Safari specific
  // document.addEventListener("gesturestart", function (e) {
  //   e.preventDefault();
  //   return false;
  // });
}

function setup() {
  //canvas created for main display
  createCanvas(windowWidth, windowHeight);

  //white lines for high visability
  lineColor = 255;
  stroke(lineColor);
  colorMode(HSB, 360, 100, 100, 1);

  lineMode = 1;

  point = createVector(1,1);

  //setting a black background to contrast with the white lines
  background(0);

  //draw line from the center out
  
}

function draw() {
  if (mouseX > 0 || mouseY > 0) {
    translate(mouseX, mouseY);
  } else {
    translate(width*.5, height*.5);
  }

    //different line properties for each line mode
    if (lineMode == 1) {
      lineColor = color(0, 0, 90, 1);
    } else if (lineMode == 2){
      lineColor = color(0, 100, 0, 1);
    } else {
      lineColor = color(random(360), random(100), 95, 1);
      // print(lineColor);
      rotate(radians(millis()));
    }
    stroke(lineColor);
    
    //the OG line
    line(0,0, point.x,point.y);

    //additional lines for extra fun
    line(0,0, -point.x, -point.y);
    line(0,0, point.x/2, point.y/2);
    line(0,0, -point.x/2, -point.y/2);

    //update point to new location
    point.rotate(radians(137.51));
    point.setMag(5000);
}

function mousePressed() {
  

  //cycle between line modes
  if(lineMode >=3 ) {
    lineMode = 1;
  } else {
    lineMode++;
  }
  // print(lineMode);
  
  //haptic feedback
  navigator.vibrate(100);
}

function windowResized() {
  //scale canvas to window if resized for full immersion
  createCanvas(windowWidth, windowHeight);
  translate(width*.5, height*.5);
  background(0);
}