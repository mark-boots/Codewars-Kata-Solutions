//[7 kyu] Simple Fun #69: Are Equally Strong?
function areEquallyStrong(yl, yr, fl, fr) {
    return Math.max(yl,yr) == Math.max(fl,fr) && Math.min(yl,yr) == Math.min(fl,fr);
  }