//[8 kyu] Sum of Multiples
const sumMul = (n,m) => m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);

function sumMul(n,m){
  console.log(arguments)
  if(m<1 || n<1) return "INVALID";
  return Array.from({length:Math.floor(m/n)},(_,i)=>n+n*i).reduce((sum,val)=>sum+val,0)  
}