//[8 kyu] Multiplication table for number
function multiTable(n) {
    return Array.from({length:10},(_,i)=>`${i+1} * ${n} = ${(i+1)*n}`).join('\n')
  }
  