/*
Multiply Adjacent Digits
https://www.codewars.com/kata/67191920c29c7e09d9f40707/train/javascript

Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

For example:

"53+5"    ->   20, which is 5 * 3 + 5
"266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
"555"     ->  125, which is 5 * 5 * 5

*/

function digitMultiplication(expr) {
  return eval(expr.replace(/\d+/g, m => `(${m.split('').join('*')})`));
}

digitMultiplication=e=>eval(e.replace(/\d+/g,m=>`(${m.split('').join('*')})`))

digitMultiplication=s=>eval(s.replace(/(\d)(?=\d)/g,'$1*'))