/*
Down Arrow With Numbers
https://www.codewars.com/kata/5645b24e802c6326f7000049/train/javascript

Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1
and for n = 11, it would be:

123456789010987654321
 1234567890987654321
  12345678987654321
   123456787654321
    1234567654321
     12345654321
      123454321
       1234321
        12321
         121
          1
          
An important thing to note in the above example is that the numbers greater than 9 still stay single digit, like after 9 it would be 0 - 9 again instead of 10 - 19.

Note:

There are spaces for the indentation on the left of each line and no spaces on the right.
Return "" if given n<1.
Have fun!

*/

function getADownArrowOf(n) {
  let result = '';
  for(let i = 0; i < n; i++){
    let line = (n - i) % 10;
    for(let j = n - i - 1; j > 0; j--){
      line = '' + j % 10 + line + j % 10
    }
    result += ' '.repeat(i) + line + '\n'
  }
  return result.trim()
}