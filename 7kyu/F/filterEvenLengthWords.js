/*
filterEvenLengthWords
https://www.codewars.com/kata/59564f3bcc15b5591a00004a/train/javascript

Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.

Example
["One", "Two", "Three", "Four"] --> ["Four"]

*/

filterEvenLengthWords=w=>w.filter(x=>x.length%2==0)
filterEvenLengthWords=w=>w.filter(x=>x.length%2<1)