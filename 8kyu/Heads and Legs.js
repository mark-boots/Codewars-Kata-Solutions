//[8 kyu] Heads and Legs
function animals(heads, legs) {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;
    return (legs & 1 || chickens > heads || cows > heads) ? 'No solutions' : [chickens, cows]
  }