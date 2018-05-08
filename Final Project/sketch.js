var fireworks = [];
let img;
let img2;

function preload() {


  img = loadImage("images/Par.jpg");
  img2 = loadImage("images/firework1.png");
}

function setup() {
  createCanvas(1920,1080);

}


function mousePressed(){
  push();
  imageMode(CENTER)
  var b = new Firework(mouseX,mouseY, img2);
  fireworks.push(b);
pop();
}


function draw(){
  background(img);
  for (var i = fireworks.length -1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].display();
  }
}
