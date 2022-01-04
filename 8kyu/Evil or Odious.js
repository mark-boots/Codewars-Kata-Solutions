//[8 kyu] Evil or Odious
const evil = n => [...n.toString(2)].filter(v=>v==1).length % 2 === 0 ? "It's Evil!" : "It's Odious!"