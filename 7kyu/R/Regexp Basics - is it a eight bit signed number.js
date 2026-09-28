/*
Regexp Basics - is it a eight bit signed number?
https://www.codewars.com/kata/567ed73340895395c100002e/train/javascript

Implement:

String.prototype.signedEightBitNumber()
which should return true if given object is a number representable by 8 bit signed integer (-128 to -1 or 0 to 127), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

*/

String.prototype.signedEightBitNumber=function(){return/^(0|-?[1-9]\d*)$/.test(x=this)&&x>-129&&x<128}