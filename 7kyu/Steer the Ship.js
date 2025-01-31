/*
Steer the Ship
https://www.codewars.com/kata/5a36f95fb6486a3b4300009d/train/javascript

You're a pirate. Arrr!

Your task is to steer the pirate ship to the designated location.

Return the direction (left / right) and the angle of how much the ship needs to be turned (in degrees).

More Info:

The ship will always start at Cartesian Coordinate (0,0) facing North.
If the angle is 0 or 180, the direction does NOT matter
Round the result to 2 decimal places if necessary
Examples:

steer(1,1)   => "R: 45"  // turn right for 45 degrees
steer(1,0)   => "R: 90"  // turn right for 90 degrees
steer(-1,-1) => "L: 135" // turn left for 135 degrees

*/

const steer = (x, y) => {
  const dir = x > 0 ? 'R' : 'L';
  const angle = Math.abs((Math.atan2(-x, y) * 180 / Math.PI).toFixed(2));
  return `${dir}: ${angle}`
 }