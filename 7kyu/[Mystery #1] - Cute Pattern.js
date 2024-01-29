/*
[Mystery #1] - Cute Pattern
https://www.codewars.com/kata/64087fd72daf09000f60dc26

You have a square shape of 4x4, you need to find out by what criterion there are cute and not cute patterns in these cases:imageAccording to the given arrangement of tiles, it is required to determine whether the executed pattern is cute. You need to write a function.

Input data:

A string value is entered into the function by type "BWBW\nBBWB\nWWBB\nBWWW".

B - black tile

W - white tile

\n - included just for line wrapping

Output data:

Return True if the pattern is cute and False otherwise.

Examples:

cute_pattern("BWBW\nBBWB\nWWBB\nBWWW") # should return True
cute_pattern("BBWB\nBBWB\nWWBW\nBBWB") # should return False
If you want to solve our problems, they are here: From Singularity Hub Community

I will gladly accept help for other languages in telegram @fimermaker

*/

cutePattern=w=>!w.match(/BB...BB|WW...WW/s)
cutePattern=w=>!w.match(/(BB|WW)...\1/s)
cutePattern=w=>!/(BB|WW)...\1/s.test(w)