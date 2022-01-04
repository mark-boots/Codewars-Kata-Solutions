//[7 kyu] Vowel Count
const getCount = str => [...str].filter(v=>[...'aeiou'].includes(v)).length