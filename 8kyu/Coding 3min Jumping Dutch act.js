//[8 kyu] Coding 3min : Jumping Dutch act
function sc(floor){
    let string = '';
    if(floor > 1){
      string+= 'Aa~ '.repeat(floor-1) + 'Pa!'
      if(floor < 7) string+=" Aa!"
    }
    return string
  }