/*jshint esversion: 6 */
// set global variable in array 'tails'
let tails = [];

// create canvas
// set background color
function setup() {
    createCanvas( windowWidth, 600 );
    frameRate(60);
    background(221, 244, 251);
    // for loop that adds objects to array 'Tails'
    for (let i = 0; i < 20; i ++) {
    tails[i] = new Tails (0, 0, 50, 50, (color(200, 0, 100)));
    }

}
// draw function
function draw() {
    background(221, 244, 251, 2350);
    // for loop to enact all methods each draw loop
    // and create specified # of new tails each loop.
    for (let i = 0; i < tails.length; i++) {
        // // calls method to create tail
        tails[i].createLines();
        // calls method to move x and y coordinates of new tail to end of previous tail
        tails[i].moveLines();
        // calls method to redirect tails that go off-screen
        tails[i].edgeLines();
        // calls method that constrains tails to stay within specified window width and height
        tails[i].constrainLines();
        // check if heads are contacting each other
        tails[i].collisionCheck(tails, i);

    }
}
