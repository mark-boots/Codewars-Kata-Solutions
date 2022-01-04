//[8 kyu] Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
    minLength = [...arr].sort((a,b)=>a.length-b.length)[0].length
    return arr.map(v=>v.substring(0,minLength))
  }