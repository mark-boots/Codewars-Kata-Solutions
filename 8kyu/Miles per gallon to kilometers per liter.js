//[8 kyu] Miles per gallon to kilometers per liter
function converter (mpg) {
    return Number((1.609344 / 4.54609188 * mpg).toFixed(2));
  }