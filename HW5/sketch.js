var line1start = 255;
var line2start = 130;



function setup() {
    createCanvas( 720, 400 );
    background( 'rgb(50, 0, 110)' );

}


function draw(){
  push();
  fill("red");
  noStroke();
  ellipse(mouseX,mouseY,10,50);
  rotate(random(90))
  pop();


  push();
  stroke('yellow');
  strokeWeight(11);
  line(random(line1start),random(line2start),50+10,10*5);

  pop();

}
