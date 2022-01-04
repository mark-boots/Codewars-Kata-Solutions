//[7 kyu] String prefix and suffix
const solve = s => {
    for (let i = ~~(s.length / 2); i > 0; i--) {
      if (s.slice(0, i) == s.slice(-i)) return i
    }
    return 0;
  }