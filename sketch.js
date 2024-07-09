function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
function draw() {
  p = "prueba";
  let palabras = [
    "hola",
    "mi nombre es Rey Ángeles",
    "soy artistx",
    "audiovisual",
    "trans-media",
    "diseñadorx",
    "DJ",
    "VJ",
    "asistentx",
    "soñadorx",
    "freelance",
    "y mucho más",
    "<3",
  ];
  console.log("hola");
  background(0, 0, 0, 5);
  fill(random(250));
  stroke(20, 111, 220);
  strokeWeight(30);
  textSize(30);
  text(random(palabras), random(width), random(height));
}
