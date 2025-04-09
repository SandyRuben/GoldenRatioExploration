//declare global variables
let point, lineColor, lineMode;


function setup() {
  //canvas created for main display
  createCanvas(windowWidth, windowHeight);

  //white lines for high visability
  lineColor = 255;
  stroke(lineColor);

  lineMode = 1;

  point = createVector(1,1);

  //setting a black background to contrast with the white lines
  background(0);
}

function draw() {
    //draw line from the center out
    translate(width*.5, height*.5);

    //rotate canvas 
    // rotate(radians(millis()));

    if (lineMode == 1) {
      lineColor = 0;
    } else if (lineMode == 2){
      lineColor = 255;
    } else {
      lineColor = random(255);
    }
    stroke(lineColor);

    line(0,0, point.x, point.y);

    //additional lines for extra fun
    // line(0,0, -point.x, -point.y);
    // line(0,0, point.x/2, point.y/2);
    // line(0,0, -point.x/2, -point.y/2);

    //update point to new location
    point.rotate(radians(137.51));

    point.setMag(1000);
}

function mouseClicked() {

  if(lineMode >=3 ) {
    lineMode = 1;
  } else {
    lineMode++;
  }
  print(lineMode);
  //inverse line color when mouse is clicked
  
}

function windowResized() {
  //scale canvas to window if resized for full immersion
  createCanvas(windowWidth, windowHeight);
  translate(width*.5, height*.5);
  background(0);
}