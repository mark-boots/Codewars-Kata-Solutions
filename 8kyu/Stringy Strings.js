//[8 kyu] Stringy Strings
function stringy(size) {
    str='1'  
    for(let i = 1; i <size; i++){
      str+= (i%2==1 ? '0' : '1')
    }
    return str
  }
  