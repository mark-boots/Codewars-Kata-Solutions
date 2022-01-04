//[8 kyu] Training JS #11: loop statement --break,continue
const grabDoll= dolls => {
    return dolls.filter(doll=>doll == "Hello Kitty" || doll == "Barbie doll").slice(0,3)
  }