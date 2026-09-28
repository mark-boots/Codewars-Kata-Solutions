//[7 kyu] Get the integers between two numbers
const range = (s, e) => Array.from({length : e - s - 1}, (_,i) => s + i + 1)