//[7 kyu] Thinking & Testing : How many "word"?
const testit = s => (s.match(/w.*?o.*?r.*?d/ig) || []).length;