//[5 kyu] Extract the domain name from a URL
function domainName(str){
    return str.replace(/http:|https:|\/\/|www.|/gi,"").split(".")[0]
  }