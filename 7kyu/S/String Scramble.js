/*
String Scramble
https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript

Examples
Input: 'abcd', [0, 3, 1, 2]

Output: 'acdb'

Explanation:

The character 'a' is placed at index 0.

The character 'b' is placed at index 3.

The character 'c' is placed at index 1.

The character 'd' is placed at index 2.

Notes
The string and the array will always be of equal length.

Both the string and the array will contain valid characters (A-Z, a-z, or 0-9).

*/
function scramble(str, arr) {
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
      result[arr[i]] = str[i];
  }
  
  return result.join('');
}