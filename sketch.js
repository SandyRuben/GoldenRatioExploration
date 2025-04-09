//declare global variables
let point, lineColor, fibI;

let maxFibNumber = 1000;
let fibNumbers = [];

function setup() {
  //canvas created for main display
  createCanvas(windowWidth, windowHeight);

  //setting global variables
  fibI = 0;
  fibNumbers = [0,1];

  //white lines for high visability
  lineColor = 255;
  stroke(lineColor);

  point = createVector(1,1);

  //setting a black background to contrast with the white lines
  background(0);
}

function draw() {
  //populate array
  fibI++;
  fibNumbers.push(fibNumbers[fibI]+fibNumbers[fibI-1]);

    //draw line from the center out
    translate(width*.5, height*.5);
    line(0,0, point.x, point.y);
    // line(0,0, -point.x, -point.y);
    // line(0,0, point.x/2, point.y/2);
    // line(0,0, -point.x/2, -point.y/2);

    //update point to new location
    point.rotate(radians(137.51));

    point.setMag(1000);
}

function mouseClicked() {
  if (lineColor == 255) {
    lineColor = 0;
  } else {
    lineColor = 255;
  };
 

  stroke(lineColor);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  translate(width*.5, height*.5);
  background(0);
}