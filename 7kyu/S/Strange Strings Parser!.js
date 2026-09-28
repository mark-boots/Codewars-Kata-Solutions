/*
Strange Strings Parser!
https://www.codewars.com/kata/584d88622609c8bda30000cf

Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!
*/

const wordSplitter = s => s.split(/[^a-z0-9.-]/gi)

//
const wordSplitter = s => s.match(/[\w.-]+/g)