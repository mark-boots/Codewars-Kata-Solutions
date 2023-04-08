/*
Excel sheet column numbers
https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27

*/

const titleToNumber = t => [...t].reduce((n,c)=>n*26+parseInt(c,36)-9,0)