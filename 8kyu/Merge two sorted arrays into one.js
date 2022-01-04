//[8 kyu] Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2).sort((a,b)=>a-b))]
  }