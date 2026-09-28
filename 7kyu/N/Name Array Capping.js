/*
Name Array Capping
https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

Examples
["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

*/
capMe=n=>n.map(v=>v[0].toUpperCase()+v.slice(1).toLowerCase())