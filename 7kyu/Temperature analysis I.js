/*
Temperature analysis I
https://www.codewars.com/kata/588e0f11b7b4a5b373000041/train/javascript

You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.

*/

function lowestTemp(t) {
  return Math.min(...(t.split(" ").map(Number))) || null
}