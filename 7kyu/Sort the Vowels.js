//[7 kyu] Sort the Vowels!
const sortVowels = s => typeof s === 'string' ? [...s].map(v=>'aeiouAEIOU'.indexOf(v) > -1 ? '|' + v : v + '|').join('\n') : '';