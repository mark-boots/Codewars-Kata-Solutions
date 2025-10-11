/*
Extending JavaScript Objects: Get First & Last Array Element
https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript

Your task is to extend the JavaScript Array object with methods .first() and .last(), so you can get the first respectively the last element of the array.

var a = [2, 5, 7, 3 ,4];

a.first();  // 2
a.last();   // 4

*/
Array.prototype.first = function() {
  return this[0];
}

Array.prototype.last = function() {
  return this.at(-1);
}
