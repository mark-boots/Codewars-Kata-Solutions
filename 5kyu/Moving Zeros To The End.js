//[5 kyu] Moving Zeros To The End
var moveZeros = function (arr) {
    let length = arr.length;
    let zeroes = 0;
    let newArray = []
    for(i = 0; i<length; i++){
      if(typeof arr[i]==='number' && arr[i] === 0){
        zeroes++
      } else {
        newArray.push(arr[i])
      }
    }
    newArray.push(...Array(zeroes).fill(0))
    return newArray
  }