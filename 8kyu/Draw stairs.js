//[8 kyu] Draw stairs
function drawStairs(n) {
    let arr = Array.from({length:n}, (_,i)=>' '.repeat(i)+"I");
    return arr.join('\n')
  }