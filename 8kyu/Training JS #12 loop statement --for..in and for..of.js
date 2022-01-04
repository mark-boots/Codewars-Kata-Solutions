//[8 kyu] Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj){
    fives = []
    for(key in obj){
      key.length == 5 ? fives.push(key) : ''
      obj[key].length == 5? fives.push(obj[key]): ''
    }
    return fives
  }
  