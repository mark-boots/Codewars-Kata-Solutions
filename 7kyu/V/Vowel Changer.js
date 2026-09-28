/*
Vowel Changer
https://www.codewars.com/kata/597754ba62f8a19c98000030

Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

For Example (input1, vowel) => output:

("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i') => 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
('adira wants to go to the park', 'o') =>'odoro wonts to go to tho pork'

*/
const vowelChange = (str, vow) => str.replace(/[aeiou]/g, vow)