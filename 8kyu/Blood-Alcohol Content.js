//[8 kyu] Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time){
    A = drinks.ounces*drinks.abv;
    W = weight;
    r = sex == 'male' ? 0.73 : 0.66;
    H = time
    BAC = (A * 5.14 / W * r) - .015 * H;
    return Math.round(BAC*10000)/10000
  }
  