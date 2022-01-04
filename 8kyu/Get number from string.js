//[8 kyu] Get number from string
function getNumberFromString(s) {
    return +s.replace(/\D/g,'')
  }