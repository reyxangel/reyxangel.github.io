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
  console.log("tqm");
  background(0, 0, 0, 5);
  fill(random(250));
  stroke(250, 5, 150);
  strokeWeight(77);
  textSize(33);
  text(random(palabras), random(width), random(height));
}
