/*
Friday the 13th Part 1
https://www.codewars.com/kata/5925acf31a9825d616000e74

It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

Ruby, Python, Crystal:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
JavaScript:

var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;
PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

*/

function killcount(counselors, jason){
    return counselors.filter(v=>v[1]<jason).map(v=>v[0])
}

//killcount=(c,j)=>c.filter(v=>v[1]<j).map(v=>v[0])
//killcount=(c,j)=>c.reduce((a,[n,v])=>v<j?[...a,n]:a,[]);