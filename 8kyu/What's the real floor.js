//[8 kyu] What's the real floor?
function getRealFloor(n) {
    if(n > 13) return n-2;
    if(n < 1) return n
    return n-1
  }