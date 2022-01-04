//[8 kyu] Return Two Highest Values in List
const twoHighest = arr => [...new Set(arr)].sort((a,b)=>b-a).splice(0,2)