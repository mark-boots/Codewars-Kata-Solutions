/*
#1 Matrices : Making an Alternating Sum
https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5

We have a matrix of integers with m rows and n columns.
(a11a12⋯a1na21a22⋯a2n⋯⋯⋯⋯⋯⋯⋯⋯am1am2⋯amn)\begin{pmatrix} a_{11} & a_{12} & \cdots &a_{1n} \\ a_{21} & a_{22} &\cdots &a_{2n} \\ \cdots & \cdots & \cdots & \cdots \\ \cdots & \cdots & \cdots & \cdots \\ a_{m1} & a_{m2} & \cdots &a_{mn} \end{pmatrix}⎝
⎛​a11​a21​⋯⋯am1​​a12​a22​⋯⋯am2​​⋯⋯⋯⋯⋯​a1n​a2n​⋯⋯amn​​⎠
⎞​

We want to calculate the total sum for the matrix:
∑i=1m∑j=1n(−1)i+jaij\displaystyle\sum_{i=1}^{m} \sum_{j=1}^{n} (-1)^{i+j}a_{ij}i=1∑m​j=1∑n​(−1)i+jaij​

As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.

Let's see an example:

matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]

total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8

You may be given matrixes with their dimensions between these values:10 < m < 300 and 10 < n < 300.

More example cases in the Example Test Cases. Enjoy it!!
*/

const scoreMatrix = matrix =>
  matrix.reduce((sum, row, ri) => (row.map((val, vi) => sum += (ri%2 == vi%2 ? val : -val)), sum),0)
