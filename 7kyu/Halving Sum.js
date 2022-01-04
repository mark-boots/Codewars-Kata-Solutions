/*
Halving Sum
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

Task

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.
Example

25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

function halvingSum(n, sum = n, half = ~~(n/2)) {
    return n < 1 ? sum : halvingSum(half, sum + half)
}

//

const halvingSum = n => n > 1 ? n + halvingSum(n / 2 | 0) : n