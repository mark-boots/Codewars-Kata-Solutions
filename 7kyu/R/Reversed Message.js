/*
Reversed Message
https://www.codewars.com/kata/5a0efbb7c374cb69970000cf/train/javascript

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol is now in the first position of the word, no capitalisation needs to occur.

Examples:

  Given: "Reverse this message!"
Returns: "!egassem Siht Esrever"

  Given: "Today is the 14th of January!"
Returns: "!yraunaj Fo Ht41 Eht Si Yadot"

  Given: ""
Returns: ""

*/

function reverseMessage(str) {
  if(str == "") return "";
  return str.toLowerCase().split(" ").reverse().map(w => {
    const x = w.split("").reverse();
    return x[0].toUpperCase() + x.slice(1).join("");
  }).join(" ")
}