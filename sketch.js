function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
}
function draw() {
  p = "prueba";
  let palabras = [
    "por favor",
    "no me olvides",
    "¿acaso me extrañas?",
    "</3",
    "te quiero",
    "mucho",
    "<3",
  ];
  console.log("tqm");
  background(0, 0, 0, 5);
  fill(random(250));
  stroke(250, 5, 150);
  strokeWeight(77);
  textSize(33);
  text(random(palabras), random(width), random(height));
}
