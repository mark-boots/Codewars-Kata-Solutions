//[6 kyu] Find the missing letter
function findMissingLetter(array)
{
  for(let i = 0; i<array.length-1; i++){
    let charCodeCurrent = array[i].charCodeAt(0);
    let charCodeNext = array[i+1].charCodeAt(0);
    if(charCodeNext - charCodeCurrent == 2) return String.fromCharCode(charCodeNext-1) 
  }
}