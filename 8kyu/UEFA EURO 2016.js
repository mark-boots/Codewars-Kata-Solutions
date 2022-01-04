//[8 kyu] UEFA EURO 2016
function uefaEuro2016(t, s){
    result = ''
    if(s[0] == s[1]){
      result = 'teams played draw.'  
    } else if(s[0] > s[1]){
      result = t[0] + ' won!'
    } else {
      result = t[1] + ' won!'
    }
    return `At match ${t[0]} - ${t[1]}, ${result}`
  }