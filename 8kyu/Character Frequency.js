//[8 kyu] Character Frequency
function charFreq(message) {
    return [...message].reduce(function(acc,e){acc[e] = (e in acc ? acc[e]+1 : 1); return acc}, {});
  }