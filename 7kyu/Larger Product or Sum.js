//[7 kyu] Larger Product or Sum

function sumOrProduct(array, n) {
    const sorted = array.sort((a,b)=> b-a);
    const sum = sorted.slice(0,n).reduce((a,b)=>a+b)
    const product = sorted.slice(-n).reduce((a,b)=>a*b)
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
  }