//[7 kyu] The Pony Express
const riders = s => s.reduce(([a, r], d) => a + d <= 100 ? [a+d, r] : [d, r+1], [0,1])[1]