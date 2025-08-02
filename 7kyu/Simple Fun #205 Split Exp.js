/*
Simple Fun #205: Split Exp
https://www.codewars.com/kata/58fd9f6213b00172ce0000c9/train/javascript

ask
You are given a decimal number n as a string. Transform it into an array of numbers (given as strings again), such that each number has only one nonzero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros.

Input/Output
[input] string n
A non-negative number.

1 ≤ n.length ≤ 30.

[output] a string array
Elements in the array should be sorted in descending order.

Example
For n = "7970521.5544" the output should be:

["7000000", 
"900000", 
"70000", 
"500", 
"20", 
"1", 
".5",
".05",
".004",
".0004"]
For n = "7496314", the output should be:

["7000000", 
"400000", 
"90000", 
"6000", 
"300", 
"10", 
"4"]
For n = "0", the output should be []

*/

function splitExp(n) {
  if (n === "0") return [];
  
  const [intPart, decPart] = n.split(".");
  const result = [];
  
  // Process integer part
  for (let i = 0; i < intPart.length; i++) {
    if (intPart[i] !== "0") {
      result.push(intPart[i] + "0".repeat(intPart.length - i - 1));
    }
  }
  
  // Process decimal part
  if (decPart) {
    for (let i = 0; i < decPart.length; i++) {
      if (decPart[i] !== "0") {
        result.push("." + "0".repeat(i) + decPart[i]);
      }
    }
  }
  
  return result;
}