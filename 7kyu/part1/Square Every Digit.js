//[7 kyu] Square Every Digit
const squareDigits = num => +[...''+num].map(v=>v**2).join('')