//[8 kyu] Power
const numberToPower = (number, power) => Array.from(Array(power)).reduce((s, _) => s * number, 1)