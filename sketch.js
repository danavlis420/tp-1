let pSize = 8;
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
  for (let x = 0; x < width; x += pSize*2) {
    for (let y = 0; y < height; y += pSize*2) {
      noStroke();
      if (random() > 0.5) {
        pixelfondo = c1;
      } else {
        pixelfondo = c2;
      }
      fill(pixelfondo);
      ellipse(x, y, pSize*2);
      ellipse(x + 6, y, pSize*2);
      ellipse(x, y + 6, pSize*2);
    }
  }
  pop();
  // CAPA MEDIA
  if (mouseIsPressed || keyIsPressed){
    pSize=16;
  } else{
    pSize=8;
  }
  // CAPA DE PIXELES
  push();
  for (let x = 0; x < width; x += pSize) {
    for (let y = 0; y < height; y += pSize) {
      noStroke();
      if (random() > 0.7) {
        pixel = cP;
      } else {
        pixel = "rgba(0,0,0,0)";
      }
      fill(pixel);
      rect(x, y, pSize, pSize);
    }
  }
  pop();
}
