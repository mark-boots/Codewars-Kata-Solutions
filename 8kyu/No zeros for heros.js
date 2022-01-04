//[8 kyu] No zeros for heros
function noBoringZeros(n) {
    if(n!==0 && n%10 == 0) n = noBoringZeros(n/10);
    return n
  }