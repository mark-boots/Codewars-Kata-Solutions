//[8 kyu] Correct the mistakes of the character recognition software

function correct(str){
    str = str.replace(/5/g,'S')
    str = str.replace(/0/g,'O')
    return str.replace(/1/g,'I')
  }