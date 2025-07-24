/* 
Hex Word Sum
https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3/train/javascript

Description
As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

Example
Working with the string "BAG OF BEES":

"BAG"  =  0, as it is not a valid hex value  
"OF"   =  0F   =  15
"BEES" =  BEE5 =  48869
So the result is the sum of these: 48884 (0 + 15 + 48869)

Notes
Inputs are all uppercase and contain no punctuation
0 can be substituted for O
5 can be substituted for S

*/

function hexWordSum( string ){
  return string.split(" ").reduce((s, v) => {
    return s + (Number('0x' + v.replace(/[OS]/g, m => m == 'O' ? 0 : 5)) || 0);
  }, 0)
  
}