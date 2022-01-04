//[8 kyu] Sum without highest and lowest number
function sumArray(array) {
    if(array == null || array.length < 2) return 0
    min = Math.min(...array);
    max = Math.max(...array);
    return array.reduce((a,b)=>a+b,0) - min - max
  }