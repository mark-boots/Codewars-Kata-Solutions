//[7 kyu] Peak array index
function peak(arr){
    const sum = a => a.reduce((sum,val)=>sum+val,0);
    for(let index = 1; index < arr.length-1; index+=1){
      if(sum(arr.slice(0,index)) == sum(arr.slice(index+1))) return index
    }
    return -1
  }