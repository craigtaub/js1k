// 32 position grid. 8x4
/*
--------
----X---
----X---
--------
*/

var jsLimit = 32; // 32-bit integer

var blackSquareA = 12;
var blackSquareB = 20;
// each square is an x/y position.
// 0 indexed
// each index is an exponent of 2 (i.e. index 3 is 2*2*2)
// NOTE cant store numbers like 12 or 20 as made up of other flags so will confuse things

//--- Masks ---//
var masks = []
for(var i=0; i < jsLimit; i++) {
  masks.push(1 << i)
}

//--- Sets ---//
var puzzleEncoded = masks[blackSquareA] | masks[blackSquareB]; 
// | is add, ^ is remove

var slimEncode = (puzzleEncoded).toString(36);

console.log('slimEncode: ', slimEncode)
