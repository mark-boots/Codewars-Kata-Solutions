//[7 kyu] Deodorant Evaporator
const evaporator = (c, e, t, d = 0, p = 100) => {
    while (p > t) {
      p -= p * e / 100;
      d += 1;
    }
    return d;
  }
  