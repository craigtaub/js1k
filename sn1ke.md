- ** = ES7 exponentiation operator (https://github.com/rwaldron/exponentiation-operator)
  // let cubed = 2 ** 3;
  // same as: 2 * 2 * 2
- ch used over px ??
    "Represents the width, or more precisely the advance measure, of the glyph "0" (zero, the Unicode character U+0030) in the element's font."
- onkeydown is a global 
- level - design encoded in a single number.
  - numbers encoded into base36(cud b 64), for shortening.
- () could b _
- black can be #111, grey #777

===

SO:
2 functions

onkeydown
  get key (k)
  logic for moving snake + collision detection
  state of snake coords kept (S)
  has user won (W) // all snake in black squares
  draw scene loop  // WIDTH 48ch, write 176 A squares (3ch x 3ch). wraps into square 16x11
    compute square color 
    where does square belong? (if snake is game won, if cell is inside centre puzzle or not)
    square contents. eyes or empty
    write square to doc 

getSquareColor (M) // 0: black pattern / 1: wrap area / 2: exterior.
  get cells coords // moves left->right, top->bottom. SO 0 (top left) is 0/0..1 (1 square in) is 1/0.. 16 (0 square in + 1 down) is 0/1.
    // SO turns items 176 number into X + Y. (0 indexed)
    // e.g. 174... % 16 = 14 (15 across, X). >> 4 = 10 (10 down, Y, bottom)
    


== QUESTION

how does 19r = level 1??
parseInt("19r", 36) = 1647
  // 1647 is inner puzzle encoded.
  // encodes 8 squares in 1 number?
  // is X/Y inside this block?
  // how is 70 in 1647 = 1 aka black?
  // base2 is binary + base10 is decimal
  // get base2 value of 1647 
  // ignore wrap/nowrap puzzles (all nowrap for now)
  // PERHAPS bit position at that base2 value (e.g. 70 in decimal 1647 position is 1)
  // bi
  // 1647 = 011001101111

1647 / 2 ** (z * (y - t + 2) + (x - t)) & 1 ??

1647 with 71 = 1
1647 with 70 = 1
1647 with 69 = 0 ??

"
// The current level is converted in base 10, then each bit of its base2 value is extracted using the following computation.
// Considering N is the number where the puzzle is encoded, and X & Y the coordinates inside the puzzle,
// extracting the bit Y * Z + X of the number N is equivalent to: N / ( 2 ** (z * Y + X) & 1 ).
"?
