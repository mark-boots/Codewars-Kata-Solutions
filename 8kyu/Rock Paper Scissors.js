//[8 kyu] Rock Paper Scissors!
const wins = {
    "scissors": "paper",
    "paper": "rock",
    "rock": "scissors"
  }
  const rps = (p1, p2) => {
    if (p1 === p2) {
      return 'Draw!'
    } else if (p2 == wins[p1]){
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  };