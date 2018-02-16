
function invert(input) {
  const y = input.toString(2);
  const yl = y.length; // bit number
  const mask = (2 ** yl) -1; // calculate bit-mask
  // const result = ~input & mask; // AND. works
  const result = input ^ mask; // same as above. XOR. works
  console.log('binary:', y);
  console.log('invert:', result.toString(2));
}

invert(793);