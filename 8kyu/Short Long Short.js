//[8 kyu] Short Long Short
function solution(a,b){
    arr = [a,b].sort((a,b)=>a.length - b.length)
    arr.push(arr[0]);
    return arr.join('')
  }