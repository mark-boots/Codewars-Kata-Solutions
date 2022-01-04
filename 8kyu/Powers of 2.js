//[8 kyu] Powers of 2
function powersOfTwo(n){
    powers = []
    for(i=0; i<=n; i++){
      powers.push(2**i)
    }
    return powers
  }