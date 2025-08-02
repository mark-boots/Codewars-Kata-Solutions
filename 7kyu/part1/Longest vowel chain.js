//[7 kyu] Longest vowel chain
const solve = s => s.split(/[^aeiou]+/).sort((a,b)=>b.length - a.length)[0].length