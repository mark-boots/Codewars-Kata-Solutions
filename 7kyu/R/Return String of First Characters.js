//[7 kyu] Return String of First Characters
function makeString(s){
    string = '';
    s.split(' ').forEach(word =>{
      string+=word[0]
    })
    return string 
  }