//[7 kyu] Pairs of integers from m to n
const generatePairs = (m, n, r=[]) =>{
    for(let i = m; i<=n; i++){
      b = i;
      while(b<=n){
        r.push([i,b++])
      }
    }
    return r;
  }