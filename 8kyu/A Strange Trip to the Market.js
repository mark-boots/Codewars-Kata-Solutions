//[8 kyu] A Strange Trip to the Market
const t = ['tree fiddy','3.50','three fifty']
const isLockNessMonster = s => new RegExp(t.join("|")).test(s)