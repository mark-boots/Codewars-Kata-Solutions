//[7 kyu] Binary Pyramid 101
const BinaryPyramid = (m,n) => Array.from({length: n-m+1},((_,i)=>(m+i).toString(2))).reduce((a,b)=>a+b*1,0).toString(2)