/*
Fruit string calculator
https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/

function calculate(s) {
  const [a,b] = s.match(/\d+/g).map(Number);
  return [a+b,a-b][+/loses/.test(s)]
  return /loses/.test(s)?a-b:a+b
}

calculate=(s,[a,b]=s.match(/\d+/g))=>/g/.test(s)?+a+ +b:a-b