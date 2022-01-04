//[8 kyu] NBA full 48 minutes average
const pointsPer48 = (ppg, mpg) => Math.round(ppg/mpg*48*10)/10 || 0