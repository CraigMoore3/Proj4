// let width = 400;
// let height = 400;

var midi, data;
var note, vel;

let vid;
let vid2;

let isShown;
let is1Shown;

let isPressed;



function setup() {
  noCanvas();

  vid = createVideo(['t1.mp4'], vidLoad);
  vid2 = createVideo(['t2.mp4'], vidLoad);

  vid.size(400, AUTO);
  vid2.size(200,AUTO);

  vid.position(100, 0);
  vid2.position(50, 150);


  // MIDI SETUP
// request MIDI access
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({
      sysex: false
  }).then(onMIDISuccess, onMIDIFailure);
} else {
  alert("No MIDI support in your browser. Try Chrome!");
}
}

// midi functions
function onMIDISuccess(midiAccess) {
// when we get a succesful response, run this code
midi = midiAccess; // Raw MIDI data, inputs, outputs, and sysex status

var inputs = midi.inputs.values();
// loop over all available inputs and listen for any MIDI input
for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
    // each time there is a midi message call the onMIDIMessage function
    input.value.onmidimessage = onMIDIMessage;
}
}

function onMIDIFailure(error) {
// when we get a failed response, run this code
console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);

}

function onMIDIMessage(message) {
  data = message.data; // [command/channel, note, velocity]
  // console.log('MIDI data', data); // MIDI data [144, 63, 73]
  note = data[1];
  vel = data[2];

  if (note == 44 && vel == 0) {
    Process44()
  }

  if (note == 45 && vel == 0) {
    Process45()
  }
}

  

function Process44() {
  if (is1Shown) {
    vid.hide();
    is1Shown = false
  } else {
    vid.show();
    vid.loop();
    is1Shown = true;
  }
}

function Process45() {
  if (isShown) {
    vid2.hide();
    isShown = false;
  } else {
    vid2.show();
    isShown = true
  }
}

function vidLoad() {
  vid.play()
  is1Shown = true;
  vid.hide()

  vid2.play()
  vid2.hide()

  // vid.play()
  // vid2.play()
}

// function mouseClicked() {
//   //vid.pause();
//   if (isShown) {
//     vid2.hide();
//     isShown = false;
//   } else {
//     vid2.show();
//     isShown = true;
//   }
// }

// // Switch function for knobs
// switch (data[1]) {
//   case 7:
//     k0 = data [2];
//   case 10:
//     k1 = data [2];
//     break;
//   case 74:
//     k2 = data [2];
//   case 71:
//     k3 = data [2]; 
//   case 76:
//     k4 = data [2];
//   case 77:
//     k5 = data [2];
//   case 93:
//     k6 = data [2];
//   case 73:
//     k7 = data [2];
//   case 75:
//     k8 = data [2];
//   case 114:
//     k9 = data [2];
//   case 18:
//     k10 = data [2];
//   case 19:
//     k11 = data [2];
//   case 16:
//     k12 = data [2];
//   case 17:
//     k13 = data [2];
//   case 91:
//     k14 = data [2];
//   case 79:
//     k15 = data [2];
//   case 72:
//     k16 = data [2];
//   default:
//     note = data[1];
//     vel = data[2];
//     break;
// }

// }