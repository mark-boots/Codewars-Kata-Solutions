//[8 kyu] Calculate Price Excluding VAT
//return price without vat
function excludingVatPrice(price){
    console.log(price)
    if (price == null) return -1
    return Math.round(price / 1.15 *100)/100
  }