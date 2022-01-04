//[8 kyu] Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) return [];
    sums = [0,0]
    input.map(n=> n>0 ? sums[0]++ : sums[1]+=n)
    return sums 
  }