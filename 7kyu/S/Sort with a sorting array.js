//[7 kyu] Sort with a sorting array
function sort(initialArray, sortingArray) {
    const arr = [];
    for(let i=0; i<sortingArray.length;i++){
      arr[sortingArray[i]] = initialArray[i];
    }
    return arr;
  }