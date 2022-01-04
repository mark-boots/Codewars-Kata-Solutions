//[8 kyu] Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
    let i=0;
    while(i<this) {
      f(i);
      i++
    }
  }