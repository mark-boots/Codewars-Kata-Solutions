//[8 kyu] Localize The Barycenter of a Triangle
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) =>
  [[xA, xB, xC], [yA, yB, yC]].map(points =>
    Number((points.reduce((total, point) => total + point, 0) / 3).toFixed(4))
  )