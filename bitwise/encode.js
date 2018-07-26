/* 
TWOS COMPLIMENT:
- of an N-bit number is defined as its complement with respect to 2(power of)N

EXPONENTIAL:
- repeatedly do something on itself
- "to the power of"
- "4 to power of 2" is 2*2*2*2
*/

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

/*
NOTES:
each index, is an x/y position + an exponent of 2.
doesnt work if >= 32 (32-bit max js integer)
| is add, ^ is remove
2's compliment is the MASK (1<<X)
*/

var puzzleEncoded = 1 << blackSquare | 1 << blackSquareA | 1 << blackSquareB | 
                    1 << blackSquareC | 1 << blackSquareD | 1 << blackSquareE | 1 << blackSquareF;

/*
WALK-THROUGH
var puzzleEncoded = 1 << blackSquare | 1 << 5 | 1 << blackSquareF;
console.log('puzzleEncoded', puzzleEncoded); // 1073741984
HOW:
7 = bin 10000000, dec 128, 1 << 7, exponentially 2*2*2*2*2*2*2, so "2 power of 7"
5 = bin 00100000, dec 32, 1 << 5, ..
128 + 32 = 160
| is same as + i.e. 1 + 1 is 1 | 1
30 = bin 1000000000000000000000000000000, dec 1073741824, 1 << 30, so "2 power of 30" (big)
NOTE: above 30 bits..MAX in JS is 32
1073741824 + 160 = 1073741984 (puzzleEncoded)
*/

var slimEncode = (puzzleEncoded).toString(36); // base 36 encode, "represents binary data in an ASCII string format"
/*
IS base36 worth it?
1073741984 = 10 bytes (our numbers encoded together with 2's compliment)
hra0m8 = 6 bytes (saves 4 bytes or 32-bits)
*/

/* ENCODING/COMPRESSION
1. several numbers stored in 1 long number
2. base36 encoding that number
*/
console.log('slimEncode: ', slimEncode)
