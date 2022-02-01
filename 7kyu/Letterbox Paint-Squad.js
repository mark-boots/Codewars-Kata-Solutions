/*
Letterbox Paint-Squad
https://www.codewars.com/kata/597d75744f4190857a00008d

For start = 125, and end = 132

The letterboxes are

    125 = 1, 2, 5
    126 = 1, 2, 6
    127 = 1, 2, 7
    128 = 1, 2, 8
    129 = 1, 2, 9
    130 = 1, 3, 0
    131 = 1, 3, 1
    132 = 1, 3, 2

The digit frequencies are:

    0 is painted 1 time
    1 is painted 9 times
    2 is painted 6 times
    etc...

and so the method would return [1,9,6,3,0,1,1,1,1,1]
Notes

    0 < start <= end
    In C, the returned value will be free'd.

*/

const paintLetterboxes = (start, end) =>
  [...Array(end-start+1)].reduce((a,_,i)=>(String(start+i).split``.forEach(v=>a[v]++),a),Array(10).fill(0))
