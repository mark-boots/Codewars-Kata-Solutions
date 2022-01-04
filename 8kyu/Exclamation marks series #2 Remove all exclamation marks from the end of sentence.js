//[8 kyu] Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(s){
    return s.replace(/!+$/,'')
  }