/*
Knight's tour problem on (N x M) desk
https://www.codewars.com/kata/5fc836f5a167260008dfad7f

In this Kata your task is to check the possibility to solve the 'Knight's tour problem' for the desk of the current size.

A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. If the knight ends on a square that is one knight's move away from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed; otherwise, it is open.

In this Kata we will think only about open tours.
Input

n, m - desk size.

0 < n < 10.

0 < m < 10.
Output

Return true if a tour exist for the current desk. Otherwise return false

*/

const check=(m,n)=>([m,n]=n<m?[n,m]:[m,n],m==3&&(n==4||n>=7)||m==4&&n>=5||m>4)
