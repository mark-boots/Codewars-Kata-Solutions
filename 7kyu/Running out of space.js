/*
Running out of space
https://www.codewars.com/kata/56576f82ab83ee8268000059/

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

const spacey = array => array.map((_,i)=>array.slice(0,i+1).join``)