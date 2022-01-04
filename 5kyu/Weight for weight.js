//[5 kyu] Weight for weight
function orderWeight(str) {
    let table = []
    let weights = str.trim().split(" ");
    for(let i = 0 ; i< weights.length; i++){
      let sum = 0;
      for(let j=0; j<weights[i].length; j++){
        sum += Number(weights[i][j]);
      }
      table.push([weights[i],sum]);
    }
    table.sort((a,b) => {
      return a[1] - b[1] || a[0].localeCompare(b[0]);
    })
    return table.map(r =>{ return r[0]}).join(" ");
  }