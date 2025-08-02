/*
All Nines
https://www.codewars.com/kata/664b9dd610985cc3b6784111

Task
Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's. Return -1 if no such m exists.

Examples:
11 -> 9, because 11 * 9 == 99.

12 -> -1, because 12 is even, so no multiple of it can contain only nines.

13 -> 76923, because 13 * 76923 == 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only nines.

NOTE: Although x ≤ 4000, m can be very very LARGE. Where necessary, the way of handling big integers appropriate to the language should be used.

*/
function allNines(x) {
  if (x % 2n === 0n || x % 5n === 0n) return -1n;

  let remainder = 0n;
  let value = 0n;
  let multiplier = 0n;

  while (true) {
    remainder = (remainder * 10n + 9n) % x;
    value = value * 10n + 9n;
    multiplier++;
    if (remainder === 0n) return value / x;
  }
}
