// Setting up the Circle size that will follow the mouse
let circle1 = 25;
let posX = 0;
let posY = 130;
// Creating the canvas and setting the background colour
function setup() {
    createCanvas( 720, 400 );
    background( 'rgb(50, 0, 110)' );
}
// Set up for the Circle to follow the mouse
function draw() {
  push();

    translate( mouseX, mouseY );
    stroke( 0 );
    fill('rgb(65,105,255)');
    ellipse( 0, 0, circle1 );

  pop();

// Starting the static animation of the ellipse streaking across the canvas
  push();

   fill('rgb(65,105,255)');
   ellipse( posX, posY, 30, 30 );

   posX = posX + 10;
   posY = posY + 3;

  pop();
}
