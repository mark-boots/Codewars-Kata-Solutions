//[7 kyu] Difference between biggest 2 numbers
function diffBig2(arr) {
    first = arr.splice(arr.indexOf(Math.max(...arr)),1);
    second = arr.splice(arr.indexOf(Math.max(...arr)),1);
    return first - second;
  }