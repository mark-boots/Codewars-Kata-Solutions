//[7 kyu] Driving School Series #2
function cost (mins) { 
    if(mins <= 60) return 30
    return Math.ceil((mins - 65) / 30) * 10 + 30
  } 