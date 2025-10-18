/*
Find the area of the rectangle!
https://www.codewars.com/kata/580a0347430590220e000091/train/javascript

Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

This kata is meant for beginners. Rank and upvote to bring it out of beta!

*/
area=(d,l)=>+((d*d-l*l)**.5*l).toFixed(2)||`Not a rectangle`