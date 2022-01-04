//[8 kyu] Points of Reflection
function symmetricPoint(p, q) {
    x = q[0] - (p[0]-q[0])
    y = q[1] - (p[1]-q[1])
    return [x,y]
  }
  