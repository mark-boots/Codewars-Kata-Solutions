/*
Simple Fun #175: Same Encryption
https://www.codewars.com/kata/58b6c403a38abaaf6c00006b

Task
John loves encryption. He can encrypt any string by the following algorithm:

take the first and the last letters of the word;
replace the letters between them with their number;
replace this number with the sum of it digits 
          until a single digit is obtained.```
Given two strings(`s1` and `s2`), return `true` if their encryption is the same, or `false` otherwise.

# Example

 For `s1 = "EbnhGfjklmjhgz" and s2 = "Eabcz"`, the result should be `true`.
"EbnhGfjklmjhgz" --> "E12z" --> "E3z" "Eabcz" --> "E3z" Their encryption is the same.```

Input/Output
[input] string s1
The first string to be encrypted.

s1.length >= 3

[input] string s2
The second string to be encrypted.

s2.length >= 3

[output] a boolean value
true if encryption is the same, false otherwise.

*/

function sumDigits(n) {
    return n < 10 ? n : sumDigits([...""+n].reduce((s, d) => +d + s, 0));
  }
  
  function encrypt(str) {
    return str[0] + sumDigits(str.length - 2) + str.at(-1);
  }
  
  function sameEncryption(s1, s2) {
    return encrypt(s1) === encrypt(s2);
  }