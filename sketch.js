let pSize = 16;
let pixel = 0;
let pixelfondo = 0;
let paleta = true;
// COLORES
let c1 = "#737373";
let c2 = "#303030";
let c3 = "#4D4D4D";
let c4 = "#0a0a0a";
let c5 = "#E6E6E6";
let c6 = "#BFBFBF";
let c7 = "#999999";
let cP = "rgba(200, 200, 200,0.8)";
function setup() {
  createCanvas(512, 512);
  frameRate(3);
}

function draw() {
  background("#0a0a0a");
  // CAPA DE FONDO
  push();
  for (let x = 0; x < width; x += pSize * 2) {
    for (let y = 0; y < height; y += pSize * 2) {
      noStroke();
      if (random() > 0.5) {
        pixelfondo = c1;
      } else {
        pixelfondo = c2;
      }
      fill(pixelfondo);
      ellipse(x, y, pSize * 2);
      ellipse(x + 6, y, pSize * 2);
      ellipse(x, y + 6, pSize * 2);
    }
  }
  pop();
  // CAPA MEDIA
  push();
  translate(320, 180);
  scale(2.3);
  push();
  noStroke();
  fill(c4);
  rect(-50, -50, 100, 100);
  translate(-64, -68);
  stroke(c6);
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
  fill(c4);
  rect(-50, -50, 100, 100);
  translate(-64, -68);
  stroke(c6);
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
  // MARCO
  noStroke();
  fill("#0a0a0a");
  rect(0,0,512,32);
  rect(0,0,32,512);
  rect(0,512,512,-32);
  rect(512,512,-32,-512);
}