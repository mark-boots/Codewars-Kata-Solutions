/*
Nickname Generator
https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified

*/

function nicknameGenerator(name) {
  return name.length < 4 
    ? "Error: Name too short" 
    : name.slice(0, /[aeiou]/.test(name[2]) ? 4 : 3)
}

//

nicknameGenerator=n=>n.length<4?"Error: Name too short":n.slice(0,3+/[aeiou]/.test(n[2]))