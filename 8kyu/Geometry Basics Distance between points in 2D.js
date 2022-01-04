//[8 kyu] Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y)
  }