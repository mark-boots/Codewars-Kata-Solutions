//[8 kyu] Pillars
function pillars(num_pill, dist, width) {
    return num_pill < 2
      ? 0
      : num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
  }