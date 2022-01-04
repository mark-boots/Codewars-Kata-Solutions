//[8 kyu] noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num){
    let sorted = [...num.toString()].sort((a,b)=>b-a).join('')
    return +sorted
  }