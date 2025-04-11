//declare global variables
let point, lineColor, lineMode;


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
}

function draw() {
    //draw line from the center out
    translate(width*.5, height*.5);

    //rotate canvas 
    

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

    line(0,0, point.x,point.y);

    //additional lines for extra fun
    line(0,0, -point.x, -point.y);
    line(0,0, point.x/2, point.y/2);
    line(0,0, -point.x/2, -point.y/2);

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
  
  navigator.vibrate(100);
}

function windowResized() {
  //scale canvas to window if resized for full immersion
  createCanvas(windowWidth, windowHeight);
  translate(width*.5, height*.5);
  background(0);
}