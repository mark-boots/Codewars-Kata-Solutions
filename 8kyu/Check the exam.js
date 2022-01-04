//[7 kyu] Check the exam
function checkExam(array1, array2) {
    console.log
    let score = 0;
    for(i=0;i<array1.length;i++){
      if(array2[i] !== ""){
        score += (array1[i] == array2[i]? 4:-1)
      }
    }
    return score > 0 ? score : 0
  }