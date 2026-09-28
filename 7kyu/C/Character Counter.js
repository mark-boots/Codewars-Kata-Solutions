//[7 kyu] Character Counter
const validateWord = s => !(s.length % new Set(s.toLowerCase()).size)
function validateWord(s)
{
  counts = Object.values([...s.toLowerCase()].reduce((acc, val) => (acc[val] ? (acc[val]++) : (acc[val]=1), acc),{}));
  return Math.min(...counts) == Math.max(...counts)
}