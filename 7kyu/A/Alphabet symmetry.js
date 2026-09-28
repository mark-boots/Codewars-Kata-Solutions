//[7 kyu] Alphabet symmetry
function solve(arr){
    returnArr = [];
    arr.forEach(w=>{
      count = [...w].filter((c,i)=> c.toUpperCase().charCodeAt(0) == 65+i).length
      returnArr.push(count)
    })
    return returnArr
  };