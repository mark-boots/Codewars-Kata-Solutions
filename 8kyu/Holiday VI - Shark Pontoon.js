//[8 kyu] Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let me = pontoonDistance / youSpeed;
    let shark = sharkDistance / (sharkSpeed / (dolphin ? 2 : 1));
    return me >= shark ? 'Shark Bait!': 'Alive!'
  }