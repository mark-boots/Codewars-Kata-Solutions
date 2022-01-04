//[8 kyu] Find the first non-consecutive number
function firstNonConsecutive (arr) {
    for(i=1;i<arr.length;i++){
      if(arr[i] - arr[i-1] > 1) return arr[i]
    }
    return null
  }