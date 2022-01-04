//[8 kyu] Is your period late?
const periodIsLate = (last, today, cycleLength) => (today-last)/(1000*60*60*24) > cycleLength