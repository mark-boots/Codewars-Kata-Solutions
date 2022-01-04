//[5 kyu] Simple Pig Latin
function pigIt(str){
    let words = str.split(" ")
    let punctuation = [".", ",", ":", "!", "?"]
    let newwords = []
    words.forEach(word => {
      let letters = [...word];
      letters.push(letters.shift())
      newString = letters.join("")
      if(!punctuation.includes(newString)) newString += "ay"
      newwords.push(newString)
    })
    return newwords.join(" ")
  }