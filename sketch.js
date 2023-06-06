let pSize = 16;
function setup() {
  createCanvas(512, 512);
  background(200);
  
}

function draw() {
  for (var x = 0; x < width; x += pSize) {
    for (var y = 0; y < height; y += pSize) {
      rect(x, y, pSize, pSize);
    }
  }
}