//[7 kyu] Highest and Lowest
const highAndLow = num => [Math.max(...n = num.split` `.map(v => v*1)),Math.min(...n)].join` `