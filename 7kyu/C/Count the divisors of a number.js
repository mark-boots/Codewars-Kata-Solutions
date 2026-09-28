//[7 kyu] Count the divisors of a number
const getDivisorsCnt = (n) => [...Array(n + 1).keys()].slice(1).filter((i) => n % i === 0).length