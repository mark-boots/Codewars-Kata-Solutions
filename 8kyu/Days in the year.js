//[8 kyu] Days in the year
const yearDays = year => `${year} has ${(year%4===0 && year%100!==0) || year==0? 366:365} days`