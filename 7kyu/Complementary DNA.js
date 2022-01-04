//[7 kyu] Complementary DNA
function DNAStrand(dna){
    const d = { A: "T", T: 'A', C: 'G', G: 'C' }
    return [...dna].map(v => d[v]).join('')
  }