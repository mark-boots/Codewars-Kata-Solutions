//[8 kyu] Is it a palindrome?
function isPalindrome(x) {
    x=x.toLowerCase()
    return x === [...x].reverse().join('')
  }