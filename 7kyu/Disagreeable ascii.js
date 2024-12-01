/*
Disagreeable ascii
https://www.codewars.com/kata/582cb3a637c5583f2200005d/train/javascript

You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

Normally in ascii

a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48
To find who has the 'weightier' name you will switch all the values so:

A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...
For example Joe will have a weight of 254, instead of 286 using normal ascii values.


*/

function getWeight(name){
  name = name.replace(/[a-z]/gi, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
  return [...name].reduce((s, c) => s + c.charCodeAt(), 0);   
}

getWeight=n=>[...n].reduce((s,c)=>/[a-z]/i.test(c)?s+String.fromCharCode(c.charCodeAt(0)^32).charCodeAt(0):s,0)