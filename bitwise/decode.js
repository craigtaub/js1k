
var slimResult = 'opmfeo';

var puzzleEncoded = parseInt(slimResult, 36); // base 36 decode

var positions = [];
for(i=0;i<32;i++) { // max js 32-bit int
  if ((puzzleEncoded & 1<<i) === 1<<i) {
    positions.push(i);
  }
}

// // X/Y coords of grid
// getX = (v) => v % 8;
// getY = (v) => v >> 3; // Math.floor(p / 8).
// // Index-Grid positions
// positions.forEach(index => {
//   console.log(`Index=${index}, X=${getX(index)}, Y=${getY(index)}`);
// });

// draw grid, not 0-indexed
var line = '';
for(i=1;i<=32;i++) {
  var exists = positions.some(item => {
    return (item+1) === i
  });
  if (exists) {
    line += 'X'
  } else {
    line += '-'
  }
  if (i % 8 === 0) {
    console.log(line)
    line = '';
  }
}