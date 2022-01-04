//[8 kyu] Multiple of index
function multipleOfIndex(array) {
    return array.filter((v,i)=>v%i==0)
  }