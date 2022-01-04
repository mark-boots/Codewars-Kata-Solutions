//[6 kyu] Convert string to camel case
function toCamelCase(str){
    let returnString = '';
    for(let i = 0; i<str.length; i++){
      if(str[i] == "_" || str[i] == "-"){
        returnString+= str[i+1].toUpperCase()
        i++;
      } else {
        returnString+=str[i]
      }
    }
    return returnString;
  }