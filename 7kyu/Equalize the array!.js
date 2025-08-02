/*
Equalize the array!
https://www.codewars.com/kata/580a1a4af195dbc9ed00006c

No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!

*/

const equalize = array => array.map(v=>new Intl.NumberFormat('en',{signDisplay:'always'}).format(v-array[0]))