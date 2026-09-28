/*
Mean vs. Median
https://www.codewars.com/kata/5806445c3f1f9c2f72000031

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)

*/

function meanVsMedian(numbers) {
    const mean = numbers.reduce((a,b)=>a+b,0)/numbers.length;
    const median = numbers.sort((a,b)=>a-b)[~~(numbers.length/2)];
    return mean > median ? 'mean' : mean < median ? 'median' : 'same'
}
//meanVsMedian=(n,l=n.length)=>['median','same','mean'][Math.sign(n.reduce((a,b)=>a+b)/l-n.sort((a,b)=>a-b)[l/2|0])+1]
