let pSize = 16;
let pixel = 0;
let pixelfondo = 0;
let contador = 0;
let paleta = true;
// COLORES
let c1 = "#E6E6E6";
let c2 = "#BFBFBF";
let c3 = "#999999";
let c4 = "#737373";
let c5 = "#4D4D4D";
let c6 = "#303030";
let c7 = "#0a0a0a";
let cP = "rgba(10, 10, 10,0.8)";
function setup() {
  createCanvas(512, 512);
  frameRate(3);
}

function draw() {
  background(200);
  //contador-colores
  contador = frameCount % 60;
  if (contador < 30) {
    c1 = "#E6E6E6";
    c2 = "#BFBFBF";
    c3 = "#999999";
    c4 = "#737373";
    c5 = "#4D4D4D";
    c6 = "#303030";
    c7 = "#0a0a0a";
    cP = "rgba(10, 10, 10,0.8)";
  } else{
    c1 = "#737373";
    c2 = "#303030";
    c3 = "#4D4D4D";
    c4 = "#0a0a0a";
    c5 = "#E6E6E6";
    c6 = "#BFBFBF";
    c7 = "#999999";
    cP = "rgba(200, 200, 200,0.8)";
  }
  // CAPA DE FONDO
  push();
  for (let x = 0; x < width; x += 16) {
    for (let y = 0; y < height; y += 16) {
      noStroke();
      if (random() > 0.5) {
        pixelfondo = c1;
      } else {
        pixelfondo = c2;
      }
      fill(pixelfondo);
      ellipse(x, y, 16, 16);
      ellipse(x + 6, y, 16, 16);
      ellipse(x, y + 6, 16, 16);
    }
  }
  pop();
  // CAPA MEDIA
  push();
  translate(320, 180);
  scale(2.3);
  push();
  noStroke();
  fill(c6);
  rect(-50, -50, 100, 100);
  translate(-64, -68);
  stroke(c1);
  strokeWeight(6);
  strokeCap(SQUARE);
  line(50, 50, 80, 50);
  line(46, 54, 46, 84);
  line(50, 88, 80, 88);
  line(84, 54, 84, 84);
  //
  strokeWeight(6);
  line(54, 50, 54, 34);
  line(76, 50, 76, 34);
  line(65, 50, 65, 34);
  //
  line(54, 88, 54, 104);
  line(65, 88, 65, 104);
  line(76, 88, 76, 104);
  //
  line(46, 58, 30, 58);
  line(46, 69, 30, 69);
  line(46, 80, 30, 80);
  //
  line(84, 58, 100, 58);
  line(84, 69, 100, 69);
  line(84, 80, 100, 80);
  pop();
  pop();
  // CHIP 2
  push();
  translate(200, 350);
  scale(1.8);
  push();
  noStroke();
  fill(c7);
  rect(-50, -50, 100, 100);
  translate(-64, -68);
  stroke(c1);
  strokeWeight(6);
  strokeCap(SQUARE);
  line(50, 50, 80, 50);
  line(46, 54, 46, 84);
  line(50, 88, 80, 88);
  line(84, 54, 84, 84);
  //
  strokeWeight(6);
  line(54, 50, 54, 34);
  line(76, 50, 76, 34);
  line(65, 50, 65, 34);
  //
  line(54, 88, 54, 104);
  line(65, 88, 65, 104);
  line(76, 88, 76, 104);
  //
  line(46, 58, 30, 58);
  line(46, 69, 30, 69);
  line(46, 80, 30, 80);
  //
  line(84, 58, 100, 58);
  line(84, 69, 100, 69);
  line(84, 80, 100, 80);
  pop();
  pop();
  // CAPA DE PIXELES
  push();
  for (let x = 0; x < width; x += 8) {
    for (let y = 0; y < height; y += 8) {
      noStroke();
      if (random() > 0.7) {
        pixel = cP;
      } else {
        pixel = "rgba(0,0,0,0)";
      }
      fill(pixel);
      rect(x, y, 8, 8);
    }
  }
  pop();
}
