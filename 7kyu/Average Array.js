/*
Average Array
https://www.codewars.com/kata/596f6385e7cd727fff0000d6

ASC Week 1 Challenge 5 (Medium #2)
Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]

*/

function avgArray(arr) {
    const result = [];
    for(let x = 0; x < arr[0].length; x++){
      let sum = 0;
      for(let y = 0; y < arr.length; y++ ){
        sum+=arr[y][x];
      }
      result.push(sum / arr.length);
    }
    return result
}

//avgArray=a=>a[0].map((_,x)=>a.reduce((s,r)=>s+r[x],0)/a.length)