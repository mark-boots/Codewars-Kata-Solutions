//[7 kyu] Jumping Number (Special Numbers Series #4)
function jumpingNumber(n){
    const arr = [...''+n]
    for(let i = 1; i< arr.length; i++){
      if(Math.abs(+arr[i-1] - arr[i]) !== 1) return 'Not!!'
    }
    return  'Jumping!!'
  }