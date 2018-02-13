
var slimResult = 'opmfeo';

var puzzleEncoded = parseInt(slimResult, 36); // base 36 decode

getX = (v) => v % 8;
getY = (v) => v >> 3; // Math.floor(p / 8).

var positions = [];
for(i=0;i<32;i++) { // max js 32-bit int
if ((puzzleEncoded & 1<<i) === 1<<i) {
    positions.push(i);
  }
}

// Index-Grid positions
positions.forEach(index => {
  console.log(`Index=${index}, X=${getX(index)}, Y=${getY(index)}`);
});

