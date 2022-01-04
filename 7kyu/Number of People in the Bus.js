//[7 kyu] Number of People in the Bus
const number = stops => stops.reduce((peeps, [on, off]) => peeps + on - off, 0);