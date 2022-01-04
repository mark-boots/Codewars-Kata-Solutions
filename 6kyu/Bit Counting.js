//[6 kyu] Bit Counting
countBits=(n)=>{return[...n.toString(2),0].reduce((a,b)=>a*1+b*1)}