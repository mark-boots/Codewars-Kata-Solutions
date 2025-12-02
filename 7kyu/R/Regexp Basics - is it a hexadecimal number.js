/*
Regexp Basics - is it a hexadecimal number?
https://www.codewars.com/kata/567c9f56d83baeed8300000f/train/javascript

Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

*/

String.prototype.hexNumber=function(){return/^(0x)?[0-9A-F]+$/i.test(this)}
