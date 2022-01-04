//[8 kyu] Logical calculator
function logicalCalc(array, op){
    if(op == 'AND') return !array.includes(false)
    if(op == 'OR') return array.reduce((a,b) => a || b);
    if(op == 'XOR') return array.reduce((a,b) => a != b);
  }