/* GRID
- 32 position (8x4) central grid (32-bit max js integer).
- grid can be ANY size, centre is 8x4
--------
----X---
----X---
--------
*/

var blackSquareA = 12;
var blackSquareB = 20;
// 0 indexed
// each index:
//  - is an x/y position.
//  - is an exponent of 2 (i.e. index 3 is 2*2*2) i.e. TWO's COMPLIMENT
// NOTE cant store numbers like 12 or 20 as made up of other flags so will confuse things

var puzzleEncoded = 1 << blackSquareA | 1 << blackSquareB; 
// | is add, ^ is remove
// 2's compliment is the MASK (1<<X)

var slimEncode = (puzzleEncoded).toString(36); // base 36 encode

console.log('slimEncode: ', slimEncode)
