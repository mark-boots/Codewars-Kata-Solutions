//[6 kyu] Split Strings
function solution(str){
    let arr=[]
    if(str.length % 2 == 1) str+='_'
    for(let i=0; i<str.length/2;i++){
      arr.push(str.substr(i*2,2))
    }
    return arr;
  }