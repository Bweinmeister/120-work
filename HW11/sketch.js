let bubbles = [];

function setup() {
    createCanvas(windowWidth, 1000);
    let b = new Bubble(width/7, height/6, 15);
    bubbles.push(b);
    //setting up the canvas
}

function mouseDragged() {
    let r = random(50, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
    //mouse dragged function to spawn the circles
}

function draw() {
    background('yellow');
    for (let i = 4; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
        //draw function for the background
        //move function to dictate the movement of the bubbles
    }
      if (keyIsPressed === true) {
      fill(0);
    } else {
      fill(255);
    }
     rect(25, 25, 50, 50);
     //Key pressed function top left corner
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-12, 3);
        this.y = this.y + random(-12, 3);
    }

    show() {
        stroke(400);
        strokeWeight(6);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
        //constructor function
    }
}
