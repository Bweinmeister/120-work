let circle1 = {};
circle1.pos1x = 100;
circle1.pos1y = 100;
circle1.pos2x = 200;
circle1.pos2y = 200;
circle1.pos3x = 0;
circle1.pos3y = 0;
function setup() {
    createCanvas( 720, 400 );
    background( 'rgb(50, 0, 110)' );

    circle1.pos1x = random(width);
    circle1.pos1y = random(height);
    circle1.pos2x = circle1.pos1x + 1;
    circle1.pos2y = circle1.pos1y - 1;
}


function draw(){
  centerX = width * 0.5;
  centerY = height * 0.5;


}

function mousePressed(){
  clear();
  background( 'rgb(50, 0, 110)' );
}
