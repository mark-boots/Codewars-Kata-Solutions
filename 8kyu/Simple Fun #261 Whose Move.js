//[8 kyu] Simple Fun #261: Whose Move
const whoseMove = (lastPlayer, win) => win ? lastPlayer : {white: "black",black: "white"}[lastPlayer]