//[8 kyu] Training JS #13: Number object and its properties
function whatNumberIsIt(n){
    str = 'Input number is '
    n = eval(n)
    switch(true){
        case (n == Number.MAX_VALUE): return str+'Number.MAX_VALUE'
        case (n == Number.MIN_VALUE): return str+'Number.MIN_VALUE'
        case (Number.isNaN(n)): return str+'Number.NaN'
        case (n == Number.NEGATIVE_INFINITY): return str+'Number.NEGATIVE_INFINITY'
        case (n == Number.POSITIVE_INFINITY): return str+'Number.POSITIVE_INFINITY'
        default: return str+n 
    }
  }