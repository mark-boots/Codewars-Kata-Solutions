/*
Harry and the Mathematician's Chicken
https://www.codewars.com/kata/59d12056dcc405ac130000d3/train/javascript

Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

Write a function that takes the total number of chicken pieces Harry can eat (n) and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

0 chicken pieces is a valid chicken option.

For example: Given n = 9, the result should be [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

For non-numeric input, the function should return [0].

Don't forget to rate this kata!

*/

function chickenOptions(n) {
  const result = new Set([0]);
  
  for (let i = 0; i <= n; i++) {
    if (result.has(i)) {
      [3, 6, 10].forEach(box => {
        if (i + box <= n) result.add(i + box);
      });
    }
  }
  return [...result].sort((a, b) => a - b);
}