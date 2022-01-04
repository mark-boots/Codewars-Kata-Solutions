//[7 kyu] Consecutive letters
const solve = ([...s]) => {
    console.log(s);
    const cc = s.map(c => c.charCodeAt(0));
    return Math.max(...cc) - Math.min(...cc) == s.length -1;
  }