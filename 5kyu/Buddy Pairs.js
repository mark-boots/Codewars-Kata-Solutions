//[5 kyu] Buddy Pairs
const sumDivisors = (num) => {
    let sum = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
       sum += i + num/i;
      }
    }
    return sum;
  }
function buddy(start,limit) {
  for(let i = start; i <= limit; i++) {
    let sd = sumDivisors(i)
    if(i < sd && i === sumDivisors(sd)) return [i,sd];
  }
  return "Nothing";
}