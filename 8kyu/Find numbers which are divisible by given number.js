//[8 kyu] Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    return numbers.filter(n=>n%divisor==0)
  }