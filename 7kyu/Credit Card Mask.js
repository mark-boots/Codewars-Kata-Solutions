//[7 kyu] Credit Card Mask
function maskify(cc) {
    const endString = cc.slice(-4);
    const startString = cc.length > 4 ? cc.slice(0,cc.length-4).replace(/./g,'#') : '';
    return startString+endString
  }