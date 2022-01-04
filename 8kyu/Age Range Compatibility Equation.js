//[8 kyu] Age Range Compatibility Equation
function datingRange(age){
    range = age<14 ? [age - 0.10 * age, age + 0.10 * age]: [age/2+7, (age-7)*2]
    return range.map(v=>Math.floor(v)).join("-")
  }