//[7 kyu] Beginner Series #3 Sum of Numbers
function getSum(...a) {
    const [min,max] = a.sort((a,b)=>a-b);
    let total = 0;
    for(let i = min; i <= max; i++){
      total+=i
    }
    return total || min
  }
  