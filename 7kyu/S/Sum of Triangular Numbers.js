//[7 kyu] Sum of Triangular Numbers
function sumTriangularNumbers(n) {
    return n <=0 ? 0 : (n*(n+1)*(n+2))/6
  }