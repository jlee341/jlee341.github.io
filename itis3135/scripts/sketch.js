let canvas;

function setup() {
  let container = select("#sketch-container");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(container);
  background(255); 
}

function draw() {
  stroke(0); 
  strokeWeight(4); 


  if (mouseIsPressed) {

    point(mouseX, mouseY);
  }
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background(255); 
}
