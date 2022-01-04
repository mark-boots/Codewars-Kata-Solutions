//[7 kyu] last digits of a number
function lastDigit(n, d) {
    if(d>n.length) return n;
    if(d<= 0) return [];
    return [...n+''].slice(-d).map(v=>v*1);
  }