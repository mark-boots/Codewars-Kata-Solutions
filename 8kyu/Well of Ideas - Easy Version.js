//[8 kyu] Well of Ideas - Easy Version
function well(x){
    let count = x.filter(r=>r=='good').length;
    switch(true){
        case (count<1): return 'Fail!';
        case (count<3): return 'Publish!';
        default: return 'I smell a series!'
    }
  }