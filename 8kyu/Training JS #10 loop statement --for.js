//[8 kyu] Training JS #10: loop statement --for
function pickIt(arr){
    //for(...)
    return [arr.filter(v=>v%2==1),arr.filter(v=>v%2==0)];
  }