/*
Complete The Pattern #6 - Odd Ladder
https://www.codewars.com/kata/5574940eae1cf7d520000076/train/javascript

Task:
You have to write a function which creates the following odd-numbers staircase pattern up to the desired number of rows.

If the input is <= 0, return an empty string
If the input is even, round it down to the odd number that precedes it.
There are no spaces in the pattern
The lines are separated by a newline character (\n)
Examples:
pattern(9):

1
333
55555
7777777
999999999
pattern(6):

1
333
55555
*/

pattern=n=>{s="";for(i=1;i<=n;i+=2)s+=`${i}`.repeat(i)+"\n";return s.trim()}