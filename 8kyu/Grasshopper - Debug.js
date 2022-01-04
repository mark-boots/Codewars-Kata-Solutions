//[8 kyu] Grasshopper - Debug
const convert = temp => (temp - 32) * (5/9)
function weatherInfo (temp) {
  return `${convert(temp)} is ${convert(temp) > 0 ? 'above ':''}freezing temperature`
}