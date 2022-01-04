//[8 kyu] Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    switch(true){
        case (n<5) : return n*100;
        case (n<10) : return n*95;
        default: return n*90
    }
  }