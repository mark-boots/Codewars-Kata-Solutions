/*
Unscrambled eggs
https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice reggular eggspressions, so commenting would be appreciated.

*/
unscrambleEggs=w=>w.replace(/egg/g,'')