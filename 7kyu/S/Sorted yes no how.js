/*
Sorted? yes? no? how?
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

there will be no arrays with less than 2 elements
there will be no arrays where all elements are equal

*/

function isSortedAndHow(arr) {
  let asc = true, dec = true;
  let i = 1;

  while (i < arr.length && (asc || dec)) {
    if (arr[i] > arr[i-1]) dec = false;
    if (arr[i] < arr[i-1]) asc = false;
    i++;
  }

  return asc ? 'yes, ascending' : dec ? 'yes, descending' : 'no';
}

isSortedAndHow=a=>a.every((v,i)=>!i||v>=a[i-1])?'yes, ascending':a.every((v,i)=>!i||v<=a[i-1])?'yes, descending':'no'
