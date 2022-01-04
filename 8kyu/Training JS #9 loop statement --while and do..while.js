//[8 kyu] Training JS #9: loop statement --while and do..while
const padIt = (str,n) => {
    return '*'.repeat(Math.ceil(n/2)) + str + '*'.repeat(Math.floor(n/2)) 
  }