//[7 kyu] Split In Parts
const splitInParts = (s, l) => s.match(new RegExp('.{1,' + l + '}', 'g')).join` `;