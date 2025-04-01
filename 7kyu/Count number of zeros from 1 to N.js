/*
Count number of zeros from 1 to N
https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

Create an algorithm to count the number of zeros that appear between 1 and N.

Examples
 10  -->   1  // 10
 20  -->   2  // 10, 20
100  -->  11  // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
200  -->  31

*/

function countZeros(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      if (num % 10 === 0) count++;
      num = Math.floor(num / 10); 
    }
  }
  return count;
}