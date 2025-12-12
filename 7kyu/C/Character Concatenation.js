/*
Character Concatenation
https://www.codewars.com/kata/55147ff29cd40b43c600058b/train/javascript

Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result

*/

charConcat=(s,x='')=>{for(i=1;i<=~~(s.length/2);i++)x+=s.at(i-1)+s.at(-i)+i;return x}

charConcat=(s,x='')=>{for(i=1;i*2+1<s.length;i++)x+=s.at(i-1)+s.at(-i)+i;return x}