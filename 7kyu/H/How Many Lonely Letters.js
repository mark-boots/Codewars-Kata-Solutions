/*
How Many Lonely Letters?
https://www.codewars.com/kata/69cda5b85599f307742ce70a

Task
Given a string, return the number of lonely letters it contains.

A letter is lonely when:

It appears exactly once in the whole string.
Its alphabetical neighbors are both absent from the string.
Alphabetical neighbors are the previous and next letters in the alphabet.

d has alphabetical neighbors c and e.
a has only one possible neighbor: b.
z has only one possible neighbor: y.
The alphabet is not cyclic, so z is not a neighbor of a, and a is not a neighbor of z.
For example:

d is not lonely if c or e also appears somewhere in the text.
m is lonely if m appears once and both l and n are absent.
Rules
Ignore letter case.
Ignore all non-letter characters.
Work only with English letters a-z.
Examples
Input: "ad" -> Output: 2
Input: "abc" -> Output: 0
Input: "Hello, World!" -> Output: 3
Input: "A-dA" -> Output: 1
Input: "zz" -> Output: 0

*/

function countLonelyLetters(text) {
  const letters = text.toLowerCase().match(/[a-z]/g) || [];
  const letterCount = {};
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  let lonelyCount = 0;
  for (const letter in letterCount) {
    if (letterCount[letter] === 1) {
      const prev = String.fromCharCode(letter.charCodeAt(0) - 1);
      const next = String.fromCharCode(letter.charCodeAt(0) + 1);
      if (!letterCount[prev] && !letterCount[next]) {
        lonelyCount++;
      }
    }
  }

  return lonelyCount;
}
