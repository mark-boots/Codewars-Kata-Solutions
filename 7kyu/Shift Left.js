/*
https://www.codewars.com/kata/5bdc191306a8a678f6000187/train/javascript

You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.

*/


function shiftLeft(s, t) {
    let i = 0;
    while (i < s.length && i < t.length && s[s.length - 1 - i] === t[t.length - 1 - i]) i++;
    return (s.length - i) + (t.length - i);
}