/*
EAN Validation
https://www.codewars.com/kata/55563df50dda59adf900004d/train/javascript

A lot of goods have an International Article Number (formerly known as "European Article Number") abbreviated "EAN". EAN is a 13-digit barcode consisting of 12 digits followed by a single-digit checksum (EAN-8 is not considered in this kata).

The single-digit checksum is calculated as follows (based upon the first 12 digits):

The digits at the first, third, fifth, etc. positions (i.e. at the odd positions) are multiplied by 1.
The digits at the second, fourth, sixth, etc. positions (i.e. at the even positions) are multiplied by 3.
Sum these results.
If this sum is divisible by 10, the checksum is 0. Otherwise the checksum has the following formula:

checksum
=10−(summod  10)checksum=10−(summod10)
For example, calculate the checksum for 400330101839 (12 digits):

4⋅1+0⋅3+0⋅1+3⋅3+3⋅1+0⋅3+1⋅1+0⋅3+1⋅1+8⋅3+3⋅1+9⋅3
=4+0+0+9+3+0+1+0+1+24+3+27
=7210−(72mod 10)
=8⇒Checksum:84⋅1+0⋅3+0⋅1+3⋅3+3⋅1+0⋅3+1⋅1+0⋅3+1⋅1+8⋅3+3⋅1+9⋅3=4+0+0+9+3+0+1+0+1+24+3+27=72
10−(72mod10)=8⇒Checksum:8
Thus, the EAN-Code is 4003301018398 (12 digits followed by single-digit checksum).

Your Task
Validate a given EAN-Code. Return True/true if the given EAN-Code is valid, otherwise False/false.

Assumption
You can assume the given code is syntactically valid, i.e. it only consists of numbers and it exactly has a length of 13 characters.

Examples
"4003301018398" - True
"4003301018392" - False
*/

function validateEAN(code) {
  const digits = code.match(/\d/g).map(Number);
  const checksum = digits.pop();
  const sum = digits.reduce((s, d, i) => s + d * (i % 2 === 0 ? 1 : 3), 0);
  return checksum === (10 - (sum % 10)) % 10;
}