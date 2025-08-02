/*
Sectional Array Sort
https://www.codewars.com/kata/58ef87dc4db9b24c6c000092/train/javascript

Inputs:
An array to sort
The starting index for sorting
(Optional) The number of items to sort
If the number of items to sort is not provided or is zero, sort the array from the starting position to the end.

Examples:
array: [1, 2, 5, 7, 4, 6, 3, 9, 8]
start: 2
length: not specified
expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

array: [9, 7, 4, 2, 5, 3, 1, 8, 6]
start: 2
length: 5
expected result: [9, 7, 1, 2, 3, 4, 5, 8, 6]

*/

function sectSort(array, start, length = 0) {
  let end = length > 0 ? start + length : array.length;
  let sortedSection = array.slice(start, end).sort((a, b) => a - b);
  return [
    ...array.slice(0, start), 
    ...sortedSection, 
    ...array.slice(end)
  ];
}