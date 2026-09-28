/*
Averages of numbers
https://www.codewars.com/kata/57d2807295497e652b000139
*/

const averages = n => (n||[]).map((v,i)=>i?(v+n[i-1])/2:v).slice(1)