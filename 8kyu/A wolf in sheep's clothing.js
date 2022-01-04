//[8 kyu] A wolf in sheep's clothing
function warnTheSheep(queue) {
    sheep_nr = queue.length-queue.indexOf("wolf")-1
    return sheep_nr>0
      ? `Oi! Sheep number ${sheep_nr}! You are about to be eaten by a wolf!` 
      : `Pls go away and stop eating my sheep`
  }