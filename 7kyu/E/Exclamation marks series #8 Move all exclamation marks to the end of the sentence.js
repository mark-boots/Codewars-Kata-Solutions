//[7 kyu] Exclamation marks series #8: Move all exclamation marks to the end of the sentence
function remove(s){
    return s.split('!').join('') + (s.match(/\!/g)||[]).join('')
  }