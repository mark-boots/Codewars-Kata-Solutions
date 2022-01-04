//[8 kyu] Generate range of integers
function generateRange(min, max, step){
    let range = []
    for(i=min; i<=max; i+=step){
      if(i<=max) range.push(i)
    }
    return range
  }