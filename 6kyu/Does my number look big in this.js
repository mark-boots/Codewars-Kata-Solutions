//[6 kyu] Does my number look big in this?
function narcissistic(value) {
    let numbers = [...value.toString()], sum = 0;
    numbers.forEach((n) => {
      sum += Math.pow(parseInt(n), numbers.length);
    });
    return sum == value;
  }