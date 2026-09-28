//[7 kyu] Largest 5 digit number in a series
const solution = digits =>{
    let num = 0;
    for (let i=0; i<digits.length-4; i++){
      let n = +digits.substr(i, 5)
      if(n > num) num = n;
    }
    return num;
  }