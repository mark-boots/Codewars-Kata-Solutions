//[8 kyu] Tip Calculator
let tips = {
    poor:5,
    good:10,
    great:15,
    excellent:20
  }
  function calculateTip(amount, rating) {
    if(rating.toLowerCase()=='terrible') return 0;
    return Math.ceil(amount/100*tips[rating.toLowerCase()]) || 'Rating not recognised'
  }