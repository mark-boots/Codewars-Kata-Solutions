/*
Circle cipher
https://www.codewars.com/kata/634d0723075de3f97a9eb604/train/javascript

Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:Then remove the circle:
If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"

*/

function encode(word) {
  let result = [];
  let length = word.length;
  for (let i = 0, l = word.length; i < Math.ceil(length / 2); i++) {
      result.push(word[i]); 
      if (i !== length - i - 1) result.push(word[length - i - 1]);
  }
  return result.join("");
}

function decode(encoded) {
  let result = Array(encoded.length);
  let mid = Math.ceil(encoded.length / 2);
  for (let i = 0; i < mid; i++) {
      result[i] = encoded[i * 2];
      if (i * 2 + 1 < encoded.length) result[encoded.length - i - 1] = encoded[i * 2 + 1];
  }
  return result.join("");
}
