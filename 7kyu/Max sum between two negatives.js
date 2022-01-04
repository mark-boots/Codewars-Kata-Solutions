/*
Max sum between two negatives
https://www.codewars.com/kata/6066ae080168ff0032c4107a

You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.

No negative element should be present in this sum.

Example:

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^

Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.
*/

function maxSumBetweenTwoNegatives(a) {
    results = [-1]
    for(let i = 0; i < a.length; i++){
      if(a[i] < 0){
        sum = 0;
        for(let j = i+1; j < a.length; j++){
          if(a[j] < 0) {
            results.push(sum)
            break
          } else sum += a[j]
        }
      }
    }
    return Math.max(...results)
}