//[8 kyu] Drink about
function peopleWithAgeDrink(old) {
    switch(true){
        case(old<14): return 'drink toddy';
        case(old<18): return 'drink coke';
        case(old<21): return 'drink beer';
        default: return 'drink whisky';
    }
  };