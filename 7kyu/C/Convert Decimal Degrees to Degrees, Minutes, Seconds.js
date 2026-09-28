
//[7 kyu] Convert Decimal Degrees to Degrees, Minutes, Seconds
const convert = (degrees)  => {
    const d  = parseInt(degrees);
    const m  = parseInt(degrees % 1 * 60);
    const s = Math.round(degrees % 1 * 60 % 1 * 60);
    return s ? [d,m,s] : m ? [d,m] : [d];
  }