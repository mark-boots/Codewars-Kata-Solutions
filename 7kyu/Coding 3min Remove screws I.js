//[7 kyu] Coding 3min : Remove screws I
function sc(screws){
    let total = 1;
    for (let i=1; i<screws.length; i++){
      total+=2 //move and remove
      if(screws[i] !== screws[i-1]) total+=5; //switch
    }
    console.log(total);
    return total;                       
  }