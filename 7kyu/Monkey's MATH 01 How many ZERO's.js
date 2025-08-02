/*
Monkey's MATH 01: How many "ZERO"s?
https://www.codewars.com/kata/56c2acc8c44a3ad6e400050a/train/javascript

Gigi is a clever monkey, living in the zoo, his teacher (animal keeper) recently taught him some knowledge of "0".

In Gigi's eyes, "0" is a character contains some circle (maybe one, maybe two).

So, a is a "0",b is a "0",6 is also a "0"，and 8 have two "0" ,etc...

Now, write some code to count how many "0"s in the text.

Let us see who is smarter? You ? or monkey?

Input always be a string (including words numbers and symbols)，You don't need to verify it, but pay attention to the difference between uppercase and lowercase letters.

Here is a table of characters：

Number of zeros	Characters
1	abdegopq069DOPQR     () <-- A pair of braces as a zero
2	%&B8
Output will be a number of "0".
*/

function countzero(s) {
  const a = (s.match(/(?:[abdegopq069DOPQR]|\(\))/g) || []).length;
  const b = (s.match(/[%&B8]/g) || []).length * 2;
  return a + b;
}