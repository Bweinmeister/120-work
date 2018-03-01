
let triColor = 0;


// Canvas and background setup
function setup() {
    createCanvas( 900, 600 );
    background( 'rgb(30, 0, 250)' );
    frameRate(20)
}

// Randomly populate canvas with triangles
function draw(){
    noStroke();
    fill(triColor, triColor, 90);
    translate(random(-50, width-100), random(-50, height-100));
    rotate(frameCount);
    triangle(30, 75,58, 20, 86, 75);

    triColor = triColor + 15;
    triColor = triColor % 100;

    var x1 = map(mouseX, 0, width, 25, 75);
    ellipse(x1, 25, 25, 25);

    var x2 = map(mouseX, 0, width, 0, 100, true);
    ellipse(x2, 75, 25, 25);




// Line Constraints
    var leftWall = 25;
    var rightWall = 75;
    var xm = mouseX;
    var xc = constrain(mouseX, leftWall, rightWall);

 stroke(150);
    line(leftWall, 0, leftWall, height);
    line(rightWall, 0, rightWall, height);

 noStroke();
    fill(150);
    ellipse(xm, 33, 9, 9);
    fill(0);
    ellipse(xc, 66, 9, 9); 

}

// mouse pressed funcion to clear screen
function mousePressed(){
  clear();
  background( 'rgb(100, 0, 110)' );
}
