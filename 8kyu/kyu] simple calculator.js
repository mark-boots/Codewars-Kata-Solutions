//[8 
function calculator(a,b,sign){
    result = 'unknown value'
    if(typeof(a*b) == "number" && '+-*/'.includes(sign)){
    result = eval(a+sign+b);  
    }
    return result
  }