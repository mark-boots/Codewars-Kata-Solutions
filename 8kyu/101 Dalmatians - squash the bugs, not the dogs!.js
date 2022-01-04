//[8 kyu] 101 Dalmatians - squash the bugs, not the dogs!
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = number => {
  switch(true){
      case (number <= 10): return dogs[0];
      case (number <= 50): return dogs[1];
      case (number == 101): return dogs[3];
      default: return dogs[2]
  }
}