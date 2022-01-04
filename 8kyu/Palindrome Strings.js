//[8 kyu] Palindrome Strings
function isPalindrome(line) {
    l = line+''
    return l == [...l].reverse().join('')
  }