//[7 kyu] Stanton measure
const stantonMeasure = arr => {
    const n = arr.filter(v => v == 1).length;
    return arr.filter(v => v == n).length;
  }