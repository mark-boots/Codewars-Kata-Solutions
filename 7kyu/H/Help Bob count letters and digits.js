/*
Help Bob count letters and digits.
https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

countLettersAndDigits=i=>i.match(/[a-z\d]/gi)?.length||0