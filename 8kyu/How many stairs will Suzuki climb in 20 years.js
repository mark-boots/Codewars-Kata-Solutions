//[8 kyu] How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
    return s.reduce((s1, v1) => s1 + v1.reduce((s2, v2) => s2 + v2, 0), 0) * 20
  }