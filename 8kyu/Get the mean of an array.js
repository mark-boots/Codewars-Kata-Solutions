//[8 kyu] Get the mean of an array
function getAverage(marks){
    return (Math.floor(marks.reduce((a, b) => a + b) / marks.length));
  }