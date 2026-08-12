/*
Split by Mask
https://www.codewars.com/kata/6a68ed7894f29599a1f7a248/train/javascript

Given a string and a mask (a list of lengths), split the string into its parts accordingly.

Examples:
|     String      |  Mask (lengths)  |          Output           |
|-----------------|------------------|---------------------------|
|  "1234567890"   |  (3, 3, 4)       |  ["123", "456", "7890"]   |
|  "codewars"     |  (4, 4)          |  ["code", "wars"]         |
Notes:
The mask only contains strictly positive integers.
A mask is valid if and only if the sum of the lengths is equal to the length of the string.
Otherwise, return None, Nothing or a similar empty value.

*/

function split(string,mask) {
  if(mask.reduce((s,v) => s + v, 0) !== string.length) return null;
  string = string.split('');
  return mask.map(m => string.splice(0, m).join('')) 
}