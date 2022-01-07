/*
Alphabetical Addition
https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.
Notes:

    Letters will always be lowercase.
    Letters can overflow (see second to last example of the description)
    If no letters are given, the function should return 'z'

Examples:

addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

//

const addLetters = (...l) => String.fromCharCode((l.reduce((a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97)