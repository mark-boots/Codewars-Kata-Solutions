//[8 kyu] Remove First and Last Character Part Two
function array(arr){
    let _arr =  arr.split(",").slice(1,-1).join(" ")
    return _arr.length > 0 ? _arr : null
  }