
function setup() {
    createCanvas(1400, 600);
}

let pos_x = 2;
let pos_y = 2;
let d = 60;
let r = d / 2;
var fPS = 15;

function draw() {
    background('rgb(0, 79, 30)');
    frameRate(fPS);
    fill(255);
    stroke(5);

    for (let i = 0; i < 25; i++) {
        // find the x_pos
        pos_x = width * i / 25 + r;
        fill( 255, 140, random(255) );
        ellipse(pos_x, pos_y, d);
    }
    pos_y++;
      if (pos_y > height) {
          pos_y = 0;
      }
  }
