//[8 kyu] Crash Override
function aliasGen(a, b){
    [a,b] = [a[0].toUpperCase(), b[0].toUpperCase()]
    if(!(/^[A-Z]+$/.test(a+b))) return "Your name must start with a letter from A - Z."
    return `${firstName[a]} ${surname[b]}`
  }