//[8 kyu] The Feast of Many Beasts
const firstLast = str => str[0]+[...str].pop()
const feast = (beast, dish) => firstLast(beast) === firstLast(dish)