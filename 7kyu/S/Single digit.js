//[7 kyu] Single digit
const singleDigit = n => n < 10 ? n : singleDigit(n.toString(2).match(/1/g).length)