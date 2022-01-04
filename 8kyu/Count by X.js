//[8 kyu] Count by X
function countBy(x, n) {
    return Array.from({length:n},(_,i)=>x+x*i)
  }