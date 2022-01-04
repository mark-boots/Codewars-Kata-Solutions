//[8 kyu] Name on billboard
const billboard = (name, price = 30) => [...name].reduce(sum=>sum+price,0)