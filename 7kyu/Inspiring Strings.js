/*
Inspiring Strings
https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

*/

function passed (list) {
  const [total, count] = list.reduce(([total, count], score) => {
    if(score <= 18) {
      total += score;
      count++
    }
    return [total, count]
  },[0, 0])
  
  return count ? Math.round(total / count) : "No pass scores registered."
}

// 
function longestWord(stringOfWords) {
  return stringOfWords.split(" ").sort((a,b)=>a.length - b.length).at(-1)
}