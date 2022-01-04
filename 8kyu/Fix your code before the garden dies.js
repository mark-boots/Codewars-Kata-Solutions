//[8 kyu] Fix your code before the garden dies!
const rainAmount = mm =>
    mm < 40
      ? "You need to give your plant " + (40 - mm) + "mm of water"
      : "Your plant has had more than enough water for today!"