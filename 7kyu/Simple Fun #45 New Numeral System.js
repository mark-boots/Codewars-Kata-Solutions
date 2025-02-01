/*
Simple Fun #45: New Numeral System
https://www.codewars.com/kata/5888445107a0d57711000032/train/javascript


Example
For number = 'G', the output should be ["A + G", "B + F", "C + E", "D + D"]

Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

Input/Output
[input] string(char in C#) number

A character representing a correct one-digit number in the new numeral system.

Constraints: 'A' ≤ number ≤ 'Z'.

[output] a string array

An array of strings in the format "letter1 + letter2", where "letter1" and "letter2" are correct one-digit numbers in the new numeral system. The strings should be sorted by "letter1".

Note that "letter1 + letter2" and "letter2 + letter1" are equal pairs and we don't consider them to be different.

*/

function newNumeralSystem(number) {
  const num = number.charCodeAt(0) - 65;
  const pairs = [];
  
  for (let x = 0; x <= num; x++) {
    const y = num - x;
    if (x <= y) {
      pairs.push(`${String.fromCharCode(x + 65)} + ${String.fromCharCode(y + 65)}`);
    }
  }
  
  return pairs;
}
