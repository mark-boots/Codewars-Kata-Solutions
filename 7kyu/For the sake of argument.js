//[7 kyu] For the sake of argument
const numbers = (...arg) => !arg.filter(a=>typeof a !== 'number').length > 0;