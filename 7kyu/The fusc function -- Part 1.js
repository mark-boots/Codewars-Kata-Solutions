//[7 kyu] The fusc function -- Part 1
const fusc = n => n<2 ? n : n%2==0 ? fusc(n/2) : fusc((n-1) / 2) + fusc((n+1) / 2)