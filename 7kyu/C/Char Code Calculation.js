//[7 kyu] Char Code Calculation
function calc(x){
    const strSum = s => [...s].reduce((a,b)=>a+Number(b), 0);
    const total1 = [...x].map(v=>v.charCodeAt(0)).join('');
    const total2 = total1.replace(/7/g,'1');
    return strSum(total1) - strSum(total2);
  }