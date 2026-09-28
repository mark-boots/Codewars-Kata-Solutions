//[7 kyu] Find the divisors!
function divisors(integer) {
    const devisors = []
    for(let i = 2; i <= integer/2; i++){
      if(integer%i==0)devisors.push(i)
    }
    return devisors.length > 0 ? devisors : `${integer} is prime`
  }