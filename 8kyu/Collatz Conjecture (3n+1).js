//[8 kyu] Collatz Conjecture (3n+1)
const hotpo = (n, counter = 0) => 
  n == 1 
    ? counter 
    : hotpo(n%2 === 0 ? n/2 : 3*n+1, counter+1)