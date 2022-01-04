//[7 kyu] Maximum Product
function adjacentElementsProduct(array) {
    const products = [];
    for(let i = 0; i < array.length - 1; i++){
      products.push(array[i] * array[i+1]);
    }
    return Math.max(...products)
  }