/*
Single character palindromes II
https://www.codewars.com/kata/5a66ea69e6be38219f000110

In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

For instance:

solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome. 
solve ("abba") = False, because we cannot get a palindrome by changing any character. 
solve ("abcba") = True. We can change the middle character. 
solve ("aa") = False 
solve ("ab") = True

Good luck!
*/

function solve(str, x=str.split``){
  
    const l = x.slice(0,Math.floor(str.length/2));
    const r = x.slice(0-Math.floor(str.length/2)).reverse();
    
    let dif = l.reduce((dif,c,i)=> dif += c !== r[i],0)
    if(dif == 0 && str.length%2) dif+=1
    
    return dif==1
  }
  