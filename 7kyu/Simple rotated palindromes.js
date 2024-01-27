/*
Simple rotated palindromes
https://www.codewars.com/kata/5a8fbe73373c2e904700008c

In this Kata, you will be given a string and your task is to determine if that string can be a palindrome if we rotate one or more characters to the left.

solve("4455") = true, because after 1 rotation, we get "5445" which is a palindrome
solve("zazcbaabc") = true, because after 3 rotations, we get "abczazcba", a palindrome
More examples in test cases. Input will be strings of lowercase letters or numbers only.

Good luck!

*/

const isPalindrome = str => str === str.split('').reverse().join('');
const solve = s => {
    for (let i = 0; i < s.length; i++) {
      if (isPalindrome(s.slice(i) + s.slice(0, i))) return true;
    }
    return false;
};

// solve=s=>(f=s=>s==[...s].reverse().join``,[...s].some((_,i)=>f(s.slice(i)+s.slice(0,i))))
// solve=s=>[...s].some((_,i)=>s==s.slice(i)+s.slice(0,i).split``.reverse().join``)
