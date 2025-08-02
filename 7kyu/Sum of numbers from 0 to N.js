/*
Sum of numbers from 0 to N
https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

*/

const SequenceSum = () => {}

SequenceSum.showSequence = a => {
  if (a < 0) return `${a}<0`;
  if (a === 0) return '0=0';
  return `${Array.from(Array(a+1).keys()).join('+')} = ${a * (a + 1) / 2}`
}