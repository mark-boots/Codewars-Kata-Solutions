//[8 kyu] Polish alphabet
const chars = {
    "ą":"a",
    "ć":"c",
    "ę":"e",
    "ł":"l",
    "ń":"n",
    "ó":"o",
    "ś":"s",
    "ź":"z",
    "ż":"z"
  }
  const correctPolishLetters = string => [...string].map(c=>chars[c] || c).join('')
  