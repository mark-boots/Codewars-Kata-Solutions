
//[8 kyu] Filter out the geese
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    newBirds = []
    birds.forEach(bird=>{
      if(!geese.includes(bird)) newBirds.push(bird);
    })
    return newBirds;
    // return an array containing all of the strings in the input array except those that match strings in geese
  };