// let width = 400;
// let height = 400;


var midi, data;
var note, vel;

let vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10, vid11, vid12;

let isV1Shown, isV2Shown, isV3Shown, isV4Shown, isV5Shown, isV6Shown, isV7Shown, isV8Shown, isV9Shown, isV10Shown, isV11Shown, isV12Shown;


let isPressed;



function setup() {

  noCanvas();

  // Create Videos
  vid1 = createVideo(['assets/beefBase.webm'], vidLoad);
  vid2 = createVideo(['assets/fishTopping.webm'], vidLoad);
  vid3 = createVideo(['assets/glowTopping.webm'], vidLoad);
  vid4 = createVideo(['assets/oven.webm'], vidLoad);
  vid5 = createVideo(['assets/fishFall.mp4'], vidLoad);
  vid6 = createVideo(['assets/fishCut.webm'], vidLoad);
  vid7 = createVideo(['assets/roastCut.webm'], vidLoad);
  vid8 = createVideo(['assets/turkeyTrot.webm'], vidLoad);
  vid9 = createVideo(['assets/beefPack.webm'], vidLoad);
  vid10 = createVideo(['assets/openFish.webm'], vidLoad);
  vid11 = createVideo(['assets/goopPour.webm'], vidLoad);
  vid12 = createVideo(['assets/grossPan1.mp4'], vidLoad);

  // Video Size
  vid1.size(1632,918);
  vid2.size(1632,918);
  vid3.size(1632,918);
  vid4.size(1632,918);
  vid5.size(480,360);
  vid6.size(480,360);
  vid7.size(480,360);
  vid8.size(480,360);
  vid9.size(640,360);
  vid10.size(640,360);
  vid11.size(640,360);
  vid12.size(640,360);

  // Video Position
  vid1.position(25, 50);
  vid2.position(25, 50);
  vid3.position(25, 50);
  vid4.position(25, 50);
  vid5.position(1152, 558);
  vid6.position(25, 50);
  vid7.position(500, 100);
  vid8.position(0, 150);
  vid9.position(0, 200);
  vid10.position(1152, 50);
  vid11.position(100, 100);
  vid12.position(150, 150);


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
// when we get a failed response from the broswer, this code will run
console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);

}

// Interpreting MIDI Data
function onMIDIMessage(message) {
  data = message.data; // [command/channel, note, velocity]
  // console.log('MIDI data', data); // MIDI data [144, 63, 73]
  note = data[1];
  vel = data[2];

 // Pad Note Values ( 0 - 127 )
// 1 = 44   2 = 45   3 = 46   4 = 47
// 5 = 48   6 = 49   7 = 50   8 = 51 
// 9 = 36   10 = 37   11 = 38   12 = 39
// 13 = 40   14 = 41   15 = 42   16 = 43

// Pad 1
  if (note == 44 && vel == 0) {
    Process44()
  }

  // Pad 2
  if (note == 45 && vel == 0) {
    Process45()
  }

  // Pad 3
  if (note == 46 && vel == 0) {
    Process46()
  }

  // Pad 4
  if (note == 47 && vel == 0) {
    Process47()
  }

  // Pad 5
  if (note == 48 && vel == 0) {
    Process48()
  }

  // Pad 6
  if (note == 49 && vel == 0) {
    Process49()
  }

  // Pad 7
  if (note == 50 && vel == 0) {
    Process50()
  }

  // Pad 8
  if (note == 51 && vel == 0) {
    Process51()
  }

  // Pad 9
  if (note == 36 && vel == 0) {
    Process36()
  }

  // Pad 10
  if (note == 37 && vel == 0) {
    Process37()
  }

  // Pad 11
  if (note == 38 && vel == 0) {
    Process38()
  }

  // Pad 12
  if (note == 39 && vel == 0) {
    Process39()
  }

//   if (note == 40 && vel == 0) {
//     Process40()
//   }

//   if (note == 41 && vel == 0) {
//     Process41()
//   }

//   if (note == 42 && vel == 0) {
//     Process42()
//   }

//   if (note == 43 && vel == 0) {
//     Process43()
//   }
}


//  Creating functions for button toggles
function Process44() {
  if (isV1Shown) {
    vid1.hide();
    isV1Shown = false
  } else {
    vid1.show();
    vid1.loop();
    isV1Shown = true;
  }
}

function Process45() {
  if (isV2Shown) {
    vid2.hide();
    isV2Shown = false;
  } else {
    vid2.show();
    vid2.loop(); 
    isV2Shown = true;
  }
}

function Process46() {
  if (isV3Shown) {
    vid3.hide();
    isV3Shown = false;
  } else  {
    vid3.show();
    vid3.loop();
    isV3Shown = true;
  }
}

function Process47() {
  if (isV4Shown) {
    vid4.hide();
    isV4Shown = false;
  } else  {
    vid4.show();
    vid4.loop();
    isV4Shown = true;
  }
}

function Process48() {
  if (isV5Shown) {
    vid5.hide();
    isV5Shown = false;
  } else  {
    vid5.show();
    vid5.loop();
    isV5Shown = true;
  }
}

function Process49() {
  if (isV6Shown) {
    vid6.hide();
    isV6Shown = false;
  } else {
    vid6.show();
    vid6.loop();
    isV6Shown = true;
  }
}

function Process50() {
  if (isV7Shown) {
    vid7.hide();
    isV7Shown = false;
  } else {
    vid7.show();
    vid7.loop();
    isV7Shown = true;
  }
}

function Process51() {
  if (isV8Shown) {
    vid8.hide();
    isV8Shown = false;
  } else {
    vid8.show();
    vid8.loop();
    isV8Shown = true;
  }
}

function Process36 () {
  if (isV9Shown) {
    vid9.hide();
    isV9Shown = false;
  } else {
    vid9.show();
    vid9.loop();
    isV9Shown = true;
  }
}

function Process37 () {
  if (isV10Shown) {
    vid10.hide();
    isV10Shown = false;
  } else {
    vid10.show();
    vid10.loop();
    isV10Shown = true;
  }
}

function Process38 () {
  if (isV11Shown) {
    vid11.hide();
    isV11Shown = false;
  } else {
    vid11.show();
    vid11.loop();
    isV11Shown = true;
  }
}

function Process39 () {
  if (isV12Shown) {
    vid12.hide();
    isV12Shown = false;
  } else {
    vid12.show();
    vid12.loop();
    isV12Shown = true;
  }
}


  // Pad Note Values ( 0 - 127 )
// 1 = 44   2 = 45   3 = 46   4 = 47
// 5 = 48   6 = 49   7 = 50   8 = 51 
// 9 = 36   10 = 37   11 = 38   12 = 39
// 13 = 40   14 = 41   15 = 42   16 = 43


  // Load Video functions
function vidLoad() {
  
  vid1.play()
  isV1Shown = true;
  vid1.hide()

  vid2.play()
  isV2Shown = true;
  vid2.hide()

  vid3.play()
  isV3Shown = true;
  vid3.hide()

  vid4.play()
  isV4Shown = true;
  vid4.hide()

  vid5.play()
  isV5Shown = true;
  vid5.hide()

  vid6.play()
  isV6Shown = true;
  vid6.hide()

  vid7.play()
  isV7Shown = true;
  vid7.hide()

  vid8.play()
  isV8Shown = true;
  vid8.hide()

  vid9.play()
  isV9Shown = false;
  vid9.hide()

  vid10.play()
  isV10Shown = false;
  vid10.hide()

  vid11.play()
  isV11Shown = false;
  vid11.hide()

  vid12.play()
  isV12Shown = true;
  vid12.hide()
}
