/*
CubeSummation
https://www.codewars.com/kata/550e9fd127c656709400024d

*/

function cubeSum(n, m){
    let sum = 0
      for(let i = Math.max(m,n); i > Math.min(m,n); i--){
      sum += i**3    
    }
    return sum
}

//

const cubeSum=(n,m)=>[...Array(Math.abs(n-m))].reduce((s,_,i)=>s+(Math.max(m,n)-i)**3,0)