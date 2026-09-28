/*
Slope of a Line
https://www.codewars.com/kata/53222010db0eea35ad000001

Task

Your challenge is to write a function named getSlope/get_slope/GetSlope that calculates the slope of the line through two points.
Input

Each point that the function takes in is an array 2 elements long. The first number is the x coordinate and the second number is the y coordinate. If the line through the two points is vertical or if the same point is given twice, the function should return null/None.

*/

const getSlope = (p1,p2) => {
    const [ax,ay]=p1, [bx,by]=p2
    return bx - ax ? (by - ay) / (bx - ax) : null
  }