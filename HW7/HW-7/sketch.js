

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
// This defines the variables of the ball and the scale that the ball will be
// defining each of the variables helps with the Boolean statements that will
// dictate the balls patterns

ball.r = (255);
ball.g = (255);
ball.b = (255);

// With these I define my changing color ball with starting random values

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}
// This function defines the canvas size and the background



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(ball.r, ball.g, ball.b);
    ellipse(ball.x, ball.y, ball.width, ball.width);

}
//  These Boolean statements show the conditions for the balls trajectory by
// defining patterns that the ball has to follow through if then statements


function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 1, 10);
    ball.scale_y = map(mouseY, 0, height, 1, 10);


    background(0, random(255), 0)

    ball.r = 0;
    ball.g = 0;
    ball.b = random(255);

  // Now when the mouse is pressed the color of the ball will change to a
  // randomized shade of blue
  // The background will also change to a different shade of green everytime
  // the mouse is pressed

}
// This function changes the behavior of the ball when the mouse is pressed
