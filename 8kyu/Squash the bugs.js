//[8 kyu] Squash the bugs
const findLongest = str => str.split(" ").map(w=>w.length).sort((a,b)=>b-a)[0]