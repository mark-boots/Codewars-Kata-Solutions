//[7 kyu] Double Trouble
function trouble(x, t){
    const returnArr = [];
    for(let i = 0; i<x.length; i++){
        if(returnArr[returnArr.length-1] + x[i] !== t) returnArr.push(x[i]);
    }
    return returnArr
}