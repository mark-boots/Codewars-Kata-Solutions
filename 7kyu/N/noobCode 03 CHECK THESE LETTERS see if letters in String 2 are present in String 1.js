/*
noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

*/

letterCheck=(x,[a,b]=x.map(s=>[...s.toUpperCase()]))=>b.every(c=>a.includes(c))
letterCheck=([a,b])=>!new RegExp("[^"+a+"]","gi").test(b)