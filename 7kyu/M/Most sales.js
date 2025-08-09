/*
Most sales
https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript

You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.

*/

const top3=(p,a,r)=>p.map((n,i)=>({n,r:a[i]*r[i],i})).sort((a,b)=>b.r-a.r||a.i-b.i).slice(0,3).map(v=>v.n)
