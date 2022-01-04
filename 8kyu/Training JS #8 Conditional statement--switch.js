//[8 kyu] Training JS #8: Conditional statement--switch
function howManydays(month){
    var days;
    switch (true){
      case (month == 2):return 28
      case ([1,3,5,7,8,10,12].includes(month)): return 31;
      default: return 30;
    }
  }