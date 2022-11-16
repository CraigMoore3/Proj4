// let width = 400;
// let height = 400;

let vid;
let vid2;

let isplaying;
let isPressed;


function setup() {
  noCanvas();
  vid = createVideo(['t1.mp4'], vidLoad);
  vid2 = createVideo(['t2.mp4'], vidLoad);
  vid.size(400, AUTO);
  vid2.size(200,AUTO);
  vid.position(100, 0);
  vid2.position(50, 150);
}

function vidLoad() {
  vid.loop()

  vid2.loop()

  // vid.play()

  // vid2.play()

  isPlaying() = true;
}


// function draw() {
//   background(125);
//   text("This is the Project 4 canvas", width/2, height/2);
// }

// function mouseClicked(){
//   if (mouseIsPressed) {
//     isPressed = true
//   } else {
//     isPressed = false
//   }
// }