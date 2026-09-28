/*
isAN(value)
https://www.codewars.com/kata/534d80775371ece88d0010b5/train/javascript
isNaN doesn't work very well. We want it to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.

*/

const isAN = v => (v instanceof Number || typeof v === 'number') && !isNaN(v);

