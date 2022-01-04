//[7 kyu] 16+18=214
function add(...nums) {
    let str = []
    let numA = nums.map((n)=>[...''+n].reverse());
    for(let i = 0; i<Math.max(...nums).toString().length; i++){
      str.push((parseInt(numA[0][i]) || 0) + (parseInt(numA[1][i]) || 0))
    }
    return parseInt(str.reverse().join(''))
  }