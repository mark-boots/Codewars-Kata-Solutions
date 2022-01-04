//[8 kyu] Thinkful - Logic Drills: Traffic light
const colors = ['green','yellow','red'];
const updateLight = current => colors[(colors.indexOf(current)+1)%colors.length]