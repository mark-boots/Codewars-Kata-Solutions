//[8 kyu] Is there a vowel in there?
isVow = a =>a.map(c=>[97,101,105,111,117].includes(c)?String.fromCharCode(c):c)