/* GRID
- 32 position (8x4) central grid (32-bit max js integer).
- grid can be ANY size, centre is 8x4
- e.g (0 indexed)
-------X
----X---
----X---
X--XX-X-
*/
var blackSquare = 7, blackSquareA = 12, blackSquareB = 20, 
    blackSquareC = 24, blackSquareD = 27, blackSquareE = 28, blackSquareF = 30;

// 0 indexed
// each index:
//  - is an x/y position.
//  - is an exponent of 2 (i.e. index 3 is 2*2*2) i.e. TWO's COMPLIMENT
// NOTE above 32 and starts losing accuracy (e.g. adds 3)

var puzzleEncoded = 1 << blackSquare | 1 << blackSquareA | 1 << blackSquareB | 
                    1 << blackSquareC | 1 << blackSquareD | 1 << blackSquareE | 1 << blackSquareF;
// | is add, ^ is remove
// 2's compliment is the MASK (1<<X)

var slimEncode = (puzzleEncoded).toString(36); // base 36 encode

console.log('slimEncode: ', slimEncode)
