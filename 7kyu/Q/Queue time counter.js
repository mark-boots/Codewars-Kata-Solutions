//[7 kyu] Queue time counter
function queue(queuers, pos){
    let count=0
    for (let i=0;queuers[pos];i++){
      for (let j=0;j<queuers.length;j++){
        if (queuers[pos]===0){break}
        else {
          if (queuers[j]>0){
              count++
              queuers[j]--
          }
          if (queuers[pos]===0){break}
        }
      }
    }
    return count
  }