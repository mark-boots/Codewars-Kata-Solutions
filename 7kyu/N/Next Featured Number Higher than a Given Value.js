/*
Next Featured Number Higher than a Given Value
https://www.codewars.com/kata/56abc5e63c91630882000057/train/javascript

Make a function that receives a value, and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that fulfills those requirements"
Enjoy the kata!!

*/

nextNumb=v=>{
  while(++v<1e10)if(v%6==3&&new Set(s=v+'').size==s.length)return v
  return"There is no possible number that fulfills those requirements"
}