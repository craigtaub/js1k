var jsLimit = 32; // 32-bit integer

var slimResult = 'mk8w';

var puzzleEncoded = parseInt(slimResult, 36);

//--- Masks ---//
var masks = []
for(var i=0; i < jsLimit; i++) {
  masks.push(1 << i)
}

//--- Matches ---//
const positions = [];
for(var i=0; i < 32; i++) {
  if ((puzzleEncoded & masks[i]) === masks[i]) {
    positions.push(i);
  }
}

// Grid 
positions.forEach(item => {
  console.log(`Index=${item}, X=${getX(item)}, Y=${getY(item)}`);
});

function getX(value) {
  return value % 8;
}

function getY(value) {
  return value >> 3 // Math.floor(p / 8).
}