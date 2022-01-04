//[8 kyu] Total amount of points
const getResult = g => {
    let result = g.split(":")
    if(result[0]>result[1]) return 3;
    if(result[0]<result[1]) return 0;
    return 1;
  }
  const points = games => games.reduce((a,b)=>a+getResult(b),0)