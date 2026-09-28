/*
Regexp basics - parsing prices
https://www.codewars.com/kata/56833b76371e86f8b6000015/train/javascript

Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.

In this kata, for a price to be considered valid, it must start with a dollar sign ($), followed immediately by a decimal number with exactly 2 decimal digits.

*/
String.prototype.toCents=function(){return(m=this.match(/^\$(\d+)\.(\d\d)$/))?+(m[1]+m[2]):null}
