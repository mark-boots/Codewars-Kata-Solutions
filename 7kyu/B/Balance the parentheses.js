/*
Balance the parentheses
https://www.codewars.com/kata/5d8365b570a6f6001519ecc8

Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

The input will be a string of varying length, only containing '(' and/or ')'.

For example:

Input: ")("
Output: "()()"

Input: "))))(()("
Output: "(((())))(()())"

*/

const fixParentheses = s => {
    const {l, r} = [...s].reduce((c, v) => (v=='(' ? c.r++ : c.r ? c.r-- : c.l++, c), {l:0, r:0});
    return '('.repeat(l) +s +')'.repeat(r)
  }
  