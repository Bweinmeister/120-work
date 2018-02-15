function setup() {
    // create a canvas to draw on
    createCanvas( 600, 700 );
}

function draw() {

    // background
    background( 'rgb(0, 204, 0)' );


    /* MAIN SANDBOX */
    push();

    translate( 300, 400 );


    /* ARMS */
    push();
    translate( 0, -55 );

    // left arm
    stroke( 'blue' );
    strokeWeight( 35 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(0, 0, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    // right arm
    rotate( PI );
    stroke( 'blue' );
    strokeWeight( 35 );
    line( -140, 0, -200, -100 );
    line( -200, -100, -200, -200 );

    // hand
    stroke( 'rgb(0, 0, 0)' );
    strokeWeight( 75 );
    point( -200, -200 );

    pop(); // ARMS END

    /* BODY */

    push();
    // shirt rectangle
    fill('yellow')
    rect( -150, -100, 300, 300 );

    // stripes
    push();
    fill( 'blue' );
    translate(-150, -100);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    translate(0, 80);
    rect(0, 0, 300, 40);
    pop();

    // button
    fill( 0, 0, 0)
    ellipse( 0, 0, 30 );

    // button 2
    fill( 0, 0, 0)
    ellipse( 0, 80, 30 );

    // button 3
    fill( 0, 0, 0)
    ellipse( 0, 160, 30)

    pop(); // End Body

    /* LEGS */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgb(102, 0, 204)' );
    triangle( -130, 0, 0, 0, -150, 500 );
    // right leg
    scale( -1, 1 );
    triangle( -130, 0, 0, 0, -150, 500 );
    pop(); // LEGS END


    /* HEAD */
    push();
    translate( 0, -175 );

    fill( 'rgb(255, 102, 255)' );
    ellipse( 0, 0, 330, 200 );

    // mouth
    fill( 0 );
    arc( 0, 60, 130, 50, radians(350), radians(190), PIE );

    // nose
    fill('rgb(0, 0, 0)')
    ellipse(0, 0, 100, 50);

    // eyes
    // left
    push();
    translate( -60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(51, 255, 51)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );

    fill( 'rgb(0, 0, 0)' );
    quad( 40, -40, 35, -30, -50, -10, -45, -30 );
    pop();

    // right
    push();
    translate( 60, -40 );

    fill(255);
    ellipse( 0, 0, 60, 35 );
    noFill();
    fill( 'rgb(51, 255, 51)' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );
    fill( 'rgb(0, 0, 0)' );
    quad( -40, -40, -35, -30, 50, -10, 45, -30 );
    pop();

    pop(); // end head




    pop();
}
