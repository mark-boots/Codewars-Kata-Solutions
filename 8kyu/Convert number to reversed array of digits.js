//[8 kyu] Convert number to reversed array of digits
const digitize = n => [...n+''].map(Number).reverse();