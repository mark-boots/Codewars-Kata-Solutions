/*
Find the nth Digit of a Number
https://www.codewars.com/kata/577b9960df78c19bca00007e

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/

const findDigit = (num, nth) => {
    return nth < 1 ? -1 : Math.floor( Math.abs(num) / (Math.pow(10, nth-1)) ) % 10;
  }

//findDigit=(x,n)=>n<1?-1:~~(Math.abs(x)/10**--n)%10
//findDigit=(x,n)=>--n<0?-1:0|Math.abs(x/10**n%10)

