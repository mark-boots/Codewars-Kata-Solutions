/*
Magic Sum of 3s
https://www.codewars.com/kata/57193a349906afdf67000f50

The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned

*/

function magicSum(numbers) {
    return numbers.reduce((s, v)=>s + (v && v % 2 && (''+v).indexOf('3')!== -1 ? v: 0),  0)
}
// magicSum=n=>n.reduce((s,v)=>s+(v&&v%2&&/3/g.test(""+v)?v:0),0)