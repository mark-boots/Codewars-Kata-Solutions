//[8 kyu] How old will I be in 2099?
function  calculateAge(then,now) {
    age = now-then
    switch(true){
        case (age < -1): return `You will be born in ${Math.abs(age)} years.`
        case (age == -1): return `You will be born in 1 year.`
        case (age == 0): return `You were born this very year!`
        case (age == 1): return `You are 1 year old.`
        default: return `You are ${age} years old.`
    }
  }