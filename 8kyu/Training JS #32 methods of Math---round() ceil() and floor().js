//[8 kyu] Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
    let [int,dec] = (n+'').split(".")
    if(int.length>dec.length) return Math.floor(n);
    if(dec.length>int.length) return Math.ceil(n);
    return Math.round(n)
  }