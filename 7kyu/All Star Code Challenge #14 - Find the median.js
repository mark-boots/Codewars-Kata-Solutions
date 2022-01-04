//[7 kyu] All Star Code Challenge #14 - Find the median
const median = arr => {
    const a = arr.sort((a,b)=>a-b);
    const m = Math.floor(a.length /2);
    return a.length % 2 ? a[m] : (a[m] + a[m - 1]) / 2
  }