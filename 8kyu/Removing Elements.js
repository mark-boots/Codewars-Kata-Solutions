//[8 kyu] Removing Elements
function removeEveryOther(arr){
    for(i=1;i<=arr.length-1;i++){
      arr.splice(i,1)
    }
    return arr
  }