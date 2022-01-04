//[6 kyu] Create Phone Number
function createPhoneNumber(numbers){
    numbers.splice(6, 0,"-")
    numbers.splice(3, 0,") ")
    numbers.splice(0,0,"(")
    return numbers.join("");
  }