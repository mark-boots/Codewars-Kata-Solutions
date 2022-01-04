//[8 kyu] Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
    let human = humanYears;
    let cat = 0;
    let dog = 0;
    if(human >= 1){
      human-=1;
      cat+=15;
      dog+=15
    }
    if(human >= 1){
      human-=1
      cat+=9;
      dog+=9
    }
    if(human > 0) {
      cat+=human*4;
      dog+=human*5;
    }
    return [humanYears,cat,dog]
  }