//[8 kyu] Multiply the number
function multiply(number){
    return number * (5**(Math.abs(number)+'').length)
  }