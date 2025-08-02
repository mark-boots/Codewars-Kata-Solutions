//[7 kyu] Pairs of integers from 0 to n
function generatePairs(n) {
    const arr= [];
    for (let i=0;i<=n;i++){
      for (let j=i;j<=n;j++){
        arr.push([i,j])
      }
    }
    return arr
  }