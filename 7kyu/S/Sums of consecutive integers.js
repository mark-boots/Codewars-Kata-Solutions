/*
Sums of consecutive integers
https://www.codewars.com/kata/55b54be931e9ce28bc0000d6/train/javascript

The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

position(4, 14, 3) == 5
Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.
*/

position=(x,y,n)=>Math.ceil(y/x-x/2+n)

position=(x,y,n)=>n+y/x-(x-1)/2