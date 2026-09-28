/*
Find the capitals
https://www.codewars.com/kata/539ee3b6757843632d00026b

nstructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

*/

// capitals=w=>[...w].reduce((a,v,i)=>v.charCodeAt()<91?[...a,i]:a,[]);
capitals=w=>[...w].reduce((a,v,i)=>/A-Z/.test(v)?[...a,i]:a,[]);