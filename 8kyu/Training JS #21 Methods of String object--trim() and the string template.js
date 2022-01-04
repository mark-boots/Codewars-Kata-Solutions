//[8 kyu] Training JS #21: Methods of String object--trim() and the string template
const fiveLine = s => Array.from({length:5},(_,i)=>s.trim().repeat(i+1)).join("\n")