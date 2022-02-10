/*
Simple Pig Latin
https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
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

  //or 

  const pigIt = str => str.replace(/(\w)(\w*)/g,"$2$1ay")