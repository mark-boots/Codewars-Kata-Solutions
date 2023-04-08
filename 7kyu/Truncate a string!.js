/*
Truncate a string!
https://www.codewars.com/kata/57af26297f75b57d1f000225/train/javascript

Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
Examples

('codewars', 9)  ==>  'codewars'
('codewars', 7)  ==>  'code...'
('codewars', 2)  ==>  'co...'

*/

function truncateString(str, num) {
    if(str.length <= num) return str;
    if(num <= 3) return str.slice(0, num) + "..."
    return str.slice(0, num - 3) + "..."
  }

  const truncateString = (str, num) => str.length <= num ? str : str.slice(0, num - 3 * +(num > 3)) + "..."
  