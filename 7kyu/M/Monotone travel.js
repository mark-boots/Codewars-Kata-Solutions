//[7 kyu] Monotone travel
const isMonotone = arr => {
    for(let i = 1; i< arr.length; i++){
      if(arr[i-1] > arr[i]) return false
    }
    return true;
  }