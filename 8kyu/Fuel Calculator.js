//[8 kyu] Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
    let discount = Math.min(Math.floor(litres/2) * 0.05,0.25)
    return Math.round(litres*(pricePerLitre-discount)*100)/100
  }