//[8 kyu] How much water do I need?
const howMuchWater = (water, load, clothes) =>
  clothes > 2 * load
    ? 'Too much clothes'
    : clothes < load 
       ? 'Not enough clothes' 
       : Number((water * 1.1 ** (clothes - load)).toFixed(2))
