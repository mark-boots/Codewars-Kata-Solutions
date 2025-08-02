//[7 kyu] Elevator Distance
function elevatorDistance(array) {
    let diff = 0;
    for(let i = 0; i < array.length -1; i++){
      diff += Math.abs(array[i] - array[i+1])
    }
    return diff;
  }